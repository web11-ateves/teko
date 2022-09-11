import React from 'react'
import { images } from '../assets'
import TeamCard from '../cards/TeamCard';

const styles = {
   container: `space-y-4 pt-[70px] pb-[30px] flex flex-col justify-center bg-[#ffffff]  `,
   container2: `space-y-4 flex flex-col md:flex-row justify-center bg-[#ffffff] pb-[70px]`,
   cardcontainer: `flex flex-col justify-center bg-[#ffffff] md:flex-row `,
   header: `font-[minitel] text-[25px] text-center px-[20px] md:text-[30px]`,
   purple: `text-[#71be8a]`,
   socialiconscontainer:``,
}

const teamdata = [
   [{title:"VICTOR COLLASANTA", description:"Web3 Developer working on making the project smart-contracts", image: images.u1, linkedin:"https://www.linkedin.com/in/victor-collasanta-a4b9a913b/", twitter:'https://twitter.com/0xKabutoDev', github:'https://github.com/collasanta',}],
   [{title:"ANDRE TEVES", description:"Developer that focus on building the project infrastructure", image: images.u2, linkedin:"#team", twitter:'#team', github:'#team',}],
   [{title:"DAVI DREADER", description:"Product Manager working on building amazing product solutions to make tourism more impactable", image: images.u3, linkedin:"#team", twitter:'#team', github:'#team',}],
   [{title:"RENAN SANTOS", description:"Data anaylist working to bring insights based on data to the project", image: images.u4, linkedin:"#team", twitter:'#team', github:'#team',}],
   [{title:"DIEGO NFT", description:"NFT Specialist helping the project with markting strategies", image: images.u5, linkedin:"#team", twitter:'#team', github:'#team',}],
]

const Team = () => {
  return (
     <>
      <div className={styles.container} id="TEAM" >
         <div className={styles.header} > THE <span className={styles.purple}>TEAM</span> </div>
      </div>
      <div className={styles.container2}>
         <div className={styles.cardcontainer} >
               {teamdata.map(cardinfo=>(
                  <div>
                     <TeamCard
                     cardinfo={cardinfo[0]}
                     />
                  </div>
               ))}
            </div>
      </div>
    </>
  )
}

export default Team