class Locations{constructor(){this.list=[{name:"Desborough",country:"United Kingdom",stay:!0,coordinates:{lat:52.442578,lng:-.822131},date:"2022-09-14"},{name:"Birmingham",country:"United Kingdom",stay:!1,coordinates:{lat:52.452804,lng:-1.743625},date:"2022-09-14"},{name:"Dubai",country:"United Arab Emirates",stay:!1,coordinates:{lat:25.253252,lng:55.365629},date:"2022-09-14"},{name:"Bangkok",country:"Thailand",stay:!0,coordinates:{lat:13.690238,lng:100.750123},date:"2022-09-15"},{name:"Chiang Mai",country:"Thailand",stay:!0,coordinates:{lat:18.798743,lng:98.984619},date:"2022-09-22"},{name:"Pai",country:"Thailand",stay:!0,coordinates:{lat:19.361766,lng:98.431362},date:"2022-09-28"},{name:"Chiang Mai",country:"Thailand",stay:!0,coordinates:{lat:18.798743,lng:98.984619},date:"2022-10-11"},{name:"Bangkok",country:"Thailand",stay:!0,coordinates:{lat:13.917175,lng:100.604391},date:"2022-10-12"},{name:"Vientiane",country:"Laos",stay:!0,coordinates:{lat:17.986967,lng:102.567794},date:"2022-10-13"}]}}class Markers{constructor(){this.rippleSeconds=10,this.rippleSize=100,this.markers=[],this.ripples=[],this.locations=new Locations}getBounds(){var e=new google.maps.LatLngBounds;for(let t of this.markers.slice(-3))e.extend(t.position);return e}getIconProperties(){return{path:google.maps.SymbolPath.CIRCLE,fillOpacity:0,strokeColor:"#ffffff",strokeWeight:2,scale:3}}run(){this.createMarkers(),this.updateStats()}updateStats(){var e=0;for(let t=1;t<this.markers.length;t++)this.isFuture(this.markers[t].date)||(e+=this.markerDistance(this.markers[t],this.markers[t-1]));document.getElementById("distance").innerText=Math.round(e)+" miles";var t=new Date(this.locations.list[0].date);document.getElementById("time").innerText=this.timeSince(t);var a=e/(Math.floor((new Date-t)/1e3)/3600);document.getElementById("speed").innerText=Math.round(a)+" mph"}isFuture(e){return new Date-new Date(e)<0}getLatestMarker(){for(let t of this.locations.list)if(!this.isFuture(t.date))var e=t;for(let t of this.markers)if(t.name===e.name&&t.date===e.date)return t}createMarkers(){var e=null;for(let o of this.locations.list){var t="#FFFFFF",a="#d59563";if(this.isFuture(o.date)&&(t="#3B8686",a="#3B8686"),e){var r=[];r.push(e),r.push(o.coordinates),new google.maps.Polyline({path:r,geodesic:!0,strokeColor:t,strokeOpacity:.4,strokeWeight:2}).setMap(map)}var s=new google.maps.Marker({name:o.name,date:o.date,time:Date.now(),position:o.coordinates,map:map,label:{text:o.name.toUpperCase(),color:a,fontSize:"14px",fontWeight:"bold"},delete:!1});s.setIcon({path:google.maps.SymbolPath.CIRCLE,fillOpacity:0,strokeWeight:0,scale:0}),this.markers.push(s),map.fitBounds(markers.getBounds()),e=o.coordinates}var o=this.getLatestMarker(),i=this;setInterval((function(){i.animateMarker(o)}),30)}timeSince(e){var t=Math.floor((new Date-e)/1e3),a=t/31536e3;return a>1?Math.floor(a)+" years":(a=t/2592e3)>1?Math.floor(a)+" months":(a=t/86400)>1?Math.floor(a)+" days":(a=t/3600)>1?Math.floor(a)+" hours":(a=t/60)>1?Math.floor(a)+" minutes":Math.floor(t)+" seconds"}markerDistance(e,t){var a=e.position.lat()*(Math.PI/180),r=t.position.lat()*(Math.PI/180),s=r-a,o=(t.position.lng()-e.position.lng())*(Math.PI/180);return 7917.6*Math.asin(Math.sqrt(Math.sin(s/2)*Math.sin(s/2)+Math.cos(a)*Math.cos(r)*Math.sin(o/2)*Math.sin(o/2)))}animateMarker(e){var t=(Date.now()-e.time)/(1e3*this.rippleSeconds)*100,a=this.rippleSize*t/100;if(t<100){(r=this.getIconProperties()).scale=a,r.strokeOpacity=1-t/100,e.setIcon(r),e.setLabel({text:e.label.text,color:"#ffffff",fontSize:"18px",fontWeight:"bold"})}else{e.time=Date.now();var r=this.getIconProperties();e.setIcon(r)}}getMarker(e){for(let t of this.markers)if(t.name===e)return t}markerExists(e){for(let t of this.markers)if(t.name===e)return!0;return!1}}var map,markers=new Markers;function initMap(){map=new google.maps.Map(document.getElementById("map"),{center:{lat:20,lng:-120},zoom:3,styles:[{elementType:"geometry",stylers:[{color:"#0B486B"}]},{elementType:"labels.text.stroke",stylers:[{color:"#3B8686"}]},{elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}]}),markers.run()}