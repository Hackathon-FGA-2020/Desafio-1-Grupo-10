import React from 'react';
import Header from '../../components/Header'
import MapContainer from '../../components/Map'
import FloatingFilter from '../../components/FloatingFilter'
import FloatButton from '../../components/FloatButton'

function Home(){

  return(
    <>
      <Header />
      <MapContainer/>
      <FloatingFilter/>
      <FloatButton/>
    </>
  )
}

export default Home