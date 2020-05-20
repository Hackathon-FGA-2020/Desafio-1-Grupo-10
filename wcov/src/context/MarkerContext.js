import React, { createContext } from 'react'

const markerData = {
  
  icon:'farm',

  coord: [0 ,0]
}

const MarkerContext = createContext(markerData)

function MarkerProvider ({children}){
  return (

    <MarkerContext.Provider value={markerData} >  
      {children}
    </MarkerContext.Provider>

)

}

export {MarkerContext, MarkerProvider }