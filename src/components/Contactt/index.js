import React, {useState} from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import Mailer from '../emailForm';
import { ServicesContainer, ServicesH1, ServicesWrapper,  LinkInvite, ServicesSubtitle, Button } from './ContactElements'

function Services() {
  const [modalIsShown, setModalIsShown] = useState(false);
  
  const showModalHandler = () => {
    setModalIsShown(true);
  }

  const hideModalHandler = () => {
    setModalIsShown(false);
  }

    function Icon(){
      return(
        <IconContext.Provider value={{color: 'White', size: '50px'}}>
        <>
          <AiFillGithub href='www.github.com/PedroPortow' />
          <AiFillInstagram />
          <AiFillTwitterCircle />
          <AiFillLinkedin />
        </>
        </IconContext.Provider>
      );
    }

  return (
    <ServicesContainer id="contato">
        <ServicesH1>Contato</ServicesH1>
        <ServicesSubtitle>Minhas redes sociais para contato, caso prefira<LinkInvite onClick={showModalHandler}> enviar um E-mail</LinkInvite></ServicesSubtitle>
        <ServicesWrapper>
          {modalIsShown && <Mailer onCloseModal={hideModalHandler} hideModalHandler={hideModalHandler} /> }
          <Icon />
          
        </ServicesWrapper>
        <Button type="button" onClick={showModalHandler} >Enviar E-mail</Button>
    </ServicesContainer>
  )
}

export default Services