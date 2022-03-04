import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';



function Anim2() {
    const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,

      animationData: require('../animation2/animation2.json')
    })
  }, [])

  return (
    <>
      <div className="container" ref={container}></div>
    </>
  )
}

export default Anim2;