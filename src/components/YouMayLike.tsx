import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TrendingCoin {
  item: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
    data: {
      price: string;
      sparkline: string;
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}

export const YouMayLike = () => {
  const [trending, setTrending] = useState<TrendingCoin[]>([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );
        setTrending(response.data.coins);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrending();
  }, []);

  const renderCarousel = (title: string) => (
    <div className="mb-4 sm:mb-8 bg-white p-4 rounded-lg">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-left">{title}</h2>
      <Carousel className="relative w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {trending.map((coin) => (
            <CarouselItem key={coin.item.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/4">
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={coin.item.thumb}
                    alt={coin.item.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium">
                    {coin.item.symbol.toUpperCase()}
                  </span>
                  <span
                    className={`text-sm px-2 py-0.5 rounded ${
                      coin.item.data.price_change_percentage_24h?.usd > 0
                        ? 'text-green-500 bg-green-50'
                        : 'text-red-500 bg-red-50'
                    }`}
                  >
                    {coin.item.data.price_change_percentage_24h?.usd?.toFixed(2)}%
                  </span>
                </div>
                <div className="text-lg font-bold">{coin.item.data.price}</div>
                <img
                  src={coin.item.data.sparkline}
                  alt="Price graph"
                  className="w-full h-16 mt-2"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );

  return (
    <div className="mt-4 sm:mt-8">
      {renderCarousel("You May Also Like")}
      {renderCarousel("Trending Coins")}
    </div>
  );
};