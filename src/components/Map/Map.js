import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import "./Map.css";

export const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    console.log("Initializing Mapbox GL map...");

    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

    if (!mapboxgl.accessToken) {
      console.error("Mapbox Access Token is not set!");
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-111.7875426, 33.3884383], // Your coordinates
      zoom: 12
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("load", () => {
      console.log("Map has loaded successfully.");
    });

    new mapboxgl.Marker().setLngLat([-111.7875426, 33.3884383]).addTo(map); // Your coordinates

    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef}></div>;
};
