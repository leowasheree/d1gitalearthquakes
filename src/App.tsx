import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FeedSelector } from './components/FeedSelector';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { EarthquakeList } from './components/EarthquakeList';
import { EarthquakeMetadata } from './components/EarthquakeMetadata';
import { Map } from './components/Map';
import { useEarthquakeData } from './hooks/useEarthquakeData';
import { FeedType } from './constants/feeds';
import { EarthquakeFeature } from './types/earthquake';

function App() {
  const [activeFeed, setActiveFeed] = useState<FeedType>('week');
  const [selectedEarthquake, setSelectedEarthquake] = useState<EarthquakeFeature | null>(null);
  const { data, loading, error } = useEarthquakeData(activeFeed);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <FeedSelector 
          activeFeed={activeFeed} 
          onFeedChange={setActiveFeed} 
        />

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        
        {data && !loading && !error && (
          <>
            <EarthquakeMetadata 
              title={data.metadata.title}
              count={data.metadata.count}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <EarthquakeList 
                  earthquakes={data.features}
                  onEarthquakeSelect={setSelectedEarthquake}
                  selectedEarthquake={selectedEarthquake}
                />
              </div>
              <div className="lg:sticky lg:top-8">
                <Map earthquake={selectedEarthquake} />
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;