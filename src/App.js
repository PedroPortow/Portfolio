import './App.css';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { homeObjOne, homeObjTwo } from './components/InfoSection/Data';
import Services from './components/Services';
import { heroSection } from './components/HeroSection/Data';
import Contactt from './components/Contactt';
// import Mailer from './components/emailForm';
import React, {useState} from 'react';
// import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';



function App(props) {
  const [ isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
    
      <HeroSection {...heroSection}  />
      <InfoSection {...homeObjOne}  />
      <Services />
      <InfoSection {...homeObjTwo}  />
      <Contactt  />
      <Footer />
       
      
 
    </>
  );
}

export default App;
