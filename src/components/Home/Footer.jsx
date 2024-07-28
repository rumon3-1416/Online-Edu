import React from 'react';

import ruman1 from '../../images/ruman1.jpg';
import ruman2 from '../../images/ruman2.jpg';
import ruman3 from '../../images/ruman3.jpg';

const socialLink =
  'bg-[#04aa6d] text-white inline-block w-10 h-10 rounded-[50%] relative me-2';
const socialLinkIcon =
  'text-base absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
// footer head & explore, qui3.5k
const footerH3 = 'text-lg font-semibold mb-12 mt-2';
const footerLinkArrow = 'fa-solid fa-arrow-right ct-green text-xs me-2';
const footerLink = 'hover:text-[#04aa6d] text-gray-500 transition-colors';

// Posts
const post = 'flex items-center mb-8';
const postImg = 'h-12 rounded-md me-5';
const postDetail = 'text-sm text-[#04aa6d] flex flex-wrap';
const postDate = 'fa-regular fa-calendar-days me-1 mb-2';

function Footer() {
  return (
    <footer>
      <div className="w-[95%] mlg:w-[90%] max-w-[75rem] flex flex-wrap mx-auto py-4 archivo-font">
        {/* Ruman */}
        <div className="w-full md:w-1/2 lg:w-[22.22%] mb-8 pe-4">
          <a href="http://localhost:3000/">
            <h1 className="text-3xl font-bold font-sans">RUMAN</h1>
            <p className="text-sm font-semibold ct-green mb-10">
              ONLINE EDUCATION & LEARNING
            </p>
          </a>

          <p className="text-gray-400 mb-5">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>

          <div>
            <a href="http://facebook.com" target="blank" className={socialLink}>
              <i className={`${socialLinkIcon} fa-brands fa-facebook-f`}></i>
            </a>
            <a
              href="http://instagram.com"
              target="blank"
              className={socialLink}
            >
              <i className={`${socialLinkIcon} fa-brands fa-instagram`}></i>
            </a>
            <a href="http://twitter.com" target="blank" className={socialLink}>
              <i className={`${socialLinkIcon} fa-brands fa-twitter`}></i>
            </a>
          </div>
        </div>

        {/* Explore */}
        <div className="w-full md:w-1/2 lg:w-[16.67%] pe-4">
          <h3 className={footerH3}>Explore</h3>

          <ul>
            <li className="mb-3.5">
              <a href="http://localhost:3000/" className={footerLink}>
                <span className={footerLinkArrow}></span>
                Courses
              </a>
            </li>{' '}
            <li className="mb-3.5">
              <a href="http://localhost:3000/" className={footerLink}>
                <span className={footerLinkArrow}></span>
                Services
              </a>
            </li>{' '}
            <li className="mb-3.5">
              <a href="http://localhost:3000/" className={footerLink}>
                <span className={footerLinkArrow}></span>
                Blog
              </a>
            </li>{' '}
            <li className="mb-3.5">
              <a href="http://localhost:3000/" className={footerLink}>
                <span className={footerLinkArrow}></span>
                Team
              </a>
            </li>{' '}
            <li className="mb-3.5">
              <a href="http://localhost:3000/" className={footerLink}>
                <span className={footerLinkArrow}></span>
                About us
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/2 lg:w-[16.67%] pe-4">
          <h3 className={footerH3}>Quick Links</h3>

          <ul>
            <li className="mb-3.5">
              <a href="http://localhost:3000/" className={footerLink}>
                <span className={footerLinkArrow}></span>
                Contact Us
              </a>
            </li>{' '}
            <li className="mb-3.5">
              <a href="http://localhost:3000/" className={footerLink}>
                <span className={footerLinkArrow}></span>
                Pricing
              </a>
            </li>{' '}
            <li className="mb-3.5">
              <a href="http://localhost:3000/" className={footerLink}>
                <span className={footerLinkArrow}></span>
                Terms & Condition
              </a>
            </li>{' '}
            <li className="mb-3.5">
              <a href="http://localhost:3000/" className={footerLink}>
                <span className={footerLinkArrow}></span>
                Privacy
              </a>
            </li>{' '}
            <li className="mb-3.5">
              <a href="http://localhost:3000/" className={footerLink}>
                <span className={footerLinkArrow}></span>
                Feedbacks
              </a>
            </li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="w-full md:w-1/2 lg:w-[22.22%]">
          <h3 className={`${footerH3} mb-10`}>Recent Posts</h3>

          <div className={post}>
            <img src={ruman3} alt="img" className={postImg} />

            <div>
              <div className={postDetail}>
                <p className="me-2">
                  <span className={postDate}></span>
                  Jan 8, 2024
                </p>
                <a href="http://localhost:3000">
                  <span className="fa-solid fa-user me-1 mb-2"></span>
                  Admin
                </a>
              </div>

              <p className="text-gray-500">Creativity and Inspiration</p>
            </div>
          </div>

          <div className={post}>
            <img src={ruman2} alt="img" className={postImg} />

            <div>
              <div className={postDetail}>
                <p className="me-2">
                  <span className={postDate}></span>
                  Jan 12, 2024
                </p>
                <a href="http://localhost:3000">
                  <span className="fa-solid fa-user me-1 mb-2"></span>
                  Admin
                </a>
              </div>

              <p className="text-gray-500">Creativity and Inspiration</p>
            </div>
          </div>

          <div className={post}>
            <img src={ruman1} alt="img" className={postImg} />

            <div>
              <div className={postDetail}>
                <p className="me-2">
                  <span className={postDate}></span>
                  Jan 20, 2024
                </p>
                <a href="http://localhost:3000">
                  <span className="fa-solid fa-user me-1 mb-2"></span>
                  Admin
                </a>
              </div>

              <p className="text-gray-500">Creativity and Inspiration</p>
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="w-full md:w-1/2 lg:w-[22.22%] ps-0 lg:ps-4">
          <h3 className={footerH3}>Have a Questions?</h3>

          <ul className="text-gray-500 text-[15px]">
            <li className="mb-3.5 table">
              <span className="fa-solid fa-flag me-6 ct-green"></span>
              <span className="table-cell">287 Fake St. Dhaka, Bangladesh</span>
            </li>

            <li className="mb-8">
              <a href="tel:+8801112222333">
                <span className="fa-solid fa-phone me-6 ct-green"></span>
                <span>+8801112222333</span>
              </a>
            </li>

            <li className="mb-6">
              <a href="mailto:aabbcc@gmail.com">
                <span className="fa-solid fa-paper-plane me-6 ct-green"></span>
                <span>aabbcc@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full text-center mx-auto py-4 bg-gray-200">
        <p className="py-6 text-gray-500">
          Copyright &copy;2024 All rights reserved | This site is made with
          <span className="text-red-500 text-xl"> &hearts; </span> by{' '}
          <a href="http://localhost:3000/" className="ct-green">
            Ruman
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
