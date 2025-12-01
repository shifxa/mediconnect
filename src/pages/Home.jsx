// import React from 'react'
// import { useLocation } from 'react-router-dom';

import Categories from "../component/categories"
import Grid from "../component/grid"
import Hero from "../component/hero"


function Home() {
  //to see the path location
  // const location = useLocation()
  // console.log(location);
  return (
    <div>
      <Hero/>
      <Categories/>
      <Grid/>
    </div>
  )
}

export default Home