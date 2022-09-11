import React from 'react'
import { images } from '../assets';

const Carousel = () => {
   const styles = {
      wrapper: `overflow-x-hidden`,
      imagescontainer: `pt-[50px] pb-[5px] pt-[73px] bg-[#feffe4] flex w-[2200px] md:w-[2500px] lg:w-[3000px] animate-move `,
      image: `bg-[#ffffff] p-1 my-2  max-w-[200px]`,
      card: `px-2 `
   }

var punks = [images.p1, images.p2, images.p3, images.p4, images.p5, images.p6, images.p7, images.p8]

return (
         <>
            <div className={styles.wrapper}>
               <div className={styles.imagescontainer}>
                  {punks.map(punk=>(
                     <div className={styles.card}>
                        <img className={styles.image} src={punk} alt="" />
                     </div>
                  ))}
                  {punks.map(punk=>(
                     <div className={styles.card}>
                        <img className={styles.image} src={punk} alt="" />
                     </div>
                  ))}
               </div>
            </div>         
         </>
  )
}

export default Carousel