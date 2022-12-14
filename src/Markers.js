class Markers
{
    constructor()
    {
        this.rippleSeconds = 10;
        this.rippleSize = 100;
        this.markers = [];
        this.ripples = [];
        this.locations = new Locations();
    }

    getBounds()
    {
        var bounds = new google.maps.LatLngBounds();
        for (let marker of this.markers.slice(-10))
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
        var averageSpeed = totalDistance / hoursPassed;
        document.getElementById('speed').innerText = Math.round(averageSpeed) + " mph";

        document.getElementById('longest').innerText = this.getLongestStay();

        var nextMarker = this.getNextMarker();
        if (nextMarker) {
            var timeUntil = this.timeBetween(new Date(), Date.parse(nextMarker.date))
            document.getElementById('next').innerText = timeUntil;
        }
    }

    getLongestStay() {
        var longestDuration = 0;
        var longestDurationReadable;
        var longestStayLocation;
        var previousLocation;
        for (let location of this.locations.list) {
            if (!this.isFuture(location.date)) {
                if (previousLocation) {
                    var duration = Date.parse(location.date) - Date.parse(previousLocation.date);
                    if (duration > longestDuration) {
                        longestDuration = duration;
                        longestDurationReadable = this.timeBetween(Date.parse(previousLocation.date), Date.parse(location.date));
                        longestStayLocation = previousLocation;
                    }
                }

                previousLocation = location;
            }
        }

        if (longestStayLocation) {
            return longestDurationReadable + ' in ' + longestStayLocation.name;
        }
    }

    isFuture(date) {
        return (new Date() - new Date(date) < 0);
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

    createMarkers() {
        var previousCoords = null;
        for (let location of this.locations.list) {
            var futureLocation = this.isFuture(location.date),
                strokeColor = '#FFFFFF',
                labelColor = '#d59563'
            ;

            if (futureLocation) {
                strokeColor = '#3B8686';
                labelColor = '#3B8686';
            }

            if (previousCoords) {
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
            var marker = new google.maps.Marker({
                name: location.name,
                date: location.date,
                time: Date.now(),
                position: location.coordinates,
                map: map,
                label: {
                    text: location.name.toUpperCase(),
                    color: labelColor,
                    fontSize: "14px",
                    fontWeight: "bold"
                },
                delete: false
            })

            marker.setIcon({
                path: google.maps.SymbolPath.CIRCLE,
                fillOpacity: 0,
                strokeWeight: 0,
                scale: 0
            });
            this.markers.push(marker);
            map.fitBounds(markers.getBounds());

            previousCoords = location.coordinates;
        }

        var latestMarker = this.getLatestMarker();
        var _this = this;
        setInterval(function(){_this.animateMarker(latestMarker)}, 30);
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


