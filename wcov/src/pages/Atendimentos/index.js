import React from 'react'
import Header from '../../components/Header'
import { Button, Grid, Popover} from '@material-ui/core'
import './style.css'

const XS = 12;
const SM = 6;
const MD = 4;
const LG = 3;

function Atendimentos (){
  
  return (
  <>
    <Header/>

    <div class ="container">

      <h1 className="title" >Unidades de Atendimento </h1>

      <Grid container noGutters="true" className = "grade">

        <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button class="button" disableRipple="true">Águas Claras</Button> 
        </Grid>
       
       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Asa Sul</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Asa Norte</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Braslândia</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Candangolândia</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Ceilândia</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Cruzeiro</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Fercal</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Gama</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Guará</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Itapoã</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Lago Norte</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Núcleo Bandeirante</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Paranoá</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Park Way</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Planaltina</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Recanto das Emas</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Riacho Fundo I</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Riacho Fundo II</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Samambaia</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Santa Maria</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">São Sebastião</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">SCIA/Estrutural</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">SIA</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Sobradinho I</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Sobradinho II</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Taguatinga</Button>  
        </Grid>
        
       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Varjão</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
         <Button class="button" disableRipple="true">Vicente Pires</Button>  
        </Grid>

        
      </Grid>
    </div>
  </>
  )
}

export default Atendimentos