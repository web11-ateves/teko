import React from 'react';
import { images } from '../assets';
import TraitCard from '../cards/TraitCard';

const styles = {
   container1: `space-y-4 py-[70px] flex flex-col justify-center bg-[#edf2f8]   `,
   container2: `space-y-4 py-[50px] flex flex-col justify-center bg-[#edf2f8] text-black  `,
   header: `font-[minitel]  text-[25px] text-center px-[20px] leading-[50px] md:text-[30px]`,
   image: `max-w-[375px] md:max-w-[600px]`,
   imagecontainer: `flex justify-center`,
   description: `font-[minitel] text-center text-[#7c8591] px-[35px] max-w-[830px] mx-auto `,
   purple: `text-[#71be8a]`,
   container3:`py-10 space-y-[50px]`
}

let traitsdata = [
   [["HAT"],[{name:"Golden Hat", chance:"3%", img: images.t1 }, {name:"Hindu", chance:"5%", img: images.t5 }, {name:"Naruto", chance:"7%", img: images.t8 }, {name:"Bald", chance:"10%", img: images.t36 }, {name:"Scientist", chance:"10%", img: images.t9 }, {name:"Chad", chance:"15%", img: images.t3 }, {name:"Monkey", chance:"15%", img: images.t4 }, {name:"Mushroom", chance:"15%", img: images.t6}, {name:"Neo", chance:"15%", img: images.t10 } ]],
   [["EYE"],[{name:"Enlightened", chance:"4%", img: images.t15 }, {name:"God of War", chance:"16%", img: images.t14 }, {name:"Morpheus", chance:"16%", img: images.t17 }, {name:"Neo", chance:"16%", img: images.t16 }, {name:"EyeBrown 1", chance:"16%", img: images.t18 }, {name:"EyeBrown 2", chance:"16%", img: images.t19 }, {name:"Clean", chance:"16%", img: images.t38 }]],
   [["PC COLOR"],[{name:"Space Grey", chance:"33%", img: images.t37 }, {name:"Grey", chance:"33%", img: images.t26 }, {name:"Rose", chance:"33%", img: images.t25 }]],
   [["PC BRAND"],[{name:"AlienWarez", chance:"10%", img: images.t11 }, {name:"Windowsz", chance:"40%", img: images.t12 }, {name:"Applez", chance:"40%", img: images.t13 }]],
   [["SKIN"],[{name:"Alien", chance:"10%", img: images.t27 }, {name:"Asian", chance:"30%", img: images.t30 }, {name:"Black", chance:"30%", img: images.t28 }, {name:"Black", chance:"30%", img: images.t29 }]],
   [["BACKGROUND"],[{name:"Green", chance:"25%", img: images.t31 }, {name:"Blue", chance:"25%", img: images.t32 }, {name:"Rose", chance:"25%", img: images.t34 }, {name:"Purple33", chance:"25%", img: images.t33 }]],
]
 
const Traits = () => {
  return (
     <>
     <div className={styles.container1} ID="TRAITS" >
         <div className={styles.header}>HOW IT <span className={styles.purple}>WORKS</span></div>
          .
         <p className={styles.description}> The purchase of your NFT goes to <span className={styles.purple}>finance specific expansion and improvement projects</span> at Refugio da Ilha. </p>
         <p className={styles.description}>Community members earn $ONCA tokens that can be <span className={styles.purple}>redeemed for discounts</span> and a chance to win free trips to go see for yourself the work being done at the property.</p>
         <p className={styles.description}>This way we combine entertainment and conservation, engagement and monitoring <span className={styles.purple}>enjoying the wonders of our natural world</span> while helping to protect it.
         </p>
     </div>

      <div className={styles.container3} >
      {traitsdata.map(trait=>(
          <div>
            <TraitCard
            traitname = {trait[0][0]}
            traititems = {trait[1]}
            />
          </div>
       ))}
      </div>

     </>
  )
}

export default Traits