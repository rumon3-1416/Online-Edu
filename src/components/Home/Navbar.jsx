import React from 'react';

function Navbar() {
  return (
    <div className="flex items-center archivo-font w-[95%] mlg:w-[90%] max-w-[75rem] mx-auto py-5">
      <div className="text-white flex justify-between w-1/2 lg:w-7/12 pe-9">
        <div>
          <h1 className="text-3xl font-extrabold heading">
            <a href="http://localhost:3000/">RUMAN</a>
          </h1>
          <h5 className="text-xs font-bold">ONLINE EDUCATION & LEARNING</h5>
        </div>

        <div className="flex hidden mlg:flex items-center">
          <div>
            <i className="fa-solid fa-clock text-4xl"></i>
          </div>
          <div className="ms-3">
            <h4>Saterday-Thurstday</h4>
            <h3 className="font-bold">8:00AM-8:00PM</h3>
          </div>
        </div>
      </div>

      <div className="w-1/2 lg:w-5/12 hidden sm:flex justify-end mlg:justify-between">
        <div className=" text-white hidden mlg:flex items-center">
          <div>
            <i className="fa-solid fa-phone text-4xl"></i>
          </div>
          <div className="ms-3">
            <h4>Call Us</h4>
            <a href="tel:+8801112222333" className="font-bold">
              +880 111 2222 333
            </a>
          </div>
        </div>

        <div className="my-auto">
          <button className="nav-social-btn mx-0.5">
            <a href="https://www.facebook.com">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </button>
          <button className="nav-social-btn mx-0.5">
            <a href="https://www.twitter.com">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </button>
          <button className="nav-social-btn mx-0.5">
            <a href="https://www.instagram.com">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </button>
          <button className="nav-social-btn mx-0.5">
            <a href="https://www.youtube.com">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
