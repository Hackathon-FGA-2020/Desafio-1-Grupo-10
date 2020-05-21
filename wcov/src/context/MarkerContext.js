import React, { createContext } from 'react'

const markerData = {
  icon:'',
  title:'',
  description:'',
  coord: [0 ,0],
  like: 0,
  dislike:0,
  create_at: Date.now(),
  currentMarker: [0,0]

}


const MarkerContext = createContext(markerData)


function MarkerProvider ({children}){
  return (

    <MarkerContext.Provider value={markerData}>  
      {children}
    </MarkerContext.Provider>

)

}

export {MarkerContext, MarkerProvider }