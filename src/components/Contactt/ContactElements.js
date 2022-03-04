import styled from "styled-components";
import { Link as LinkS } from "react-scroll";


export const ServicesContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:#0D091B;

    @media screen and (max-width: 768px){
        height: 800px;
    }

    @media screen and (max-width: 480px){
        height: 1000px;
    }
`

export const ServicesWrapper = styled.div`
   display: flex;
   color: #fff;
   /* border: 2px paleturquoise solid; */
   width: 100%;
   align-items: center;
   justify-content: center;
  cursor: pointer;
    

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
    border-bottom: solid 1px #fff;
    transform    : scaleX(0);
    transition   : transform 300ms ease-in-out;
}

    &:hover:after {
    transform: scaleX(1);
}

`
export const LinkInvite = styled(LinkS)`
    color: purple;
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

export const Button = styled.button`
    border-radius: 10px;
    margin-top: 20px;
    background: blue;
    white-space : nowrap ;
    padding: 12px 30px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #4f73ff ;
    }
`
