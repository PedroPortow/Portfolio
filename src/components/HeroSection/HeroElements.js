import { Link } from 'react-scroll';
import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#FAF8FF' : '#0f0b1f')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: flex ;
    flex-wrap: wrap;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items:center ;
`

export const FogueteText = styled.p`
    color: #365963 ;
    text-align: center ;
    margin-top: 2px;
`

export const InfoRow = styled.div`
    display: flex;
    justify-content: center ;
    align-items: center;
    flex-wrap: wrap;

`

export const Column1 = styled.div`

`

export const Column2 = styled.div`

    @media screen and (max-width: 768px){
    
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #a791ff;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`
export const Img = styled.img`
    width: 100%;
    margin: 0 0 0px 0 ;
    padding-right: 0;
`


export const HeroInvite = styled(Link)`
   
    background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    border-radius: 8px;
    border-style: none;

    color: #FFFFFF;
    cursor: pointer;
   
    font-size: 16px;
    font-weight: 500;
    height: 3rem;
 
    padding: 1rem;
    
    text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
    transition: all .5s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    
   

    &:hover {
    box-shadow: rgba(80, 63, 205, 0.1) 0 1px 30px;
    transition-duration: .1s;
    }

`
