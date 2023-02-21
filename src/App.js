import logoList from './LogoList';

function App() {
  return (
    <div className="flex flex-col w-full h-[776px] justify-center pl-[211px] bg-hero-pattern font-display">
      <div className="w-[640px]">
        <h6 className="text-hubRed text-lg  font-bold">Monolith</h6>
        <h1 className="text-white text-[56px] leading-[64px] font-normal">With Monolith's AI Software, test less and learn more</h1>
        <p className="text-lg text-white font-normal mt-4">Spend less time running expensive, repetitive tests and more time learning from your engineering data to predict the exact tests to run.</p>
      </div>
      <div className="mt-8">
        <button className="px-[40px] py-[16px] bg-hubRed hover:bg-hubRedDark rounded-full mr-4 transition-all ease-in duration-300">REQUEST DEMO</button>
        <button className="outline-button px-[40px] py-[16px] border-[3px] border-hubRed hover:bg-hubRed hover:text-black rounded-full transition-all ease-in duration-300">SPEAK TO OUR TEAM</button>
      </div>
      {/* Logo slider */}
      <div className="flex gap-12 pl-8 w-[1000px] mt-8 overflow-x-hidden">
        {
          logoList.map(logo => {
            return (
              <img key={logo.id} src={logo.image} alt={logo.name} />
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
