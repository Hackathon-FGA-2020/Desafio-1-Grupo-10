import React from 'react';
import Header from '../../components/Header'
import MapContainer from '../../components/Map'


function Home(){

  React.useEffect(() => {
    localStorage.clear()
  },[])

  return(
    <>
      <Header/>
      <MapContainer/>
    </>
  )
}

export default Home