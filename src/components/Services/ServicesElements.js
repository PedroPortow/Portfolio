import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import TechLogo from '../../images/LogoCerta.png'


export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:#0D091B;
    padding: 90px 0;    

    @media screen and (max-width: 1264px){
        height: 1400px;
        
    }

    @media screen and (max-width: 844px){
        height: 1600px;
    }
`

export const ServicesWrapper = styled.div`
    width: 100%;
 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    padding-bottom: 50px;
   
    @media screen and (max-width: 1000px){
        
    }

    @media screen and (max-width: 768px){
       
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    height: 100%;
    max-width: 400px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    margin: 10px;
 
    &:hover{
        transform: scale(1.02);
        transition: all 0.s ease-in-out;
        cursor: pointer;
       
    }

    @media screen and (max-width: 1264px){
        height: 400px;
    }
    
`

export const ServicesIcon =  styled.img`
    background-color: red;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
   

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
 
    color: #fff;
    

    &:after {
    display      : block;
    content      : '';
    border-bottom: solid 1px purple;
    transform    : scaleX(0);
    transition   : transform 300ms ease-in-out;
}

    &:hover:after {
    transform: scaleX(1);
}

`
export const LinkInvite = styled(LinkS)`
    color:  #a791ff;
    font-weight: 500;
   cursor: pointer;


`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const ServicesSubtitle = styled.p`
    font-size: 1rem;
    color: white;
    margin-bottom: 50px;
    margin-top: 10px;
    font-weight: 300;


`

export const ServicesImg = styled.img`
  
    width: 100%;
    height: 300px;
    background-image: url(${TechLogo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    
`

export const ServicesContentWrapper = styled.div`
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    padding: 2px;
    
`


export const Button = styled.button`
    border-radius: 10px;
  
    background: blue;
    white-space : nowrap ;
    height: 50px;
    margin: 5px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;

    align-items: center;
    transition: all 0.2s ease-in-out;
    width: 100px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #4f73ff ;
    }
`
export const ServicesCardTextWrapper = styled.div`
    /* border: 2px solid red; */
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 0px 50px;
    font-size: 1rem;

    @media screen and (max-width: 480px){
        font-size: 0.2rem;
    } 

`

export const ServicesCardH1 = styled.h1`
    color: black;
    font-size: 1.8rem;

  
    
`

export const ServicesCardP = styled.p`
    text-align: center;
    font-size: 0.8rem;

`