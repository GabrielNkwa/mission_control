"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker, Polyline } from "@react-google-maps/api";
import type { Waypoint } from "./types/mission";

interface MissionMapProps {
  waypoints: Waypoint[];
  onWaypointClick?: (waypoint: Waypoint) => void;
  onMapClick?: (lat: number, lng: number) => void;
}

const MissionMap: React.FC<MissionMapProps> = ({ waypoints, onWaypointClick, onMapClick }) => {
  // Center the map based on the waypoints or use a default location
  const center: { lat: number; lng: number } = waypoints.length > 0 ? { lat: waypoints[0].lat, lng: waypoints[0].lng } : { lat: 51.505, lng: -0.09 };

  // Prepare positions for polyline
  const positions: { lat: number; lng: number }[] = waypoints.map((wp) => ({ lat: wp.lat, lng: wp.lng }));

  return (
    <LoadScript googleMapsApiKey="AIzaSyD1YqDzjQqvthcM52QexkXrkC0i7zx3pRU">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "600px" }}
        center={center}
        zoom={13}
        onClick={(event) => {
          const lat = event.latLng?.lat();
          const lng = event.latLng?.lng();
          if (lat !== undefined && lng !== undefined) {
            onMapClick?.(lat, lng);
          }
        }}
      >
        {waypoints.map((waypoint) => (
          <Marker
            key={waypoint.id}
            position={{ lat: waypoint.lat, lng: waypoint.lng }}
            onClick={() => onWaypointClick?.(waypoint)}
          />
        ))}
        {waypoints.length > 1 && <Polyline path={positions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MissionMap;