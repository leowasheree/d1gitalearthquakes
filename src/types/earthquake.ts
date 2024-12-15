export interface EarthquakeFeature {
  properties: {
    mag: number;
    place: string;
    time: number;
    tsunami: number;
    title: string;
    depth?: number;
  };
  geometry: {
    coordinates: [number, number, number];
  };
}

export interface EarthquakeData {
  metadata: {
    title: string;
    count: number;
  };
  features: EarthquakeFeature[];
}