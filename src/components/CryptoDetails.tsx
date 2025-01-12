import { Toaster } from "@/components/ui/toaster";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { TrendingCoins } from './TrendingCoins';
import { YouMayLike } from './YouMayLike';
import { formatCurrency } from '../utils/formatters';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import SentimentSection from './SentimentSection';
import AboutSection from './AboutSection';
import BitcoinCalculator from './BitcoinCalculator';
import { ArrowRight, Menu } from 'lucide-react';
import TokenomicsSection from './TokenomicsSection';
import TeamSection from './TeamSection';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface CryptoDetailsProps {
  coinId?: string;
}

interface CoinData {
  [key: string]: {
    inr: number;
    inr_24h_change: number;
    usd: number;
    usd_24h_change: number;
  };
}

interface CoinInfo {
  symbol: string;
  name: string;
  image: {
    large: string;
  };
  market_cap_rank: number;
}

const CryptoDetails: React.FC<CryptoDetailsProps> = ({ coinId: propsCoinId }) => {
  const { coinId: paramsCoinId } = useParams();
  const finalCoinId = propsCoinId || paramsCoinId || 'bitcoin';
  const [coinData, setCoinData] = useState<CoinData | null>(null);
  const [coinInfo, setCoinInfo] = useState<CoinInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [priceResponse, infoResponse] = await Promise.all([
          axios.get(
            `https://api.coingecko.com/api/v3/simple/price?ids=${finalCoinId}&vs_currencies=inr,usd&include_24h_change=true`
          ),
          axios.get(`https://api.coingecko.com/api/v3/coins/${finalCoinId}`)
        ]);
        
        setCoinData(priceResponse.data);
        setCoinInfo({
          symbol: infoResponse.data.symbol,
          name: infoResponse.data.name,
          image: infoResponse.data.image,
          market_cap_rank: infoResponse.data.market_cap_rank
        });
      } catch (error) {
        console.error('Error fetching coin data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [finalCoinId]);

  const NavItems = () => (
    <>
      <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-base">
        Crypto Taxes
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-base">
        Free Tools
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-base">
        Resource Center
      </a>
    </>
  );

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const priceData = coinData?.[finalCoinId];

  return (
    <div className="min-h-screen bg-[#EFF2F5]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/4a6fac52-e730-4b56-9069-1fc73d60e450.png" 
                  alt="KoinX" 
                  className="h-5 sm:h-6"
                />
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <NavItems />
              <Button className="bg-[#0052FE] text-white hover:bg-blue-700 ml-4 rounded-lg px-6">
                Get Started
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-700">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-6 mt-8">
                    <NavItems />
                    <Button className="bg-[#0052FE] text-white hover:bg-blue-700 w-full rounded-lg">
                      Get Started
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 overflow-x-auto">
            <span>Cryptocurrencies</span>
            <span>{'>'}</span>
            <span className="text-black">{coinInfo?.name}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="lg:col-span-2 order-1 lg:order-1">
              <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 sm:mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={coinInfo?.image.large}
                    alt={coinInfo?.name}
                    className="w-8 h-8 sm:w-9 sm:h-9"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h1 className="text-xl sm:text-2xl font-semibold">{coinInfo?.name}</h1>
                      <span className="text-gray-500">{coinInfo?.symbol.toUpperCase()}</span>
                      <span className="bg-gray-100 text-sm px-3 py-1 rounded-lg">
                        Rank #{coinInfo?.market_cap_rank}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 sm:gap-8 mb-8">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl sm:text-3xl font-bold">
                        ${formatCurrency(priceData?.usd || 0)}
                      </h2>
                      <span
                        className={`text-sm px-2 py-1 rounded ${
                          (priceData?.usd_24h_change || 0) > 0
                            ? 'text-green-500 bg-green-50'
                            : 'text-red-500 bg-red-50'
                        }`}
                      >
                        {priceData?.usd_24h_change?.toFixed(2)}%
                      </span>
                    </div>
                    <p className="text-gray-500">
                      ₹{formatCurrency(priceData?.inr || 0)}
                    </p>
                  </div>
                </div>

                {/* Chart Section */}
                <div className="border-b mb-4">
                  <Tabs defaultValue="1D" className="w-full">
                    <TabsList className="flex gap-2 sm:gap-4 overflow-x-auto">
                      {['1H', '24H', '7D', '1M', '3M', '6M', '1Y', 'ALL'].map(
                        (period) => (
                          <TabsTrigger
                            key={period}
                            value={period}
                            className="text-sm text-gray-500 hover:text-gray-900 whitespace-nowrap"
                          >
                            {period}
                          </TabsTrigger>
                        )
                      )}
                    </TabsList>
                  </Tabs>
                </div>

                <div className="w-full h-[300px] sm:h-[400px] bg-white rounded-lg overflow-hidden">
                  <iframe
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                    src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_76d87&symbol=${coinInfo?.symbol.toUpperCase()}USD&interval=D&hidesidetoolbar=1&hidetoptoolbar=1&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=[]&hideideas=1&theme=light&style=1&timezone=Etc%2FUTC&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en&utm_source=coinmarketcap.com&utm_medium=widget&utm_campaign=chart&utm_term=${coinInfo?.symbol.toUpperCase()}USD`}
                  />
                </div>

                <div className="flex gap-2 sm:gap-4 mt-6 border-b pb-4 overflow-x-auto">
                  <Button variant="ghost" className="text-blue-600 border-b-2 border-blue-600 whitespace-nowrap text-sm sm:text-base">
                    Overview
                  </Button>
                  <Button variant="ghost" className="text-gray-500 whitespace-nowrap text-sm sm:text-base">
                    Fundamentals
                  </Button>
                  <Button variant="ghost" className="text-gray-500 whitespace-nowrap text-sm sm:text-base">
                    News Insights
                  </Button>
                  <Button variant="ghost" className="text-gray-500 whitespace-nowrap text-sm sm:text-base">
                    Sentiments
                  </Button>
                  <Button variant="ghost" className="text-gray-500 whitespace-nowrap text-sm sm:text-base">
                    Team
                  </Button>
                  <Button variant="ghost" className="text-gray-500 whitespace-nowrap text-sm sm:text-base">
                    Technicals
                  </Button>
                  <Button variant="ghost" className="text-gray-500 whitespace-nowrap text-sm sm:text-base">
                    Tokenomics
                  </Button>
                </div>

                {/* Performance Section */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-4">Performance</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <div className="text-gray-500">Today's Low</div>
                        <div className="font-medium">$46,930.22</div>
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded"></div>
                      </div>
                      <div className="text-sm text-right">
                        <div className="text-gray-500">Today's High</div>
                        <div className="font-medium">$49,343.83</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <div className="text-gray-500">52W Low</div>
                        <div className="font-medium">$16,930.22</div>
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded"></div>
                      </div>
                      <div className="text-sm text-right">
                        <div className="text-gray-500">52W High</div>
                        <div className="font-medium">$49,743.83</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fundamentals Section */}
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-bold">Fundamentals</h3>
                    <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                      i
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">Bitcoin Price</span>
                        <span className="font-medium">${formatCurrency(priceData?.usd || 0)}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">24h Low / High</span>
                        <span className="font-medium">
                          ${formatCurrency((priceData?.usd || 0) * 0.95)} / ${formatCurrency((priceData?.usd || 0) * 1.05)}
                        </span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">Trading Volume</span>
                        <span className="font-medium">$23,249,202,782</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">Market Cap Rank</span>
                        <span className="font-medium">#1</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">Market Cap</span>
                        <span className="font-medium">$323,507,290,047</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">Market Cap Dominance</span>
                        <span className="font-medium">38.343%</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">Volume / Market Cap</span>
                        <span className="font-medium">0.0718</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">All-Time High</span>
                        <div className="text-right">
                          <div className="font-medium">$69,044.77 <span className="text-red-500">-75.8%</span></div>
                          <div className="text-sm text-gray-500">Nov 10, 2021 (about 1 year)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <SentimentSection />
              <AboutSection />
              <BitcoinCalculator />
              <TokenomicsSection />
              <TeamSection />
              <YouMayLike />
            </div>

            <div className="lg:col-span-1 order-3 lg:order-2">
              <div className="bg-[#0052FE] text-white p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Get Started with KoinX for FREE
                </h2>
                <p className="mb-6 text-gray-100 text-sm sm:text-base">
                  With our range of features that you can equip for free, KoinX allows
                  you to be more educated and aware of your tax reports.
                </p>
                <img
                  src="/lovable-uploads/468664a1-bf1a-4e74-961d-a9523087830e.png"
                  alt="KoinX Features"
                  className="w-40 sm:w-52 mx-auto mb-6"
                />
                <Button className="w-full bg-white text-[#0052FE] hover:bg-gray-100 font-semibold">
                  Get Started for FREE <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <TrendingCoins />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;