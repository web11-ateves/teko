import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../assets';

const styles = {
   wrapper: `z-[1] shadow-sm fixed  px-8 h-[70px]  w-screen flex justify-between items-center bg-[#71be8a] text-black overflow:hidden `,
   logo: `flex w-1/8 items-center justify-start font-['pix'] text-[2rem] text-[#78818e]  `,
   logospan: `text-[#71be8a]`,
   menu: `hidden md:flex block `,
   menuitem: `px-4 py-2 m-1 flex items-center text-lg font-['pix'] text-[1.2rem] cursor-pointer rounded-3xl hover:text-[#f5e6bd] text-[white]`,
   sidebaritems: `fixed text-center w-full h-full right-0 top-0  text-[2rem] bg-[#ffffff] font-['pix'] text-[#78818e]`,
   sidebaritemhover: `hover:text-[#71be8a]`,
   sidebar: ` visible md:hidden flex  `,
   oplogo: `max-w-[35px] mr-[35px] `,
   oplogo2: `max-w-[35px] mr-[35px] hidden md:flex block  `,
   menubutton: `hover:text-[#71be8a]`,
   imagelogo: `w-[90px]`,
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={styles.wrapper}>
       <div className={styles.logo}>
         <img className={styles.imagelogo} src={images.hl}/>
       </div>
       <ul className={styles.menu}>
         {['ABOUT','HOW IT WORKS', 'ROADMAP', 'MEMBER AREA', 'FAQ' ].map((item)=> (
            <li className={styles.menuitem} key={`link-${item}`}>
               <div />
               <a href={`#${item}`}>{item}</a>
            </li>

         ))}
      </ul>
      <a href="https://testnets.opensea.io/collection/refugio-da-ilha-regen-partners"><img className={styles.oplogo2} src={images.oplogo}/></a>
      <div className={styles.sidebar}>
         <div className={styles.oplogo}>
         <a href="https://testnets.opensea.io/collection/refugio-da-ilha-regen-partners"><img  src={images.oplogo}/></a>
      </div>      
      <HiMenuAlt4  className={styles.menubutton} size={35} onClick={() => setToggle(true)} />  
      {toggle && (      
         <div className={styles.sidebarbg}>  
            <ul className={styles.sidebaritems}>
               <motion.div
               whileInView={{ x: [300, 0] }}
               transition={{ duration: 0.85, ease: 'easeOut' }}
               >
                  <HiX size={35} color='#71be8a' onClick={() => setToggle(false)} />       
                  {['ABOUT','TRAITS', 'ROADMAP', 'TEAM', 'FAQ'].map((item) => (
                  <li className={styles.sidebaritemhover} key={item}>
                     <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                     </a>
                  </li>
                  ))}
               </motion.div>
            </ul>
         </div>
         )}
      </div>

   


       


    </div>
  )
}

export default Navbar