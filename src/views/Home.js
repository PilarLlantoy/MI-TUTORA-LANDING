import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import FeaturesBestService from '../components/sections/FeaturesBestService';
import FeaturesSteps from '../components/sections/FeaturesSteps';

// import Testimonial from '../components/sections/Testimonial';

const Home = () => {

  return (
    <>
      <Hero/>
      <FeaturesTiles style={{"margin-top": "70px"}}/>
      <FeaturesSplit invertMobile/>
      <FeaturesBestService style={{"margin-top": "50px"}}/>
      <FeaturesSteps style={{"margin-top": "70px"}}/> 
      {/* <Testimonial topDivider /> */}
    </>
  );
}

export default Home;