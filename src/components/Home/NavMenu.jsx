import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function NavMenu() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [navMenu, setNavMenu] = useState(false);
  const [activeNavMenu, setActiveNavMenu] = useState('about');

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      window.innerWidth >= 992 && setNavMenu(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let navMenuStyle =
    screenWidth >= 992
      ? ''
      : screenWidth < 992 && navMenu
        ? 'col-navMenu'
        : 'h-col-navMenu';

  return (
    <div className="text-white relative flex justify-between items-center max-w-[75rem] mx-auto mlg:me-4 lg:me-auto lg:bg-white/[0.15] mlg:bg-transparent bg-[#04AA6D]">
      <nav className={'z-10 ' + navMenuStyle}>
        <NavLink
          to="/"
          onClick={() => setActiveNavMenu('about')}
          className={`nav-menu font-semibold leading-[3.5rem] mx-7 mt-4 ${activeNavMenu === 'about' ? 'an-color' : ''}`}
        >
          About
        </NavLink>
        <NavLink
          to="/"
          onClick={() => setActiveNavMenu('team')}
          className={`nav-menu font-semibold leading-[3.5rem] mx-7 ${activeNavMenu === 'team' ? 'an-color' : ''}`}
        >
          Team
        </NavLink>
        <NavLink
          to="/"
          onClick={() => setActiveNavMenu('courses')}
          className={`nav-menu font-semibold leading-[3.5rem] mx-7 ${activeNavMenu === 'courses' ? 'an-color' : ''}`}
        >
          All Courses
        </NavLink>
        <NavLink
          to="/"
          onClick={() => setActiveNavMenu('pricing')}
          className={`nav-menu font-semibold leading-[3.5rem] mx-7 ${activeNavMenu === 'pricing' ? 'an-color' : ''}`}
        >
          Pricing
        </NavLink>
        <NavLink
          to="/"
          onClick={() => setActiveNavMenu('journal')}
          className={`nav-menu font-semibold leading-[3.5rem] mx-7 ${activeNavMenu === 'journal' ? 'an-color' : ''}`}
        >
          Journal
        </NavLink>
        <NavLink
          to="/"
          onClick={() => setActiveNavMenu('contact')}
          className={`nav-menu font-semibold leading-[3.5rem] mx-7 ${activeNavMenu === 'contact' ? 'an-color' : ''}`}
        >
          Contact
        </NavLink>
      </nav>

      <div className="mlg:bg-[#04aa6d] bg-[#049560] ms-3 relative">
        <button className=" font-semibold px-8 leading-[4.5rem]">
          GET CERTIFICATE
        </button>

        <div className="absolute btn-angle w-10 top-0 bottom-0 left-[-1.2rem] t-green hidden mlg:block"></div>
      </div>

      <div className="block mlg:hidden px-6 leading-[4.5rem]">
        <button
          className="nav-menu-btn"
          onClick={() => {
            setNavMenu(!navMenu);
          }}
        >
          <i className="fa-solid fa-bars me-2"></i>
          MENU
        </button>
      </div>
    </div>
  );
}

export default NavMenu;
