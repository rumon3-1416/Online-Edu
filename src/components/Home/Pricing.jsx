import React from 'react';

const pricingCard =
  'bg-white rounded-md shadow-lg w-[97%] md:w-[47%] lg:w-[23%] max-w-[32rem] md:max-w-[22rem] m-[1.5%] lg:m-[1%] px-8 py-10';
const pricingH5 = 'text-sm font-semibold tracking-wider mb-3';
const pricingH1 = 'text-5xl text-[#04aa6d] font-bold p-3';
const pricingH1Span = 'text-3xl text-[gray]';
const pricingP = 'text-[gray] py-10';
const pricingBtn =
  'font-semibold text-xs tracking-wider text-[#04a66d] hover:text-white hover:bg-[#04aa6d] border-[1px] border-[#04a66d] rounded min-w-[65%] p-4 mb-3';

function Pricing() {
  return (
    <div className="w-[95%] mlg:w-[90%] max-w-[75rem] text-center mx-auto py-4 mb-28">
      <div className="py-4">
        <h4 className="ct-green font-bold text-lg mb-2">OUR PRICING</h4>
        <h2 className="font-semibold text-4xl mb-8">Pricing & Packages</h2>
      </div>

      <div className="flex flex-wrap justify-center archivo-font">
        <div className={pricingCard}>
          <h5 className={pricingH5}>BASIC PLAN</h5>
          <h1 className={pricingH1}>
            <sup className={pricingH1Span}>$</sup>49K
          </h1>
          <p className={pricingP}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className={pricingBtn}>GET STARTED</button>
        </div>

        <div className={pricingCard}>
          <h5 className={pricingH5}>BEGINNER PLAN</h5>
          <h1 className={pricingH1}>
            <sup className={pricingH1Span}>$</sup>79K
          </h1>
          <p className={pricingP}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className={pricingBtn}>GET STARTED</button>
        </div>

        <div className={pricingCard}>
          <h5 className={pricingH5}>PREMIUM PLAN</h5>
          <h1 className={pricingH1}>
            <sup className={pricingH1Span}>$</sup>109K
          </h1>
          <p className={pricingP}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className={pricingBtn}>GET STARTED</button>
        </div>

        <div className={pricingCard}>
          <h5 className={pricingH5}>ULTIMATE PLAN</h5>
          <h1 className={pricingH1}>
            <sup className={pricingH1Span}>$</sup>149K
          </h1>
          <p className={pricingP}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className={pricingBtn}>GET STARTED</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
