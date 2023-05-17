class Markers
{
    constructor()
    {
        this.infoWindow = null;
        this.rippleSeconds = 10;
        this.rippleSize = 100;
        this.markers = [];
        this.ripples = [];
        this.locations = new Locations();
    }

    getBounds()
    {
        var bounds = new google.maps.LatLngBounds();

        let pastMarkers = [];
        for(let marker of this.markers) {
            if (!this.isFuture(marker.date)) {
                pastMarkers.push(marker);
            }
        }

        for (let marker of pastMarkers.slice(-2))
        {
            bounds.extend(marker.position);
        }

        return bounds;
    }

    getIconProperties()
    {
        return {
            path: google.maps.SymbolPath.CIRCLE,
            fillOpacity: 0,
            strokeColor: '#ffffff',
            strokeWeight: 2,
            scale: 3
        }
    }

    run()
    {
        this.createMarkers();
        this.updateStats()
    }

    updateStats() {
        var totalDistance = 0;
        for (let i = 1; i < this.markers.length; i++) {
            if (!this.isFuture(this.markers[i].date)) {
                totalDistance += this.markerDistance(this.markers[i], this.markers[i-1]);
            }
        }

        document.getElementById('distance').innerText = Math.round(totalDistance).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " miles";

        var firstDate = new Date(this.locations.list[0].date);
        document.getElementById('time').innerText = this.timeBetween(firstDate, new Date());

        var hoursPassed = Math.floor((new Date() - firstDate) / 1000) / 3600;

        document.getElementById('stayed').innerText = this.getStayedCount();
        document.getElementById('countries').innerText = this.getUniqueCountries().length;

        var nextMarker = this.getNextMarker();
        if (nextMarker) {
            var timeUntil = this.timeBetween(new Date(), Date.parse(nextMarker.date))
            document.getElementById('next').innerText = timeUntil;
        }
    }

    isFuture(date) {
        return (new Date() - new Date(date) < 0);
    }

    getStayedCount() {
        let stayedCount = 0;


        for (let location of this.getUniqueLocations()) {
            if (this.isFuture(location.date)) {
                continue;
            }

            if (location.stay === false) {
                continue;
            }

            stayedCount++;
        }

        return stayedCount - 1; // Excluding home

    }

    getUniqueLocations() {
        let locations = [];

        locationsLoop:
        for (let location of this.locations.list) {
            for (let addedLocation of locations) {
                if (
                    location.coordinates.lat === addedLocation.coordinates.lat &&
                    location.coordinates.lng === addedLocation.coordinates.lng
                ) {
                    continue locationsLoop;
                }
            }

            locations.push(location);
        }

        return locations;
    }

    getUniqueCountries() {
        let countries = [];

        for (let location of this.locations.list) {
            if (
                !countries.includes(location.country) &&
                location.stay === true &&
                !this.isFuture(location.date) &&
                location.country !== 'United Kingdom'
            ) {
                countries.push(location.country);
            }
        }

        return countries;
    }

    getNextMarker() {
        for (let location of this.locations.list) {
            if (!this.isFuture(location.date)) {
                continue;
            }

            var selectedLocation = location;
            break;
        }

        if (selectedLocation === undefined) {
            return;
        }

        for (let marker of this.markers) {
            if (marker.name === selectedLocation.name && marker.date === selectedLocation.date) {
                return marker;
            }
        }
    }

    getLatestMarker() {
        for (let location of this.locations.list) {
            if (!this.isFuture(location.date)) {
                var selectedLocation = location;
            }
        }

        for (let marker of this.markers) {
            if (marker.name === selectedLocation.name && marker.date === selectedLocation.date) {
                return marker;
            }
        }
    }

    toggleLabels() {
        if (map.getZoom() > 5) {
            for (let marker of this.markers) {
                var label = marker.getLabel();
                label.text = marker.labelText;
                marker.setLabel(label);
            }
        } else {
            for (let marker of this.markers) {
                var label = marker.getLabel();
                label.text = ' ';
                marker.setLabel(label);
            }
        }

        var latestMarker = this.getLatestMarker();
        var label = latestMarker.getLabel();
        label.text = latestMarker.labelText;
        latestMarker.setLabel(label);
    }

    createMarkers() {
        var previousCoords = null;
        var _this = this;

        for (let location of this.locations.list) {
            var futureLocation = this.isFuture(location.date),
                strokeColor = '#FFFFFF',
                labelColor = '#d59563'
            ;

            if (futureLocation) {
                strokeColor = '#3B8686';
                labelColor = '#3B8686';
            }

            if (previousCoords && location.hideLine !== true) {
                var lineCoords = [];
                lineCoords.push(previousCoords);
                lineCoords.push(location.coordinates);
                const flightPath = new google.maps.Polyline({
                    path: lineCoords,
                    geodesic: true,
                    strokeColor: strokeColor,
                    strokeOpacity: 0.4,
                    strokeWeight: 2,
                });
                flightPath.setMap(map);
            }

            let locationLabel = ' ';
            if (location.stay) {
                locationLabel = location.name.toUpperCase();
            }

            var marker = new google.maps.Marker({
                name: location.name,
                country: location.country,
                date: location.date,
                time: Date.now(),
                position: location.coordinates,
                map: map,
                label: {
                    text: locationLabel,
                    color: labelColor,
                    fontSize: "14px",
                    fontWeight: "bold"
                },
                delete: false,
                labelText: locationLabel
            })

            marker.setIcon({
                path: google.maps.SymbolPath.CIRCLE,
                fillOpacity: 0,
                strokeWeight: 0,
                scale: 5
            });

            google.maps.event.addListener(marker, 'click', function() {
                if (_this.infoWindow) {
                    _this.infoWindow.close()
                }
                _this.infoWindow = new google.maps.InfoWindow({
                    content: _this.renderInfoWindowContent(this),
                    position: this.position,
                    ariaLabel: this.name,
                });
                _this.infoWindow.open({
                    anchor: null,
                    map,
                });
            });

            this.markers.push(marker);
            map.fitBounds(markers.getBounds());

            previousCoords = location.coordinates;
        }

        var latestMarker = this.getLatestMarker();
        setInterval(function(){_this.animateMarker(latestMarker)}, 30);
    }

    renderInfoWindowContent(marker) {
        let latlng = marker.position.toJSON();
        let uniqueLocations = this.getUniqueLocationsForLatLng(latlng);

        let content = '<h1>' + marker.name + '</h1>';
        content += '<p><strong>Country: </strong><span class="orange">' + marker.country + '</span></p>';

        for (let location of uniqueLocations) {
            if (uniqueLocations.length > 1) {
                content += '<hr>';
            }
            content += '<p><strong>Arrival: </strong><span class="orange">' + location.date + '</span></p>';
            var nextLocation = this.getLocationAfter(location);
            if (nextLocation) {
                content += '<p><strong>Departure: </strong><span class="orange">' + nextLocation.date + '</span></p>';
                let duration = this.timeBetween(Date.parse(location.date), Date.parse(nextLocation.date));
                if (duration === '0 seconds') {
                    duration = 'same day';
                }
                content += '<p><strong>Duration: </strong><span class="orange">' + duration + '</span></p>'
            }
        }

        return content;
    }

    getLocationAfter(location) {
        let returnNext = false;
        for (let otherLocation of this.locations.list) {
            if (returnNext === true) {
                return otherLocation;
            }
            if (
                location.name === otherLocation.name &&
                location.country === otherLocation.country &&
                location.coordinates.lat === otherLocation.coordinates.lat &&
                location.coordinates.lng === otherLocation.coordinates.lng &&
                location.date === otherLocation.date
            ) {
                returnNext = true;
            }
        }
    }

    getUniqueLocationsForLatLng(latlng) {
        let validLocations = [];

        for (let location of this.locations.list) {
            if (location.coordinates.lat === latlng.lat && location.coordinates.lng === latlng.lng) {
                validLocations.push(location);
            }
        }

        return validLocations;
    }

    // Modified from a method found on StackOverflow! Thanks Masih!
    // https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
    timeBetween(fromDate, toDate) {
        var seconds = Math.floor((toDate - fromDate) / 1000);
        var interval = seconds / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + ' year' + ((Math.floor(interval) === 1) ? '' : 's');
        }

        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + ' month' + ((Math.floor(interval) === 1) ? '' : 's');
        }

        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + ' day' + ((Math.floor(interval) === 1) ? '' : 's');
        }

        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + ' hour' + ((Math.floor(interval) === 1) ? '' : 's');
        }

        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + ' minute' + ((Math.floor(interval) === 1) ? '' : 's');
        }

        return Math.floor(seconds) + ' second' + ((Math.floor(interval) === 1) ? '' : 's');
    }

    // Credit for this method goes to https://cloud.google.com/blog/products/maps-platform/how-calculate-distances-map-maps-javascript-api! Amazing work - Thanks!!
    markerDistance(mk1, mk2) {
        var R = 3958.8; // Radius of the Earth in miles
        var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
        var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
        var difflat = rlat2-rlat1; // Radian difference (latitudes)
        var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

        var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
        return d;
    }

    animateMarker(marker) {
        var timeElapsed = Date.now() - marker.time,
            percentageElapsed = timeElapsed / (this.rippleSeconds * 1000) * 100,
            rippleSize = this.rippleSize * percentageElapsed / 100;

        if (percentageElapsed < 100) {
            var icon = this.getIconProperties();
            icon.scale = rippleSize;
            icon.strokeOpacity = 1 - percentageElapsed / 100;
            marker.setIcon(icon);
            marker.setLabel({
                    text: marker.label.text,
                    color: "#ffffff",
                    fontSize: "18px",
                    fontWeight: "bold"
            });
        } else {
            marker.time = Date.now();
            var icon = this.getIconProperties();
            marker.setIcon(icon)
        }
    }

    getMarker(name)
    {
        for (let marker of this.markers)
        {
            if (marker.name === name)
            {
                return marker;
            }
        }
    }

    markerExists(name)
    {
        for (let marker of this.markers)
        {
            if (marker.name === name)
            {
                return true;
            }
        }

        return false;
    }
}


