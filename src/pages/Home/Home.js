import React from 'react';
import Banner from '../../components/Banner/Banner';
import MostPopular from '../../components/MostPopular/MostPopular';
import Services from '../../components/services/Services';

const Home = () => {
  return (
    <div>
      <h2>this is the home component</h2>
      <Banner></Banner>
      <MostPopular></MostPopular>
      <Services></Services>
    </div>
  );
};

export default Home;