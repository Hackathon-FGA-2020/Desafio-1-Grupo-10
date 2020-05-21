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

    <div class ="containerAten">

      <h1 className ="titleAten" >Unidades de Atendimento </h1>
      <p className = "textAten"> Aqui você encontra todos os locais de atendimento separado por cidades. Clicando em uma cidade você terá acesso a uma lista de Unidades Básica de Saúde (UBS) e Unidades Pronto Atendimento (UPAs) dispoíveis naquela região.</p>

      <Grid container noGutters="true" className = "grade">

        <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/1" class="buttonAten" disableRipple="true">Águas Claras</Button> 
        </Grid>
       
       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/2" class="buttonAten" disableRipple="true">Asa Norte</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/3" class="buttonAten" disableRipple="true">Asa Sul</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/4" class="buttonAten" disableRipple="true">Brazlândia</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/5" class="buttonAten" disableRipple="true">Candangolândia</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/6" class="buttonAten" disableRipple="true">Ceilândia</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/7" class="buttonAten" disableRipple="true">Cruzeiro</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/8" class="buttonAten" disableRipple="true">Fercal</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/9" class="buttonAten" disableRipple="true">Gama</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/10" class="buttonAten" disableRipple="true">Guará</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/11" class="buttonAten" disableRipple="true">Itapoã</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/12" class="buttonAten" disableRipple="true">Lago Norte</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/13" class="buttonAten" disableRipple="true">Núcleo Bandeirante</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/14" class="buttonAten" disableRipple="true">Paranoá</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/15" class="buttonAten" disableRipple="true">Park Way</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/16" class="buttonAten" disableRipple="true">Planaltina</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/17" class="buttonAten" disableRipple="true">Recanto das Emas</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/18" class="buttonAten" disableRipple="true">Riacho Fundo I</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/19" class="buttonAten" disableRipple="true">Riacho Fundo II</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/20" class="buttonAten" disableRipple="true">Samambaia</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/21" class="buttonAten" disableRipple="true">Santa Maria</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/22" class="buttonAten" disableRipple="true">São Sebastião</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/23" class="buttonAten" disableRipple="true">SCIA/Estrutural</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/24" class="buttonAten" disableRipple="true">SIA</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/25" class="buttonAten" disableRipple="true">Sobradinho I</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/26" class="buttonAten" disableRipple="true">Sobradinho II</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/27" class="buttonAten" disableRipple="true">Taguatinga</Button>  
        </Grid>
        
       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/28" class="buttonAten" disableRipple="true">Varjão</Button>  
        </Grid>

       <Grid item xs={XS} sm={SM} lg={LG} md = {MD}>
          <Button component = {Link} to = "/atendimentos/29" class="buttonAten" disableRipple="true">Vicente Pires</Button>  
        </Grid>

      </Grid>

    </div>
  </>
  )
}

export default Atendimentos