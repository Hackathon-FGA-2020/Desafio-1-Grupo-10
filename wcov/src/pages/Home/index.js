import React from 'react';
import Header from '../../components/Header'
import MapContainer from '../../components/Map'
import FloatButton from '../../components/FloatButton'
import Form from '../../components/Form'

function Home(){

  return(
    <>
    <Header />
      <MapContainer/>
      <FloatButton/>
      <Form/>
  </>
  )
}

export default Home