import { ChevronLeft, ChevronRight, Newspaper, TrendingUp } from "lucide-react";
import { useState } from "react";

const SentimentSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const events = [
    {
      icon: <Newspaper className="h-6 w-6 text-blue-600" />,
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quia, voluptate quae voluptatem quibusdam.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quia, voluptate quae voluptatem quibusdam.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 mb-5">
      <h2 className="text-2xl font-semibold mb-5">Sentiment</h2>
      
      <div className="mb-5">
        <h3 className="text-lg text-gray-700 font-semibold mb-4">Key Events</h3>
        
        {/* Desktop View */}
        <div className="hidden sm:flex gap-4 overflow-x-auto">
          {events.map((event, index) => (
            <div key={index} className={`flex items-start gap-2 ${event.bgColor} p-4 rounded-lg flex-1`}>
              <div className={`w-12 h-12 ${event.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                {event.icon}
              </div>
              <div>
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-gray-500 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="relative sm:hidden">
          <div className={`flex items-start gap-2 ${events[currentSlide].bgColor} p-4 rounded-lg`}>
            <div className={`w-12 h-12 ${events[currentSlide].iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
              {events[currentSlide].icon}
            </div>
            <div>
              <p className="font-medium">{events[currentSlide].title}</p>
              <p className="text-sm text-gray-500 mt-2">{events[currentSlide].description}</p>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg text-gray-700 font-semibold mb-4">Analyst Estimates</h3>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-green-50 rounded-full flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-green-600">76%</span>
          </div>
          <div className="flex-1 w-full space-y-4">
            <div className="flex items-center gap-4 sm:gap-8">
              <span className="text-gray-500 w-8 sm:w-12">Buy</span>
              <div className="flex-1 h-2 bg-green-500 rounded" style={{ width: '76%' }}></div>
              <span className="text-gray-500 w-8 sm:w-12 text-right">76%</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-8">
              <span className="text-gray-500 w-8 sm:w-12">Hold</span>
              <div className="flex-1 h-2 bg-gray-200 rounded" style={{ width: '8%' }}></div>
              <span className="text-gray-500 w-8 sm:w-12 text-right">8%</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-8">
              <span className="text-gray-500 w-8 sm:w-12">Sell</span>
              <div className="flex-1 h-2 bg-red-500 rounded" style={{ width: '16%' }}></div>
              <span className="text-gray-500 w-8 sm:w-12 text-right">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentSection;