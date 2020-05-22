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

          <div>

            <p className="initDescriptionCuidados" style={{marginBottom: 25}} >
              A transmissão costuma ocorrer através do contato das mucosas com o ar contaminado com secreções e/ou por contato pessoal, como:
          </p>

            <ul className="listCuidados" >
              <li>Beijo, abraço e aperto de mão</li>
              <li>Contato com objetos e superfícies contaminadas</li>
              <li>Gotículas de saliva</li>
              <li>Espirro</li>
              <li>Catarro/Corisa</li>
              <li>Tosse</li>
            </ul>
          </div>

          <img src={transmissao} style={{height:500, width:600}} alt="Duas pessoas se cumprimentando com as mãos, com uma imagem ampliada mostrando os micróbios passando de uma pessoa pra outra." />
        </div>


        <div className="containerContentCuidados" >
          <img src={distancing} alt="Duas pessoas com máscara mantendo uma distância segura" />
          <div className="atentionCuidados" >
          <p>
              <strong>Atenção: </strong>
              A transmissão pode ocorrer mesmo se a pessoa não apresentar sintomas, então mantenha o distanciamento social.
            </p>
          </div>
        </div>



      


          <h1 className="TitleCuidados" >Como se prevenir?</h1>


        <div>


          <div className="containerContentCuidados" >

            <img src={washingHands} alt="Uma pessoa lavando as mãos" />

            <p className="descriptionCuidados">
              Lave as mãos frequentemente com a água e sabão por pelo menos 20 segundos. Caso não seja possível, use antisséptico para mãos à base de álcool em gel 70%.
            </p>

          </div>



          <div className="containerContentCuidados" >
          
          <div className="descriptionCuidados" >
            <p>
              Ao tossir ou espirrar, cubra o nariz e a boca com o <strong style={{color:"#E91E63"}} >braço </strong> ou um <strong style={{color:"#E91E63"}} >lenço</strong>, depois jogue o lenço no lixo e lave bem as mãos.
            </p>
          </div>

            <img src={cough} alt="Tossir" />


          </div>


          <div className="containerContentCuidados" >

            <img src={socialDistancing} alt="Distância" />

          <p className="descriptionCuidados">
              Mesmo em ambientes abertos, recomenda-se a distância mínima de dois metros entre pessoas. Evite apertos de mão, abraços e beijos.
            </p>

          </div>

          <div className="containerContentCuidados" >

            <p className="descriptionCuidados">
              Se possível, fique em casa. Se for necessário sair, use máscara.
            </p>

            <img src={stayHome} alt="Ficar em casa" />

          </div>


          <div className="containerContentCuidados" >

            <img src={fightingCorona} alt="Ficar em casa" />

          <p className="descriptionCuidados">
              Mantenha os ambientes bem ventilados e limpos.
            </p>

          </div>

          <div className="containerContentCuidados" >

            <p className="descriptionCuidados">
              Evite tocar os olhos, boca ou nariz antes de higienizar as mãos e não compartilhe objetos pessoais.
            </p>

            <img src={handWashing} alt="Lavar as mãos" />

          </div>


        </div>

      

        <h1 className="TitleCuidados">Sintomas</h1>

        <div>


          <div className="containerContentCuidados" >
          <p className="descriptionCuidados">
              O Corona vírus afeta diferentes pessoas de diferentes maneiras.
              A maioria das pessoas infectadas apresentarão sintomas leves a moderados
              da doença e não precisarão ser hospitalizadas.
              </p>

            <img src={doente} alt="Doente" />
          </div>

          <div className="containerContentCuidados" >

            <img src={febre} alt="Febre" />
            <div>
            <p className="descriptionCuidados" style={{marginBottom:15}} >Alguns sintomas são: </p>          
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


        </div>


          <h1 className="TitleCuidados" >O que fazer em casos de suspeitas?</h1>

        <div>


          <div className="containerContentCuidados" >

            <div className="questionsCuidados" >
                  <p>
                    Estou com os sintomas, mas não viajei e nem tive acesso a pessoas que voltaram de viagem recentemente. O que fazer?
                </p>
                  <p className="answersCuidados" >
                    Procure a Unidade Básica de Saúde (UBS) mais próxima.
                </p>
                  <p>
                    Estou com sintomas e tive acesso a pessoas que voltaram de viagem internacional. O que fazer?
                </p>
                  <p className="answersCuidados" >
                    Entre em contato com 190, 193 ou 199 e informe sua situação. Esses números também podem ser usados para tirar qualquer dúvida sobre a COVID-19.
                </p>

            </div>

            <img src={doctor} style={{height:550, width:550 }} alt="Doutora" />
          </div>

        </div>


      </div>
    </>
  )
}

export default Cuidados