import { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowUpRight } from 'lucide-react';

interface TrendingCoin {
  item: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
    data: {
      price: string;
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}

export const TrendingCoins = () => {
  const [trending, setTrending] = useState<TrendingCoin[]>([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );
        setTrending(response.data.coins.slice(0, 3));
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 mt-4">
      <h2 className="text-xl font-bold mb-4 text-left">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {trending.map((coin) => (
          <div
            key={coin.item.id}
            className="flex items-center justify-between p-2"
          >
            <div className="flex items-center gap-2">
              <img
                src={coin.item.thumb}
                alt={coin.item.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="font-medium">
                {coin.item.name} ({coin.item.symbol.toUpperCase()})
              </span>
            </div>
            <div className={`flex items-center gap-1 text-sm px-2 py-1 rounded ${
              coin.item.data.price_change_percentage_24h?.usd > 0
                ? 'text-green-500 bg-green-50'
                : 'text-red-500 bg-red-50'
            }`}>
              <ArrowUpRight className="h-4 w-4" />
              {coin.item.data.price_change_percentage_24h?.usd?.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};