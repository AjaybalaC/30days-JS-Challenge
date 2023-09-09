// Create a map centered on a specific location and set the initial zoom level
const map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (base map) to your map using a tile provider (e.g., OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Add markers to the map
const marker = L.marker([51.5, -0.09]).addTo(map);
marker.bindPopup('This is a marker.');

// Add a polygon to the map
const polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);
polygon.bindPopup('This is a polygon.');

// Add interactivity to the map (e.g., click events)
map.on('click', function(e) {
    alert(`You clicked the map at: ${e.latlng}`);
});
