import React from 'react';

const TokenomicsSection = () => {
  return (
    <div className="bg-white rounded-lg p-6 mb-8">
      <h3 className="text-2xl font-bold mb-6">Tokenomics</h3>
      <h4 className="text-lg font-semibold mb-4">Initial Distribution</h4>
      
      <div className="flex items-center gap-8 mb-6">
        <div className="w-48 h-48 relative">
          {/* Donut chart using border technique */}
          <div className="absolute inset-0 rounded-full border-[24px] border-blue-500" style={{ transform: 'rotate(0deg)' }} />
          <div className="absolute inset-0 rounded-full border-[24px] border-orange-400" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)', transform: 'rotate(0deg)' }} />
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Crowdsale investors: 80%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-400"></div>
            <span>Foundation: 20%</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet elit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dul metus odio rutrum. Vel ipsum eget in at cursus sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
};

export default TokenomicsSection;