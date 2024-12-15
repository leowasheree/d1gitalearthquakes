import { useState, useEffect } from 'react';
import { EarthquakeData } from '../types/earthquake';
import { FEEDS, FeedType } from '../constants/feeds';

export function useEarthquakeData(activeFeed: FeedType) {
  const [data, setData] = useState<EarthquakeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(FEEDS[activeFeed]);
        if (!response.ok) throw new Error('Failed to fetch data');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, [activeFeed]);

  return { data, loading, error };
}