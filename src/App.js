import React from 'react';
import logoList from './LogoList';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "ease-out",
    arrows: false,
    variableWidth: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col pt-[136px] w-full h-[776px] justify-center pl-8 xl:pl-[390px] bg-hero-pattern bg-[#000] bg-opacity-70 bg-blend-hard-light font-display">
      {/* Top Section */}
      <div className="w-[420px] xl:w-[640px]">
        <h6 className="text-hubRed text-lg  font-bold">Monolith</h6>
        <h1 className="text-white text-[56px] leading-[64px] font-normal">With Monolith's AI Software, test less and learn more.</h1>
        <p className="text-lg text-white font-normal mt-4">Spend less time running expensive, repetitive tests and more time learning from your engineering data to predict the exact tests to run.</p>
      </div>
      <div className="mt-8">
        <button className="px-[40px] py-[16px] bg-hubRed hover:bg-hubRedDark rounded-full mr-4 transition-all ease-in duration-300">REQUEST DEMO</button>
        <button className="outline-button px-[40px] py-[16px] border-[3px] border-hubRed hover:bg-hubRed hover:text-black rounded-full transition-all ease-in duration-300">SPEAK TO OUR TEAM</button>
      </div>
      {/* Logo slider */}
      <Slider className='flex items-center justify-center w-[360px] xl:w-[1140px] ml-12 mt-12 xl:mt-24 mb-12' {...settings}>
        {logoList.map(logo => (
          <div key={logo.id} >
            <img className='h-4 xl:h-8' src={logo.image} alt={logo.name} />
          </div>
        ))}
      </Slider >
    </div >
  );
}

export default App;
