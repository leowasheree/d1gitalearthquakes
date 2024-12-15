import { EarthquakeFeature } from '../types/earthquake';
import { TsunamiWarning } from './TsunamiWarning';
import { formatDate, formatDepth } from '../utils/format';

interface EarthquakeItemProps {
  earthquake: EarthquakeFeature;
  onClick: () => void;
  isSelected: boolean;
}

export function EarthquakeItem({ earthquake, onClick, isSelected }: EarthquakeItemProps) {
  const date = new Date(earthquake.properties.time);
  const depth = earthquake.geometry.coordinates[2];

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 border transition-colors ${
        isSelected 
          ? 'border-white bg-gray-900' 
          : 'border-gray-800 hover:border-gray-700 hover:bg-gray-900'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg font-mono font-bold">
            M{earthquake.properties.mag.toFixed(1)}
          </span>
          {earthquake.properties.tsunami > 0 && <TsunamiWarning />}
        </div>
        <time className="text-sm text-gray-400">
          {formatDate(date)}
        </time>
      </div>
      <p className="mt-1 font-medium">{earthquake.properties.place}</p>
      <p className="text-sm text-gray-400">Depth: {formatDepth(depth)}</p>
    </button>
  );
}