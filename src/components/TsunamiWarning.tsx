import { AlertTriangle } from 'lucide-react';

export function TsunamiWarning() {
  return (
    <div className="relative group">
      <AlertTriangle className="w-5 h-5 text-red-500" />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-red-500 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Tsunami Warning
      </div>
    </div>
  );
}