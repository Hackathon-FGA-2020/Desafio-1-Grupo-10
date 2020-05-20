import React from 'react';
import Header from '../../components/Header'
import MapContainer from '../../components/Map'
import FloatingFilter from '../../components/FloatingFilter'
import FloatButton from '../../components/FloatButton'
import Form from '../../components/Form'

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