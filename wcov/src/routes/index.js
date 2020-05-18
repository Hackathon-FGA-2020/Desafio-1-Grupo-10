import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'


export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact strict component={Home} />
      <Route path="/sobre" exact strict component={About} />
    

    </Switch>
  )
}
