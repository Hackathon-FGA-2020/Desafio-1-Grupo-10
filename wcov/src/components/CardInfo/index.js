import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from "@material-ui/core/CardContent"
import CardActions from '@material-ui/core/CardActions'
import {useStyles} from './styles'
import { Divider } from '@material-ui/core'

function CardInfo (){

  const classes = useStyles()

  return (
        <>
        <h1 className={classes.title} >Titulo</h1>
        <Divider />
        <p className={classes.description} >
          <strong>Descrição: </strong>
          Is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        </>
  )
}


export default CardInfo;