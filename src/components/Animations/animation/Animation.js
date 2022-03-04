import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';
// import { animateScroll as scroll } from 'react-scroll';



function Animation() {
    const container = useRef(null)

    function animationOnClick(){
     lottie.play();
    //  setTimeout(() => {scroll.scrollTo(900, {behavior: 'smooth'})}, 4000)

    }

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,

      animationData: require('./animation.json')
    })
  }, [])

  return (
    <>
      <div className="container" ref={container}  onClick={animationOnClick}></div>
    </>
  )
}

export default Animation