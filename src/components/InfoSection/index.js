import React from 'react'
import { Button } from '../ButtonElement'
import { Column2,ImgWrap } from './InfoElements'
import Anim2 from '../Animations/animation2/Animation2'


import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
} from './InfoElements'
import Anim3 from '../Animations/animation3/Animation3'


const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, alt, primary, dark, dark2, AnimationChoice, ButtonChoice }, props) => {

function buttonInfoSection(){
    return(
    <BtnWrap>
        <Button to="home"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
        primary={primary ? 1 : 0}
        dark={dark ? 1 : 0}
        dark2={dark2 ? 1 : 0}
        >{buttonLabel}</Button>
    </BtnWrap>
    )
}

function buttonInfoSection2(){
    return(
        <BtnWrap>
        <Button to="home"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
        primary={primary ? 1 : 0}
        dark={dark ? 1 : 0}
        dark2={dark2 ? 1 : 0}
        >{buttonLabel}</Button>
    </BtnWrap>
    )
}

    return (
    <>

        <InfoContainer lightBg={lightBg} id={id} >
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                {ButtonChoice ? buttonInfoSection()  : buttonInfoSection2()}
                            </BtnWrap>
                         
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                       
                            {AnimationChoice ? <Anim2 /> : <Anim3 />}
                      
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
      
    </>
  )
}

export default InfoSection