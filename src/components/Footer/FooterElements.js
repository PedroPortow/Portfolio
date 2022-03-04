import styled from "styled-components";


export const FooterContainer = styled.footer`
    background-color: #0D091B;
`

export const FooterWrap = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`


export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`
export const SocialMediWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;


    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`
export const SocialLogo = styled.a`
    color: #fff;
    justify-self: start ;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: #fff;

`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`

