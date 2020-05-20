import React from 'react'
import Header from '../../components/Header'
import './style.css'

import transmissao from '../../assets/Cuidados/transmissao.svg'
import socialDistancing from '../../assets/Cuidados/socialDistancing.svg'
import washingHands from '../../assets/Cuidados/washingHands.svg'
import cough from '../../assets/Cuidados/cough.svg'
import distancing from '../../assets/Cuidados/distancing.svg'
import stayHome from '../../assets/Cuidados/stayHome.svg'
import handWashing from '../../assets/Cuidados/handWashing.svg'
import fightingCorona from '../../assets/Cuidados/fightingCorona.svg'
import febre from '../../assets/Cuidados/febre.svg'
import doente from '../../assets/Cuidados/doente.svg'
import doctor from '../../assets/Cuidados/doctor.svg'

function Cuidados() {

  return (
    <>
      <Header />
      <div className="containerCuidados" >

        <h1 className="TitleCuidados" >Transmissão</h1>

        
        <div className="containerContentCuidados" >

          <di>

            <p className="descriptionCuidados">
              Ela costuma ocorrer através do contato das mucosa com o ar contaminado com secreções e/ou por contato pessoal, como:
          </p>

            <ul className="listCuidados" >
              <li>Beijo, abraços e aperto de mão</li>
              <li>Contato com objetos e superfícies contaminadas</li>
              <li>Gotículas de saliva</li>
              <li>Epirro</li>
              <li>Catarro/Corisa</li>
              <li>Tosse</li>
            </ul>
          </di>

          <img src={transmissao} style={{ width: 500, height: 500 }} alt="Transmissão" />
        </div>


        <div className="containerContentCuidados" >
          <img src={socialDistancing} alt="Distância social" />
          <div className="atentionCuidados" >
          <p>
              <strong>Atenção: </strong>
              A transmissão pode ocorrer mesmo se a pessoa não apresentar sintomas, então mantenha o distanciamento social.
            </p>
          </div>
        </div>





          <h1 className="TitleCuidados" >Como se previnir?</h1>


        <div>


          <div className="containerContentCuidados" >

            <img src={washingHands} alt="Lavar as mãos" />

            <p className="descriptionCuidados">
              Lave as mãos frequentemente coma aguá e sabão por  pelo menos 20 segundos. Use antisséptico de mãos à base de álcool gel 70%.
            </p>

          </div>



          <div className="containerContentCuidados" >

          <p className="descriptionCuidados">
              Cubra o nariz e  a boca ao espirrar ou tossir.
            </p>

            <img src={cough} alt="Tossir" />


          </div>


          <div className="containerContentCuidados" >

          <p className="descriptionCuidados">
              Em eventos abertos recomenda-se a distância mínima de dois entre pessoas. Evite apertos de mão, abraços e beijos.
            </p>

            <img src={distancing} alt="Distância" />

          </div>

          <div className="containerContentCuidados" >
            <img src={stayHome} alt="Ficar em casa" />

            <p className="descriptionCuidados">
              Se possível fique em casa e saia somente se for necessário.
            </p>

          </div>


          <div className="containerContentCuidados" >
          <p className="descriptionCuidados">
              Mantenha os ambientes bem ventilados e limpos.
            </p>

            <img src={fightingCorona} alt="Ficar em casa" />


          </div>

          <div className="containerContentCuidados" >
            <img src={handWashing} alt="Lavar as mãos" />

            <p className="descriptionCuidados">
              Evite tocar os olhos, boca ou nariz antesde higienizar as mãos e não compartilhe objetos pessoais.
            </p>

          </div>


        </div>


        <h1 className="TitleCuidados" >Sintomas</h1>

        <div>


          <div className="containerContentCuidados" >
          <p className="descriptionCuidados">
              O Corona vírus afeta diferentes pessoas de diferentes maneiras.
              A maioria das pessoas infectadas apresentará sintomas leves a moderados
              da doença e não precisarão ser hospitalizadas.
              </p>

            <img src={doente} alt="Doente" />
          </div>

          <div className="containerContentCuidados" >
            <img src={febre} alt="Febre" />

            <ul className="listCuidados" >
              <li>Tosse seca</li>
              <li>Febre</li>
              <li>Fadiga persistente</li>
              <li>Dor no corpo</li>
              <li>Dificuldade para respirar</li>
              <li>Coriza</li>
              <li>Diarreia</li>
            </ul>

          </div>


        </div>



        <div>

          <h1 className="TitleCuidados" >O que fazer em casos de suspeitas</h1>

          <div className="containerContentCuidados" >

            <div>


              <p>
                Estou com os sintomas, mas não viajei e nem tive acesso a pessoas que voltaram de viagem recentemente. O que fazer?
            </p>
              <p>
                Procure a Unidade Básica de Saúde (USB) mais próxima.
            </p>
              <p>
                Estou com sintomas e tive acesso a pessoas que voltaram de viagem internacional. O que fazer?
            </p>
              <p>
                Entre em contato com 190, 193 ou 199 e informe sua situação.
            </p>

            </div>

            <img src={doctor} alt="Doutora" />
          </div>

        </div>


      </div>
    </>
  )
}

export default Cuidados