import React from 'react';
import Header from '../../components/Header'
import MapContainer from '../../components/Map'
import FloatButton from '../../components/FloatButton'
import FormFade from '../../components/FormFade'

function Home(){

  return(
    <>
    <Header />
      <MapContainer/>
      <FloatButton/>
      <FormFade/>
  </>
  )
}

export default Home