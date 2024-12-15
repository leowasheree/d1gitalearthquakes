interface EarthquakeMetadataProps {
  title: string;
  count: number;
}

export function EarthquakeMetadata({ title, count }: EarthquakeMetadataProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400">
        Showing {count} earthquakes
      </p>
    </div>
  );
}