import React from 'react'
import { images } from '../assets';
import RoadmapCard from '../cards/RoadmapCard';

const styles = {
   container: `py-[70px] space-y-4  flex flex-col justify-center bg-[#edf2f8]`,
   header: `font-[minitel] text-[25px] text-center px-[20px] leading-[50px] md:text-[30px]`,
   cardcontainer: `py-[25px] mx-auto md:max-w-[1800px] md:flex flex-row flex-wrap   max-w-screen justify-center `,
   purple: `text-[#71be8a]`,
}

const roadmapdata = [
   [{title:"1. MINT PHASE", description:"Official Launch of the Refugio da Ilha NFT on Polygon, Availiable to Mint", image: images.rm1}],
   [{title:"2. BENEFITS", description:"Members get immediate access to exclusive content, stream of ERC20 point-token and their redemption", image: images.rm2}],
   [{title:"3. TREASURY", description:"Implementation of the TREASURY pseudo-DAO and governance for yearly allocations and validation", image: images.rm3}],
   [{title:"4. DEVELOPMENT", description:"Deployment of funds to Refugio to improve conservation and client experience", image: images.rm4}],
]

const Roadmap = () => {
  return (
     <>
     <div className={styles.container} id="ROADMAP">
         <div className={styles.header}>ROAD<span className={styles.purple}>MAP</span></div>
         <div className={styles.cardcontainer} >
            {roadmapdata.map(cardinfo=>(
               <div>
                  <RoadmapCard
                  cardinfo={cardinfo[0]}
                  />
               </div>
            ))}
         </div>
     </div>
    </>
  )
}

export default Roadmap
