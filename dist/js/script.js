class Locations{constructor(){this.list=[{name:"Desborough",country:"United Kingdom",stay:!0,coordinates:{lat:52.442578,lng:-.822131},date:"2022-09-14"},{name:"Birmingham",country:"United Kingdom",stay:!1,coordinates:{lat:52.452804,lng:-1.743625},date:"2022-09-14"},{name:"Dubai",country:"United Arab Emirates",stay:!1,coordinates:{lat:25.253252,lng:55.365629},date:"2022-09-14"},{name:"Bangkok",country:"Thailand",stay:!0,coordinates:{lat:13.690238,lng:100.750123},date:"2022-09-15"},{name:"Chiang Mai",country:"Thailand",stay:!0,coordinates:{lat:18.798743,lng:98.984619},date:"2022-09-22"},{name:"Pai",country:"Thailand",stay:!0,coordinates:{lat:19.361766,lng:98.431362},date:"2022-09-28"},{name:"Chiang Mai",country:"Thailand",stay:!0,hideLine:!0,coordinates:{lat:18.798743,lng:98.984619},date:"2022-10-11"},{name:"Bangkok",country:"Thailand",stay:!0,hideLine:!0,coordinates:{lat:13.690238,lng:100.750123},date:"2022-10-12"},{name:"Vientiane",country:"Laos",stay:!0,coordinates:{lat:17.986967,lng:102.567794},date:"2022-10-13"},{name:"Vang Vieng",country:"Laos",stay:!0,coordinates:{lat:18.947304,lng:102.447513},date:"2022-10-20"},{name:"Luang Prabang",country:"Laos",stay:!0,coordinates:{lat:19.884847,lng:102.137962},date:"2022-10-27"},{name:"Hanoi",country:"Vietnam",stay:!0,coordinates:{lat:21.027463,lng:105.700739},date:"2022-11-09"},{name:"Sa Pa",country:"Vietnam",stay:!0,coordinates:{lat:22.357358,lng:103.821707},date:"2022-11-13"},{name:"Ha Long",country:"Vietnam",stay:!0,coordinates:{lat:20.971314,lng:107.044734},date:"2022-11-18"},{name:"Hanoi",country:"Vietnam",stay:!0,coordinates:{lat:21.027463,lng:105.700739},date:"2022-11-22"},{name:"Phú Quốc",country:"Vietnam",stay:!0,coordinates:{lat:10.299451,lng:103.984889},date:"2022-11-23"},{name:"Ho Chi Minh City",country:"Vietnam",stay:!0,coordinates:{lat:10.833258,lng:106.630088},date:"2022-12-03"},{name:"Phnom Penh",country:"Cambodia",stay:!0,coordinates:{lat:11.582391,lng:104.858257},date:"2022-12-07"},{name:"Siem Reap",country:"Cambodia",stay:!0,coordinates:{lat:13.366145,lng:103.8371},date:"2022-12-10"},{name:"Kuala Lumpur",country:"Malaysia",stay:!0,coordinates:{lat:3.149072,lng:101.689837},date:"2022-12-17"},{name:"Phuket",country:"Thailand",stay:!0,coordinates:{lat:7.882328,lng:98.392311},date:"2022-12-27"},{name:"Ko Yao Noi",country:"Thailand",stay:!0,coordinates:{lat:8.122405,lng:98.606299},date:"2023-01-02"},{name:"Ao Nang",country:"Thailand",stay:!0,coordinates:{lat:8.030061,lng:98.823828},date:"2023-01-07"},{name:"Koh Samui",country:"Thailand",stay:!0,coordinates:{lat:9.513446,lng:100.016862},date:"2023-01-13"},{name:"Bangkok",country:"Thailand",stay:!0,coordinates:{lat:13.690238,lng:100.750123},date:"2023-01-27"},{name:"Osaka",country:"Japan",stay:!0,coordinates:{lat:34.691976,lng:135.503544},date:"2023-01-29"},{name:"Kyoto",country:"Japan",stay:!0,coordinates:{lat:35.00151,lng:135.749081},date:"2023-02-05"},{name:"Tokyo",country:"Japan",stay:!0,coordinates:{lat:35.691044,lng:139.769722},date:"2023-02-12"},{name:"Sydney",country:"Australia",stay:!0,coordinates:{lat:-33.868797,lng:151.208218},date:"2023-02-24"},{name:"Katoomba",country:"Australia",stay:!0,coordinates:{lat:-33.712851,lng:150.310566},date:"2023-03-01"},{name:"Sydney",country:"Australia",stay:!0,coordinates:{lat:-33.868797,lng:151.208218},date:"2023-03-04"},{name:"Melbourne",country:"Australia",stay:!0,coordinates:{lat:-37.809668,lng:144.965217},date:"2023-03-05"},{name:"Geelong",country:"Australia",stay:!1,coordinates:{lat:-38.147683,lng:144.352822},date:"2023-03-09"},{name:"Davenport",country:"Australia",stay:!0,coordinates:{lat:-41.179704,lng:146.347846},date:"2023-03-09"},{name:"Somerset",country:"Australia",stay:!0,coordinates:{lat:-41.041021,lng:145.831793},date:"2023-03-10"},{name:"Queenstown",country:"Australia",stay:!0,coordinates:{lat:-42.081105,lng:145.551825},date:"2023-03-12"},{name:"Hobart",country:"Australia",stay:!0,coordinates:{lat:-42.880467,lng:147.328882},date:"2023-03-14"},{name:"Launceston",country:"Australia",stay:!0,coordinates:{lat:-41.433188,lng:147.142942},date:"2023-03-17"},{name:"Davenport",country:"Australia",stay:!1,coordinates:{lat:-41.179704,lng:146.347846},date:"2023-03-21"},{name:"Geelong",country:"Australia",stay:!1,coordinates:{lat:-38.147683,lng:144.352822},date:"2023-03-21"},{name:"Melbourne",country:"Australia",stay:!0,coordinates:{lat:-37.809668,lng:144.965217},date:"2023-03-21"},{name:"Apollo Bay",country:"Australia",stay:!0,coordinates:{lat:-38.755503,lng:143.668192},date:"2023-03-24"},{name:"Warrnambool",country:"Australia",stay:!0,coordinates:{lat:-38.37259,lng:142.478659},date:"2023-03-25"},{name:"Stawell",country:"Australia",stay:!0,coordinates:{lat:-37.055942,lng:142.773454},date:"2023-03-26"},{name:"Melbourne",country:"Australia",stay:!1,coordinates:{lat:-37.809668,lng:144.965217},date:"2023-03-28"},{name:"Adelaide",country:"Australia",stay:!0,coordinates:{lat:-34.927051,lng:138.602233},date:"2023-03-28"}]}}class Markers{constructor(){this.infoWindow=null,this.rippleSeconds=10,this.rippleSize=100,this.markers=[],this.ripples=[],this.locations=new Locations}getBounds(){var t=new google.maps.LatLngBounds;let e=[];for(let t of this.markers)this.isFuture(t.date)||e.push(t);for(let a of e.slice(-2))t.extend(a.position);return t}getIconProperties(){return{path:google.maps.SymbolPath.CIRCLE,fillOpacity:0,strokeColor:"#ffffff",strokeWeight:2,scale:3}}run(){this.createMarkers(),this.updateStats()}updateStats(){var t=0;for(let e=1;e<this.markers.length;e++)this.isFuture(this.markers[e].date)||(t+=this.markerDistance(this.markers[e],this.markers[e-1]));document.getElementById("distance").innerText=Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" miles";var e=new Date(this.locations.list[0].date);document.getElementById("time").innerText=this.timeBetween(e,new Date);Math.floor((new Date-e)/1e3);document.getElementById("stayed").innerText=this.getStayedCount(),document.getElementById("countries").innerText=this.getUniqueCountries().length;var a=this.getNextMarker();if(a){var n=this.timeBetween(new Date,Date.parse(a.date));document.getElementById("next").innerText=n}}isFuture(t){return new Date-new Date(t)<0}getStayedCount(){let t=0;for(let e of this.getUniqueLocations())this.isFuture(e.date)||!1!==e.stay&&t++;return t-1}getUniqueLocations(){let t=[];t:for(let e of this.locations.list){for(let a of t)if(e.coordinates.lat===a.coordinates.lat&&e.coordinates.lng===a.coordinates.lng)continue t;t.push(e)}return t}getUniqueCountries(){let t=[];for(let e of this.locations.list)t.includes(e.country)||!0!==e.stay||this.isFuture(e.date)||"United Kingdom"===e.country||t.push(e.country);return t}getNextMarker(){for(let e of this.locations.list)if(this.isFuture(e.date)){var t=e;break}if(void 0!==t)for(let e of this.markers)if(e.name===t.name&&e.date===t.date)return e}getLatestMarker(){for(let e of this.locations.list)if(!this.isFuture(e.date))var t=e;for(let e of this.markers)if(e.name===t.name&&e.date===t.date)return e}createMarkers(){var t=null,e=this;for(let s of this.locations.list){var a="#FFFFFF",n="#d59563";if(this.isFuture(s.date)&&(a="#3B8686",n="#3B8686"),t&&!0!==s.hideLine){var o=[];o.push(t),o.push(s.coordinates),new google.maps.Polyline({path:o,geodesic:!0,strokeColor:a,strokeOpacity:.4,strokeWeight:2}).setMap(map)}let i=" ";s.stay&&(i=s.name.toUpperCase());var r=new google.maps.Marker({name:s.name,country:s.country,date:s.date,time:Date.now(),position:s.coordinates,map:map,label:{text:i,color:n,fontSize:"14px",fontWeight:"bold"},delete:!1});r.setIcon({path:google.maps.SymbolPath.CIRCLE,fillOpacity:0,strokeWeight:0,scale:5}),google.maps.event.addListener(r,"click",(function(){e.infoWindow&&e.infoWindow.close(),e.infoWindow=new google.maps.InfoWindow({content:e.renderInfoWindowContent(this),position:this.position,ariaLabel:this.name}),e.infoWindow.open({anchor:null,map:map})})),this.markers.push(r),map.fitBounds(markers.getBounds()),t=s.coordinates}var s=this.getLatestMarker();setInterval((function(){e.animateMarker(s)}),30)}renderInfoWindowContent(t){let e=t.position.toJSON(),a=this.getUniqueLocationsForLatLng(e),n="<h1>"+t.name+"</h1>";n+='<p><strong>Country: </strong><span class="orange">'+t.country+"</span></p>";for(let t of a){a.length>1&&(n+="<hr>"),n+='<p><strong>Arrival: </strong><span class="orange">'+t.date+"</span></p>";var o=this.getLocationAfter(t);if(o){n+='<p><strong>Departure: </strong><span class="orange">'+o.date+"</span></p>";let e=this.timeBetween(Date.parse(t.date),Date.parse(o.date));"0 seconds"===e&&(e="same day"),n+='<p><strong>Duration: </strong><span class="orange">'+e+"</span></p>"}}return n}getLocationAfter(t){let e=!1;for(let a of this.locations.list){if(!0===e)return a;t.name===a.name&&t.country===a.country&&t.coordinates.lat===a.coordinates.lat&&t.coordinates.lng===a.coordinates.lng&&t.date===a.date&&(e=!0)}}getUniqueLocationsForLatLng(t){let e=[];for(let a of this.locations.list)a.coordinates.lat===t.lat&&a.coordinates.lng===t.lng&&e.push(a);return e}timeBetween(t,e){var a=Math.floor((e-t)/1e3),n=a/31536e3;return n>1?Math.floor(n)+" year"+(1===Math.floor(n)?"":"s"):(n=a/2592e3)>1?Math.floor(n)+" month"+(1===Math.floor(n)?"":"s"):(n=a/86400)>1?Math.floor(n)+" day"+(1===Math.floor(n)?"":"s"):(n=a/3600)>1?Math.floor(n)+" hour"+(1===Math.floor(n)?"":"s"):(n=a/60)>1?Math.floor(n)+" minute"+(1===Math.floor(n)?"":"s"):Math.floor(a)+" second"+(1===Math.floor(n)?"":"s")}markerDistance(t,e){var a=t.position.lat()*(Math.PI/180),n=e.position.lat()*(Math.PI/180),o=n-a,r=(e.position.lng()-t.position.lng())*(Math.PI/180);return 7917.6*Math.asin(Math.sqrt(Math.sin(o/2)*Math.sin(o/2)+Math.cos(a)*Math.cos(n)*Math.sin(r/2)*Math.sin(r/2)))}animateMarker(t){var e=(Date.now()-t.time)/(1e3*this.rippleSeconds)*100,a=this.rippleSize*e/100;if(e<100){(n=this.getIconProperties()).scale=a,n.strokeOpacity=1-e/100,t.setIcon(n),t.setLabel({text:t.label.text,color:"#ffffff",fontSize:"18px",fontWeight:"bold"})}else{t.time=Date.now();var n=this.getIconProperties();t.setIcon(n)}}getMarker(t){for(let e of this.markers)if(e.name===t)return e}markerExists(t){for(let e of this.markers)if(e.name===t)return!0;return!1}}var map,markers=new Markers;function initMap(){map=new google.maps.Map(document.getElementById("map"),{center:{lat:20,lng:-120},zoom:3,styles:[{elementType:"geometry",stylers:[{color:"#0B486B"}]},{elementType:"labels.text.stroke",stylers:[{color:"#3B8686"}]},{elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}]}),markers.run()}