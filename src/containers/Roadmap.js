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
   [{title:"1. MINT PHASE", description:"Official Launch of the NFT on Polygon, Availiable to Mint", image: images.rm1}],
   [{title:"2. COMMUNITY", description:"Official Launch of Discord Community for supportes of the project", image: images.rm2}],
   [{title:"3. TREASURY", description:"Implementation of the TREASURY DAO to allocate the funds according to the community interests ", image: images.rm3}],
   [{title:"4. DEVELOPMENT", description:"Development of the local infrastructure with the specific amount raised to the lodge by the selling phase of the project", image: images.rm4}],
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