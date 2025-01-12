import CryptoDetails from '../components/CryptoDetails';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#EFF2F5] text-gray-900">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Cryptocurrencies</span>
            <span>{'>'}</span>
            <span className="text-black">Bitcoin</span>
          </div>
        </div>
        <CryptoDetails coinId="bitcoin" />
      </div>
    </div>
  );
};

export default Index;