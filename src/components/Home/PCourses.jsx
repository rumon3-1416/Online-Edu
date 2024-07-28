import React from 'react';

import profilePic from '../../images/20230225_123443.jpg';

const cardClass =
  'card bg-white h-fit mx-2 max-w-[22rem] min-w-[22rem] rounded-md p-6 my-4';
const sectionParent = 'ms-6 h-[13rem] flex flex-col justify-between';
const section1H3 = 'font-semibold text-2xl mb-4';
const section2P1 = 'ct-green font-semibold mb-2';
const section2P2 = 'flex items-center mb-2';
const section2Img = 'border border-[#04aa6d] rounded-full w-8';
const section2Span = 'text-gray-600 font-semibold text-lg ms-2';
const coursePrice =
  'bg-gray-200 ct-green font-semibold text-lg rounded-md p-1.5 mb-3';
const enrollBtn =
  'w-full ct-green hover:text-white hover:bg-[#04aa6d] font-semibold border-2 rounded-md border-[#04aa6d] p-1.5';

function PCourses() {
  return (
    <div className="w-[95%] mlg:w-[90%] max-w-[75rem] text-center mx-auto py-4 mb-28">
      <div className="flex flex-col justify-center">
        <h4 className="ct-green font-bold text-lg mb-2">OUR COURSES</h4>
        <h2 className="font-semibold text-4xl mb-8">
          Explore Our Popular Online Courses
        </h2>
      </div>

      <div className="p-courses flex overflow-x-hidden text-left">
        {/* Javascript */}
        <div className={cardClass}>
          <div className="flex mb-8">
            <i className="fa-brands fa-square-js text-8xl ct-green"></i>

            <div className={sectionParent}>
              <section>
                <h3 className={section1H3}>Complete Javascript Course</h3>
              </section>

              <section>
                <p className={section2P1}>185 Lectures (64hrs)</p>
                <p className={section2P2}>
                  <span>
                    <img src={profilePic} alt="img" className={section2Img} />
                  </span>{' '}
                  <span className={section2Span}>By SH Ruman</span>
                </p>
                <p className="ct-green">
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </span>
                  <span>(4.9)</span>
                </p>
              </section>
            </div>
          </div>

          <div className="w-full text-center">
            <p className={coursePrice}>$99 All Course</p>
            <button className={enrollBtn}>ENROLL NOW!</button>
          </div>
        </div>

        {/* React */}
        <div className={cardClass}>
          <div className="flex mb-8">
            <i className="fa-brands fa-react text-8xl ct-green"></i>

            <div className={sectionParent}>
              <section>
                <h3 className={section1H3}>Complete React Course</h3>
              </section>

              <section>
                <p className={section2P1}>73 Lectures (32hrs)</p>
                <p className={section2P2}>
                  <span>
                    <img src={profilePic} alt="img" className={section2Img} />
                  </span>{' '}
                  <span className={section2Span}>By SH Ruman</span>
                </p>
                <p className="ct-green">
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>(5.0)</span>
                </p>
              </section>
            </div>
          </div>

          <div className="w-full text-center">
            <p className={coursePrice}>$89 All Course</p>
            <button className={enrollBtn}>ENROLL NOW!</button>
          </div>
        </div>

        {/* Git */}
        <div className={cardClass}>
          <div className="flex mb-8">
            <i className="fa-brands fa-git-alt text-8xl ct-green"></i>

            <div className={sectionParent}>
              <section>
                <h3 className={section1H3}>Complete Git & Github Course</h3>
              </section>

              <section>
                <p className={section2P1}>51 Lectures (28hrs)</p>
                <p className={section2P2}>
                  <span>
                    <img src={profilePic} alt="img" className={section2Img} />
                  </span>{' '}
                  <span className={section2Span}>By SH Ruman</span>
                </p>
                <p className="ct-green">
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </span>
                  <span>(4.7)</span>
                </p>
              </section>
            </div>
          </div>

          <div className="w-full text-center">
            <p className={coursePrice}>$69 All Course</p>
            <button className={enrollBtn}>ENROLL NOW!</button>
          </div>
        </div>

        {/* Nodejs */}
        <div className={cardClass}>
          <div className="flex mb-8">
            <i className="fa-brands fa-node text-[4.8rem] ct-green"></i>

            <div className={sectionParent}>
              <section>
                <h3 className={section1H3}>Complete Node Js Course</h3>
              </section>

              <section>
                <p className={section2P1}>64 Lectures (44hrs)</p>
                <p className={section2P2}>
                  <span>
                    <img src={profilePic} alt="img" className={section2Img} />
                  </span>{' '}
                  <span className={section2Span}>By SH Ruman</span>
                </p>
                <p className="ct-green">
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </span>
                  <span>(4.8)</span>
                </p>
              </section>
            </div>
          </div>

          <div className="w-full text-center">
            <p className={coursePrice}>$65 All Course</p>
            <button className={enrollBtn}>ENROLL NOW!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PCourses;
