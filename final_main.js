import L from 'leaflet';

// Initialize Leaflet map
const map = L.map('map').setView([0, 0], 2);

// Add weather layer from OpenWeatherMap
const weatherLayer = L.tileLayer('https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=1181ae4aa7435406ae188f78a04f9135', {
    attribution: 'OpenWeatherMap'
}).addTo(map);

// Optionally, add a layer control
const baseLayers = {
    'Weather Layer': weatherLayer
};
L.control.layers(baseLayers).addTo(map);