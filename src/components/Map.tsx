import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Map as LeafletMap } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { setupLeafletIcons } from '../utils/leaflet';
import { EarthquakeFeature } from '../types/earthquake';
import { formatDepth } from '../utils/format';
import { useMapReset } from '../hooks/useMapReset';

setupLeafletIcons();

interface MapProps {
  earthquake: EarthquakeFeature | null;
}

export function Map({ earthquake }: MapProps) {
  const mapRef = useRef<LeafletMap | null>(null);
  useMapReset(mapRef, earthquake);

  if (!earthquake) return null;

  const [longitude, latitude] = earthquake.geometry.coordinates;

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden border border-gray-800">
      <MapContainer
        ref={mapRef}
        center={[latitude, longitude]}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            <div className="text-black">
              <p className="font-bold">{earthquake.properties.place}</p>
              <p>Magnitude: {earthquake.properties.mag}</p>
              <p>Depth: {formatDepth(earthquake.geometry.coordinates[2])}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}