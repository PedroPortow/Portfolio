import React from 'react'
import {FooterContainer, FooterWrap,  SocialMedia, SocialMediWrap, SocialLogo, WebsiteRights, } from './FooterElements'

import {animateScroll as scroll} from 'react-scroll'

function Footer() {
    const toggleHome = function(){
        scroll.scrollToTop();
    }
  return (
    <FooterContainer>
        <FooterWrap>
           
             <SocialMedia>
                 <SocialMediWrap>
                     <SocialLogo to="/" onClick={toggleHome}>PORTO</SocialLogo>
                     <WebsiteRights>Porto © {new Date().getFullYear()} Todos direitos reservados.</WebsiteRights>
                     
                 </SocialMediWrap>
             </SocialMedia>
        </FooterWrap>


    </FooterContainer>
  )
}

export default Footer