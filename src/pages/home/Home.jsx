import React from 'react'
import "./style.scss"
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from './trending/trending';

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}
import "./style.scss"
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';

export default Home