# Isochrone Map

## Overview
An interactive web application for exploring isochrone polygons on a map. Users can click on the map to create isochrone visualizations powered by Geoapify. The application displays transit stops and routes using GTFS data.

## Project Structure
- `root/` - Static files directory
  - `index.html` - Main application (Leaflet-based map with isochrone functionality)
  - `assets/icons/` - Icon assets
  - `google_transit/` - GTFS transit data files (stops, routes, trips, shapes, etc.)
- `server.py` - Simple Python HTTP server for development

## Tech Stack
- Leaflet.js for mapping
- Esri Leaflet Geocoder for search
- Geoapify for isochrone generation
- Vanilla HTML/CSS/JavaScript
- Python SimpleHTTPServer for local development

## Running Locally
The application runs on port 5000 using a Python static file server:
```
python server.py
```

## Deployment
Configured for static deployment serving the `root/` directory.
