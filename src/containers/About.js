import React from 'react'
import { images } from '../assets';

const styles ={
   container: `space-y-4 flex flex-col justify-center pt-[30px] pb-[70px]`,
   about1: `font-[minitel]  text-[20px] text-center px-[20px] leading-[50px] md:text-[30px]`,
   rev: `font-[minitel] text-[25px] text-[#71be8a] md:text-[30px]`,
   about2: ` font-[minitel] text-[15px] max-w-[600px] mx-auto text-center capitalize px-[40px] text-[#7c8591] `,
}

const About = () => {
  return (
     <>
      <div className={styles.container} id="ABOUT">
         <p className={styles.about1} >
         JOIN THE MOVEMENT<br/> 
         BECOME A <span className={styles.rev}>REGEN PARTNER</span><br/>
         AT <span className={styles.rev}>REFUGIO DA ILHA</span>
         </p>
         <div className={styles.about2}>
         We are 500 conservation and regeneration enthusiasts, impact driven wildlife lovers coming together from across the world to support Refugio da Ilha, their work, and the local community         </div>
      </div>
     </>
    
  )
}

export default About