import React from 'react';
import Banner from '../../components/Banner/Banner';
import MostPopular from '../../components/MostPopular/MostPopular';
import Services from '../../components/services/Services';
import Subscribe from '../../components/Subscribe/Subscribe';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MostPopular></MostPopular>
      <Subscribe />
      {/* <Services></Services> */}
    </div>
  );
};

export default Home;