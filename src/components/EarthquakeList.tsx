import { EarthquakeFeature } from '../types/earthquake';
import { EarthquakeItem } from './EarthquakeItem';

interface EarthquakeListProps {
  earthquakes: EarthquakeFeature[];
  onEarthquakeSelect: (earthquake: EarthquakeFeature) => void;
  selectedEarthquake: EarthquakeFeature | null;
}

export function EarthquakeList({ earthquakes, onEarthquakeSelect, selectedEarthquake }: EarthquakeListProps) {
  return (
    <div className="space-y-4">
      {earthquakes.map((earthquake, index) => (
        <EarthquakeItem 
          key={index} 
          earthquake={earthquake}
          onClick={() => onEarthquakeSelect(earthquake)}
          isSelected={selectedEarthquake?.properties.time === earthquake.properties.time}
        />
      ))}
    </div>
  );
}