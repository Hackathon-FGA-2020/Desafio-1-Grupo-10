import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Cuidados from '../pages/Cuidados'
import Mapeamento from '../pages/MapdeCasos'
import Ajuda from '../pages/Ajuda'
import Atendimentos from '../pages/Atendimentos'


export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact strict component={Home} />
      <Route path="/sobre" exact strict component={About} />
      <Route path="/cuidados" exact string component={Cuidados} />
      <Route path='/mapeamento-de-casos' exact strict component ={Mapeamento} />
      <Route path='/ajuda' exact strict component ={Ajuda} />
      <Route path='/atendimentos' exact strict component ={Atendimentos} />
      
    </Switch>
  )
}
