import React, {useState, useEffect} from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'


function Navbar({ toggle }) {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = function(){
        scroll.scrollToTop();
    }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="" onClick={toggleHome}>PORTO</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="sobre"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Sobre</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projetos"  //aqui mudou em
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-120}>Projetos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="conhecimentos" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Conhecimentos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contato" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-200}>Contato</NavLinks>
                    </NavItem>
                </NavMenu>
               
               
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar