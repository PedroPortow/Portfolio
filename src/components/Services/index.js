import React from 'react'
// import Logo from '../../images/logoComp.png'
import {animateScroll as scroll} from 'react-scroll'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { DiGithubAlt} from 'react-icons/di'
import {BiRocket} from 'react-icons/bi'
import logoFood from '../../images/FoodLogo.png'
import logoTech from '../../images/LogoCerta.png'
import logoChat from '../../images/adad.png'

import { ServicesCardTextWrapper, ServicesContainer, ServicesCardH1, ServicesWrapper,ServicesH1, ServicesCard, ServicesH2, LinkInvite, ServicesSubtitle,  ServicesContentWrapper, Button, ServicesCardP} from './ServicesElements'

function Services() {

    function scrollBottom(){
        scroll.scrollToBottom();
    }


  return (
    <ServicesContainer id="projetos">
        <ServicesH1>Projetos</ServicesH1>
        <ServicesSubtitle>Alguns projetos que trabalhei recentemente. Se interessou? <LinkInvite onClick={scrollBottom}>Entrar em contato</LinkInvite></ServicesSubtitle>
        <ServicesWrapper>
           <ServicesCard>

               <img src={logoTech} style={{width: '100%', height: '300px', border: 'none', borderTopRightRadius:'5px', borderTopLeftRadius:'5px'}} alt=''/>
               <ServicesCardTextWrapper>
                   <ServicesCardH1>TechBank</ServicesCardH1>
                   <ServicesCardP>Protótipo de website para Banco Digital fictício, utilizando ReactJS e Styled Components</ServicesCardP>
               </ServicesCardTextWrapper>
               <ServicesContentWrapper>
               
                   <Button type="button" >{<BiRocket/>}Link</Button>
                   <Button type="button" >{<DiGithubAlt />}Código</Button>
               </ServicesContentWrapper>
           </ServicesCard>
           <ServicesCard>

                <img src={logoFood} style={{width: '100%', height: '300px', border: 'none', borderTopRightRadius:'5px', borderTopLeftRadius:'5px'}} alt=''/>
                    <ServicesCardTextWrapper>
                        <ServicesCardH1>ComidaDelivey</ServicesCardH1>
                        <ServicesCardP>Protótipo de website para Delivery de Comida<br />Conta com Carrinho Funcional</ServicesCardP>
                    </ServicesCardTextWrapper>
                    <ServicesContentWrapper>

                        <Button type="button" >{<BiRocket/>}Link</Button>
                        <Button type="button" >{<DiGithubAlt />}Código</Button>
                    </ServicesContentWrapper>
                    </ServicesCard>
                    <ServicesCard>

                        <img src={logoChat} style={{width: '100%', height: '300px', border: 'none', borderTopRightRadius:'5px', borderTopLeftRadius:'5px'}} alt=''/>
                        <ServicesCardTextWrapper>
                            <ServicesCardH1>ChatApp</ServicesCardH1>
                            <ServicesCardP>Online chat utilizando sua conta do GitHub<br/>Parte da Imersão Alura React/NextJS</ServicesCardP>
                            
                        </ServicesCardTextWrapper>
                        <ServicesContentWrapper>

                            <Button type="button" >{<BiRocket/>}Link</Button>
                            <Button type="button" >{<DiGithubAlt />}Código</Button>
                        </ServicesContentWrapper>
                    </ServicesCard>
            
        </ServicesWrapper>
        
        <ServicesH2>{<DiGithubAlt style={{marginRight: '5px'}}/>}Meus repositórios no GitHub {<AiOutlineArrowRight />}</ServicesH2>
    </ServicesContainer>
  )
}

export default Services