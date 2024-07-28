import React from 'react';

function Welcome() {
  return (
    <div className="absolute top-[40%] -inset-x-1/2 w-[95%] mlg:w-[90%] max-w-[75rem] mx-auto">
      <div className="w-full mlg:w-1/2 banner-anim z-0  text-white">
        <h5 className="font-semibold tracking-widest archivo-font mb-3">
          WELCOME TO RUMAN
        </h5>
        <h1 className="text-4xl font-bold archivo-font mb-7">
          Best Online Education Expertise
        </h1>
        <p className="mb-7 max-w-2xl">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>

        <div>
          <button className="t-green rounded font-semibold text-sm w-full md:w-fit md:me-1.5 mb-1.5 p-4 hover:shadow-lg">
            GET STARTED NOW!{' '}
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button>
          <button className="bg-white rounded font-semibold ct-green text-sm w-full md:w-fit mb-1.5 p-4 hover:shadow-lg">
            VIEW COURSE{' '}
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
