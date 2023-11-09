import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MARKER from "leaflet/dist/images/marker-icon-2x.png";

interface MapComponentProps {
  latitude: number;
  longitude: number;
  id: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  latitude,
  longitude,
  id,
}) => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map only if it doesn't exist
      const map = L.map(id).setView([latitude, longitude], 13);

      // Add a tile layer (replace 'your.map.tile.url' with an actual tile layer URL)
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "opestram",
      }).addTo(map);

      const customIcon = new L.Icon({
        iconUrl: MARKER, // Replace with the path to your custom marker icon
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      // Add a marker at the specified location
      L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

      mapRef.current = map;
    } else {
      // Update the map view if props change
      mapRef.current.setView([latitude, longitude], 13);
    }

    return () => {
      // Clean up the map instance when the component is unmounted
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [latitude, longitude, id]);

  return <div id={`${id}`} style={{ height: "200px", borderRadius: 20 }}></div>;
};

export default MapComponent;
