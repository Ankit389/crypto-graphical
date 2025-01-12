import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 sm:mb-8">
      <h3 className="text-lg sm:text-xl font-bold mb-4">About Bitcoin</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-bold mb-2 text-base sm:text-lg">What is Bitcoin?</h4>
          <p className="text-gray-600 text-sm sm:text-base">
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-2 text-base sm:text-lg">Lorem ipsum dolor sit amet</h4>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </p>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Diam praesent massa dapibus magna aliquam. Diam praesent massa dapibus magna aliquam. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque portitor pulvinar nunc risus. Fermentum potenti lacinia lacinia feugiat amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;