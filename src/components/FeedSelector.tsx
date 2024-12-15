import { FeedType } from '../constants/feeds';

interface FeedSelectorProps {
  activeFeed: FeedType;
  onFeedChange: (feed: FeedType) => void;
}

export function FeedSelector({ activeFeed, onFeedChange }: FeedSelectorProps) {
  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={() => onFeedChange('week')}
        className={`px-4 py-2 border ${
          activeFeed === 'week'
            ? 'border-white bg-white text-black'
            : 'border-gray-800 hover:border-gray-700'
        }`}
      >
        Past Week (M2.5+)
      </button>
      <button
        onClick={() => onFeedChange('significant')}
        className={`px-4 py-2 border ${
          activeFeed === 'significant'
            ? 'border-white bg-white text-black'
            : 'border-gray-800 hover:border-gray-700'
        }`}
      >
        Significant (30 Days)
      </button>
      <button
        onClick={() => onFeedChange('strong')}
        className={`px-4 py-2 border ${
          activeFeed === 'strong'
            ? 'border-white bg-white text-black'
            : 'border-gray-800 hover:border-gray-700'
        }`}
      >
        Strong (M4.5+)
      </button>
    </div>
  );
}