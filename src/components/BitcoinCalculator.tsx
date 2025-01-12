import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const BitcoinCalculator = () => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 sm:mb-8">
      <h3 className="text-lg sm:text-xl font-bold mb-4">Already Holding Bitcoin?</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-teal-400 via-blue-400 to-blue-500 p-4 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
              <img 
                src="/lovable-uploads/87a08c8b-f9b2-4e9e-9a71-0a7bc0837cb4.png"
                alt="Calculate Profits"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Calculate your Profits</h4>
              <Button variant="secondary" className="bg-white hover:bg-gray-50 text-xs sm:text-sm">
                Check Now <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-400 via-red-400 to-red-500 p-4 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
              <img 
                src="/lovable-uploads/8edf58b4-3412-4613-bb06-39cd6ce35e14.png"
                alt="Calculate Tax"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Calculate your tax liability</h4>
              <Button variant="secondary" className="bg-white hover:bg-gray-50 text-xs sm:text-sm">
                Check Now <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinCalculator;