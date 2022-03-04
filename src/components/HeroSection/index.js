import React from 'react'
import { Column2, ImgWrap } from './HeroElements'
import Anim from '../Animations/animation/Animation'
import {Fade} from 'react-reveal'

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    HeroInvite,
    FogueteText
} from './HeroElements'
import { AiOutlineArrowDown } from 'react-icons/ai'

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id} >
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                        <Fade top>
                            <TopLine>Olá, me chamo</TopLine>
                        </Fade>
                            <Heading lightText={lightText}>Pedro Porto</Heading>
                        <Fade bottom>
                            <Subtitle darkText={darkText}>Sou um estudante e desenvoledor web</Subtitle>
                        </Fade>
                        <Fade bottom>
                            <HeroInvite to="sobre"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Quer conhecer um pouco mais do meu trabalho? {<AiOutlineArrowDown />}</HeroInvite>
                        </Fade>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                        <Fade top>
                            <Anim  />
                            
                            <FogueteText>*aperte para decolar*</FogueteText>
                        </Fade>
                        </ImgWrap>
                        
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection