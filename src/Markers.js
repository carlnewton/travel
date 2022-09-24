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
        var bounds = new google.maps.LatLngBounds()
        for (let marker of this.markers)
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
            totalDistance += this.markerDistance(this.markers[i], this.markers[i-1]);
        }

        document.getElementById('distance').innerText = Math.round(totalDistance) + " mi";

        var firstDate = new Date(this.locations.list[0].date);
        document.getElementById('time').innerText = this.timeSince(firstDate);

        var hoursPassed = Math.floor((new Date() - firstDate) / 1000) / 3600;
        var averageSpeed = totalDistance / hoursPassed;
        document.getElementById('speed').innerText = Math.round(averageSpeed) + " mph";
    }

    createMarkers() {
        var previousCoords = null;
        for (let location of this.locations.list) {
            if (previousCoords) {
                var lineCoords = [];
                lineCoords.push(previousCoords);
                lineCoords.push(location.coordinates);
                const flightPath = new google.maps.Polyline({
                    path: lineCoords,
                    geodesic: true,
                    strokeColor: "#FFFFFF",
                    strokeOpacity: 0.4,
                    strokeWeight: 2,
                });
                flightPath.setMap(map);
            }
            var marker = new google.maps.Marker({
                name: location.name,
                time: Date.now(),
                position: location.coordinates,
                map: map,
                label: {
                    text: location.name.toUpperCase(),
                    color: "#d59563",
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

        var lastLocation = this.locations.list[this.locations.list.length - 1];
        var lastMarker = this.getMarker(lastLocation.name);
        var _this = this;
        setInterval(function(){_this.animateMarker(lastMarker)}, 30);
    }

    // Found this method on StackOverflow! Thanks Masih!
    // https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
    timeSince(date) {
        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = seconds / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + " years";
        }

        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }

        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }

        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }

        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }

        return Math.floor(seconds) + " seconds";
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


