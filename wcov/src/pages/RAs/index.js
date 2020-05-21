import React from 'react'
import Header from '../../components/Header'
import './style.css'

import Medica from '../../assets/Atendimento/health_.svg'

var regiao = 0

function RAs (props){

    regiao = props.match.params.id

    if (regiao == 1)
        return (
        <>
            <Header/>
            <div className="RAcontainer"> 
                <h1 className="RAtitle" >Águas Claras/Areal</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>
                <p className = "RAtext"> UBS 1 - Endereço: QS 05 LOTE 24 AV. AREAL - PROXIMO UNIV CATOLI</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 22h de segunda a sexta-feira</p>
                <p className = "RAtext2"> Abrangência: QS 5; QS 9; QS 11(divide com a UBS 2 Águas Claras) ; QS 7 (Divide com a UBS 2 Aguas Claras) E SHA Conjunto 06 Condominio Jk. </p>

                <p className = "RAtext"> UBS 2 - Endereço: QS 06 AREAL</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2"> Abrangência: QS 06; QS 08; QS 11(divide com a UBS 1 Águas Claras) ; QS 7 (DIVIDE COM A UBS1 AGUAS CLARAS)</p>
                

            </div>
        </>
        )


    if (regiao == 2)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Asa Norte</h1> 
            
                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: SGAN 905 modulo D</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 19h de segunda a sexta-feira e sábado das 7h às 12h </p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 2 - Endereço: EQN 114/115 AE</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 22h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 3 - Enderço: RUA PIAU ACAMPAMENTO PACHECO FERNANDES </p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 19h de segunda a sexta-feira e sábado das 7h às 12h</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 5 - Endereço: Vila Weslian Roriz Área especial 01</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>
            </div>
        </>
        )

    if (regiao == 3)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Asa Sul</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: SGAS 612 - Lotes 38/39 CEP: 70200-700</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 19h de segunda a sexta-feira e sábado das 7h às 12h</p>
                <p className = "RAtext2">  </p>
            </div>
        </>
        )

    if (regiao == 4)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Brazlândia</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: EQ 6/8 SETOR NORTE ÁREA ESPECIAL 3</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 18h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 2 - Endereço: QD 45 AE 01 - VILA SÃO JOSÉ</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 18h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 3 - Endereço: QUADRA 3 LOTE 6 AREA ESPECIAL Nº 02 SETOR VEREDAS</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 4 - Endereço: QUADRA 01 AREA ESPECIAL 1 SETOR VEREDAS II </p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 5 - Endereço: RESERVA A DF 240 DF 008 DF 445 KM 4 VINCENAL AE 1</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 6 - Endereço: FAZENDA ALMECEGAS BR 180 DF 205 KM 05 - ALMECEGAS</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 7 - Endereço: QUADRA 15 LOTE 02 LJ 01 AREA ESPECIAL 02 INCRA 08</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 8 - Endereço: RADIOBRAS CHACARA ST. HELENA CAPELA RURAL OESTE</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 9 - Endereço: INCRA 8 CAAG Q 15</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>
            </div>
        </>
        )

    if (regiao == 5)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Candangolândia</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: AE 05/07-Área Especial </p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 19h de segunda a sexta-feira e sábado das 7h às 12h</p>
                <p className = "RAtext2">  </p>
            </div>
        </>
        )

    if (regiao == 6)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Ceilândia</h1> 
                <h2 className="RAsubtitle" >UPA 24h</h2>
                <p className = "RAtext"> Endereço: QNN 27, Área Especial D – Ceilândia Norte </p>
                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>
            </div>
            
        </>
        )

    if (regiao == 7)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Cruzeiro</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: SHCE/SUL - Quadra 611 Lote  01 - Cruzeiro Novo</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 19h de segunda a sexta-feira e sábado das 7h às 12h</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 2 - Endereço: Setor Escolar Lote 04 - Cruzeiro Velho</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 19h de segunda a sexta-feira e sábado das 7h às 12h</p>
                <p className = "RAtext2">  </p>
            </div>
        </>
        )

    if (regiao == 8)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Fercal</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: DF 150 KM 12 Rua 9 Lote 02, Fercal Oeste, Engenho Velho</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 2 - Endereço: Rodovia DF 205 Oeste Km 13 Núcleo Rural 13, Fercal, Catingueiro</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

            </div>
        </>
        )

    if (regiao == 9)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Gama</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>
            </div>
        </>
        )

    if (regiao == 10)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Guará</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: QE 06, lote C, AE S/N-Guará I</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 18h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 2 - Endereço: QE 23, lote C-AE S/N Guará II</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 22h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 3 - Endereço: QE 38 Área Especial-Guará II</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 18h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 4 - Endereço: QELC-EQ 2/3-Conj. Lúcio Costa</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 5 - Endereço: QE 38 Área Especial-Guará II</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 18h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

            </div>
        </>
        )

    if (regiao == 11)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Itapoã</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: QD 378 AE DEL LAGO - ITAPOÃ PROX. ESCOLA ZILDA ARNS</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 22h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 2 - Endereço: QD 61 AE DEL  LAGO - ITAPOÃ - PROX. QUADRA POLIESPORTIVA</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 3 - Endereço: QUADRA 378, CONJUNTO A, LOTE 4 - CEP 71593620</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>
            </div>
        </>
        )
        
    if (regiao == 12)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Lago Norte</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: SHIN QI 03 Área Especial</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 19h de segunda a sexta-feira e sábado das 7h às 12h</p>
                <p className = "RAtext2">  </p>
            </div>
        </>
        )

    if (regiao == 13)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Núcleo Bandeirante</h1> 
                <h2 className="RAsubtitle" >UPA 24h</h2>
                <p className = "RAtext"> Endereço: DF-075, KM 180, Área Especial – EPNB </p>
                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: 3ª Avenida-Área Especial nº03</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 19h de segunda a sexta-feira e sábado das 7h às 12h </p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 2 - Endereço: R1 Rua dos Engenheiros nº 2  (Antiga Biblioteca Metropolitana)</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>
            </div>
        </>
        )

    if (regiao == 14)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Paranoá</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>
            </div>
        </>
        )

    if (regiao == 15)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Park Way</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: Área Especial nº 01-Vargem Bonita - EQ 01NB - SIAB 429</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 18h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

            </div>
        </>
        )

    if (regiao == 16)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Planaltina</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>
            </div>
        </>
        )

    if (regiao == 17)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Reacanto das Emas</h1> 
                <h2 className="RAsubtitle" >UPA 24h</h2>
                <p className = "RAtext"> Endereço: quadra 400/600 – Área Especial </p>
                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>
            </div>
        </>
        )

    if (regiao == 18)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Riacho Fundo I</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: QN 07 AREA ESPECIAL 09</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 22h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 2 - Endereço: QN 01 AREA ESPECIAL 01</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 18h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>
            </div>
        </>
        )

    if (regiao == 19)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Riacho Fundo II</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: QC 06 Conj. 16-Área Especial-RF II</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 22h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 2 - Endereço: QC 01 Conj. 10, lote 01-RF II</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>
                <p className = "RAtext"> UBS 3 - Endereço: QN 07 A/B lotes 1/2 AE-RF II</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 18h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 4 - Endereço: Área Especial 01-CAUB </p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 5 - Endereço: CAUB II, lote 13</p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

            </div>
        </>
        )

    if (regiao == 20)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Samambaia</h1> 
                <h2 className="RAsubtitle" >UPA 24h</h2>
                <p className = "RAtext"> Endereço: QS 107, conj. 4 – Área Especial </p>
                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>
            </div>
        </>
        )

    if (regiao == 21)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Santa Maria</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>
            </div>
        </>
        )

    if (regiao == 22)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" > São Sebastião</h1> 
                <h2 className="RAsubtitle" >UPA 24h</h2>
                <p className = "RAtext"> Endereço: quadra 102, conj. 1 </p>
                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>
            </div>
        </>
        )

    if (regiao == 23)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >SCIA/Estrutural</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: AREA ESPECIAL 02 AVENIDA CENTRAL CENTRO DE SAUDE </p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 22h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

                <p className = "RAtext"> UBS 2 - Endereço: Vila Varjão Quadra 05 conj. A lt. 17 - Área Especial - Varjão do Torto </p>
                <p className = "RAtext"> Horário de Funcionamento: AE 19 SETOR CENTRAL ESTRUTURAL</p>
                <p className = "RAtext2">  </p>
            </div>
        </>
        )

    if (regiao == 24)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >SIA</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>
            </div>
        </>
        )
        
    if (regiao == 25)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Sobradinho I</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>
            </div>
        </>
        )

    if (regiao == 26)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Sobradinho II</h1> 
                <h2 className="RAsubtitle" >UPA 24h</h2>
                <p className = "RAtext"> Endereço: DF-420, em frente à AR-13, próximo ao COER </p>
                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>
            </div>
        </>
        )

    if (regiao == 27)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Taguatinga</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>
            </div>
        </>
        )

    if (regiao == 28)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Varjão</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: Vila Varjão Quadra 05 conj. A lt. 17 - Área Especial - Varjão do Torto </p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 17h de segunda a sexta-feira</p>
                <p className = "RAtext2">  </p>

            </div>
        </>
        )

    if (regiao == 29)
        return (
        <>
            <Header/>
            <div class ="RAcontainer"> 
                <h1 className="RAtitle" >Vicente Pires</h1> 

                <h2 className="RAsubtitle" >Unidade Básica de Saúde</h2>

                <p className = "RAtext"> UBS 1 - Endereço: RUA 4C CHAARA 12 - COLONIA AGRICOLA SAMAMBAIA </p>
                <p className = "RAtext"> Horário de Funcionamento: das 7h às 19h de segunda a sexta-feira e sábado das 7h às 12h</p>
                <p className = "RAtext2">  </p>

            </div>
        </>
        )
    
}

export default RAs