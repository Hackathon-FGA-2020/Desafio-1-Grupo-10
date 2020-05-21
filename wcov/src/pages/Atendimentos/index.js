import React from 'react'
import Header from '../../components/Header'
import { Button, Grid} from '@material-ui/core'
import { Link } from 'react-router-dom';
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
      <p className = "text"> Aqui você encontra todos os locais de atendimento separado por cidades. Clicando em uma cidade você terá acesso a uma lista de Unidades Básica de Atendimento (UBS) e UPAs dispoíveis naquela região.</p>

      <Grid container noGutters="true" className = "grade">

        <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/1" class="button" disableRipple="true">Águas Claras</Button> 
        </Grid>
       
       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/2" class="button" disableRipple="true">Asa Norte</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/3" class="button" disableRipple="true">Asa Sul</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/4" class="button" disableRipple="true">Brazlândia</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/5" class="button" disableRipple="true">Candangolândia</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/6" class="button" disableRipple="true">Ceilândia</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/7" class="button" disableRipple="true">Cruzeiro</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/8" class="button" disableRipple="true">Fercal</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/9" class="button" disableRipple="true">Gama</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/10" class="button" disableRipple="true">Guará</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/11" class="button" disableRipple="true">Itapoã</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/12" class="button" disableRipple="true">Lago Norte</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/13" class="button" disableRipple="true">Núcleo Bandeirante</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/14" class="button" disableRipple="true">Paranoá</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/15" class="button" disableRipple="true">Park Way</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/16" class="button" disableRipple="true">Planaltina</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/17" class="button" disableRipple="true">Recanto das Emas</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/18" class="button" disableRipple="true">Riacho Fundo I</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/19" class="button" disableRipple="true">Riacho Fundo II</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/20" class="button" disableRipple="true">Samambaia</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/21" class="button" disableRipple="true">Santa Maria</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/22" class="button" disableRipple="true">São Sebastião</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/23" class="button" disableRipple="true">SCIA/Estrutural</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/24" class="button" disableRipple="true">SIA</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/25" class="button" disableRipple="true">Sobradinho I</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/26" class="button" disableRipple="true">Sobradinho II</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/27" class="button" disableRipple="true">Taguatinga</Button>  
        </Grid>
        
       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/28" class="button" disableRipple="true">Varjão</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/29" class="button" disableRipple="true">Vicente Pires</Button>  
        </Grid>

      </Grid>

    </div>
  </>
  )
}

export default Atendimentos