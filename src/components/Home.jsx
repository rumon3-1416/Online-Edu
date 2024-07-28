import React from 'react';
import Banner from './Home/Banner';
import Desc from './Home/Desc';
import PCourses from './Home/PCourses';
import AllCourses from './Home/AllCourses';
import Pricing from './Home/Pricing';
import Newsletter from './Home/Newsletter';
import Footer from './Home/Footer';

function Home() {
  return (
    <>
      <Banner />
      <Desc />
      <PCourses />
      <AllCourses />
      <Pricing />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
