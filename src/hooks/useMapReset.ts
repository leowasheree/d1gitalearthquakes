import { useEffect, RefObject } from 'react';
import { Map as LeafletMap } from 'leaflet';
import { EarthquakeFeature } from '../types/earthquake';

export function useMapReset(
  mapRef: RefObject<LeafletMap | null>,
  earthquake: EarthquakeFeature | null
) {
  useEffect(() => {
    if (earthquake && mapRef.current) {
      const [longitude, latitude] = earthquake.geometry.coordinates;
      mapRef.current.setView([latitude, longitude], 5, {
        animate: true,
        duration: 1,
      });
    }
  }, [earthquake]);
}