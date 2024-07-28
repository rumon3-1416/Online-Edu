import React, { useState } from 'react';

import descImg from '../../images/man -sitting-with-laptop.png';
import onlineEduG from '../../images/online_edu-green.png';
import onlineEduW from '../../images/online_edu-white.png';
import certificateG from '../../images/certificate-green.png';
import certificateW from '../../images/certificate-white.png';
import expertG from '../../images/expert-green.png';
import expertW from '../../images/expert-white.png';

const benifitCard =
  'bg-white flex items-center justify-between md:rounded md:mb-2 p-6 desc-div';
const benifitCardHead = 'font-semibold text-xl mb-2';
const benifitCardDesc = 'text-gray-400 leading-7 text-base';

const currentDescription = ['', '', ''];

function Desc() {
  const [currentDesc, setCurrentDesc] = useState(currentDescription);

  const handleDescMouse = cd => {
    const newArray = [...currentDescription];
    newArray[cd[1]] = cd[0];
    setCurrentDesc(newArray);
  };

  return (
    <div
      className={`benifit-div flex w-[95%] mlg:w-[90%] max-w-[75rem] mx-auto py-4 mb-28`}
    >
      <div className="hidden md:flex justify-center items-center md:w-1/2">
        <img src={descImg} alt="img" />
      </div>

      <div className="w-full md:w-1/2 md:ps-3 lg:ps-0 mb-2 ">
        <h5 className="text-lg font-bold my-2 ct-green">LEARN ANYTHING</h5>
        <h1 className="text-4xl font-semibold mb-8">
          Benefits About Online Learning Expertise
        </h1>
        <div
          onMouseOver={() => handleDescMouse(['onlineEdu', 0])}
          onMouseLeave={() => handleDescMouse(['', 0])}
          className={benifitCard}
        >
          <img
            src={currentDesc[0] === 'onlineEdu' ? onlineEduW : onlineEduG}
            alt="img"
            className="desc-img"
          />

          <div className="ms-4">
            <h3 className={benifitCardHead}>Online Courses</h3>
            <p className={benifitCardDesc}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>

        <div
          onMouseOver={() => handleDescMouse(['certificate', 1])}
          onMouseLeave={() => handleDescMouse(['', 1])}
          className={benifitCard}
        >
          <img
            src={currentDesc[1] === 'certificate' ? certificateW : certificateG}
            alt="img"
            className="desc-img"
          />

          <div className="ms-4">
            <h3 className={benifitCardHead}>Earn A Certificate</h3>
            <p className={benifitCardDesc}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>

        <div
          onMouseOver={() => handleDescMouse(['expert', 2])}
          onMouseLeave={() => handleDescMouse(['', 2])}
          className={benifitCard}
        >
          <img
            src={currentDesc[2] === 'expert' ? expertW : expertG}
            alt="img"
            className="desc-img"
          />

          <div className="ms-4">
            <h3 className={benifitCardHead}>Learn with Expert</h3>
            <p className={benifitCardDesc}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desc;
