import React from 'react';

const coursePdivClass = 'w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6';
const courseClass =
  'course bg-white hover:bg-[#04aa6d] rounded-lg shadow-lg m-2 p-6';
const courseIcon = 'ct-green text-7xl mb-4';
const courseH3 = 'text-xl font-semibold mb-1';
const courseP =
  'inline-block text-sm font-semibold ct-green bg-gray-200 mb-2 py-1 px-4 rounded';

function AllCourses() {
  return (
    <div className="w-[95%] mlg:w-[90%] max-w-[75rem] text-center mx-auto py-4 mb-28">
      <div className="mb-4">
        <h4 className="ct-green font-bold text-lg mb-2">COURSES</h4>
        <h2 className="font-semibold text-4xl mb-8">
          Browse Our Online Courses
        </h2>
      </div>

      <div className="flex flex-wrap archivo-font">
        <div className={coursePdivClass}>
          <div className={courseClass}>
            <i className={`${courseIcon} fa-brands fa-html5`}></i>
            <h3 className={courseH3}>HTML</h3>
            <p className={courseP}>12 Courses</p>
          </div>
        </div>

        <div className={coursePdivClass}>
          <div className={courseClass}>
            <i className={`${courseIcon} fa-brands fa-css3`}></i>
            <h3 className={courseH3}>CSS</h3>
            <p className={courseP}>16 Courses</p>
          </div>
        </div>

        <div className={coursePdivClass}>
          <div className={courseClass}>
            <i className={`${courseIcon} fa-brands fa-js`}></i>
            <h3 className={courseH3}>Javascript</h3>
            <p className={courseP}>23 Courses</p>
          </div>
        </div>

        <div className={coursePdivClass}>
          <div className={courseClass}>
            <i className={`${courseIcon} fa-brands fa-java`}></i>
            <h3 className={courseH3}>Java</h3>
            <p className={courseP}>19 Courses</p>
          </div>
        </div>

        <div className={coursePdivClass}>
          <div className={courseClass}>
            <i className={`${courseIcon} fa-brands fa-react`}></i>
            <h3 className={courseH3}>React</h3>
            <p className={courseP}>28 Courses</p>
          </div>
        </div>

        <div className={coursePdivClass}>
          <div className={courseClass}>
            <i className={`${courseIcon} fa-brands fa-node`}></i>
            <h3 className={courseH3}>Node</h3>
            <p className={courseP}>18 Courses</p>
          </div>
        </div>

        <div className={coursePdivClass}>
          <div className={courseClass}>
            <i className={`${courseIcon} fa-brands fa-angular`}></i>
            <h3 className={courseH3}>Angular</h3>
            <p className={courseP}>14 Courses</p>
          </div>
        </div>

        <div className={coursePdivClass}>
          <div className={courseClass}>
            <i className={`${courseIcon} fa-brands fa-vuejs`}></i>
            <h3 className={courseH3}>Vue</h3>
            <p className={courseP}>15 Courses</p>
          </div>
        </div>

        <div className={coursePdivClass}>
          <div className={courseClass}>
            <i className={`${courseIcon} fa-brands fa-python`}></i>
            <h3 className={courseH3}>Python</h3>
            <p className={courseP}>14 Courses</p>
          </div>
        </div>

        <div className={coursePdivClass}>
          <div className={courseClass}>
            <i className={`${courseIcon} fa-brands fa-git-alt`}></i>
            <h3 className={courseH3}>Git</h3>
            <p className={courseP}>11 Courses</p>
          </div>
        </div>

        <div className={coursePdivClass}>
          <div className={courseClass}>
            <i className={`${courseIcon} fa-brands fa-bootstrap`}></i>
            <h3 className={courseH3}>Bootstrap</h3>
            <p className={courseP}>9 Courses</p>
          </div>
        </div>

        <div className={coursePdivClass}>
          <div className={courseClass}>
            <i className={`${courseIcon} fa-brands fa-sass`}></i>
            <h3 className={courseH3}>SASS</h3>
            <p className={courseP}>11 Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCourses;
