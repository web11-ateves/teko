import React from 'react'
import { images } from '../assets'

const ProductCard = ({cardinfo, action}) => {
   const title = cardinfo.title
   const description = cardinfo.description
   const image = cardinfo.image
   const cost = cardinfo.cost

   const styles = {
      container: ` p-3 m-3 md:min-w-[300px]  flex flex-row md: justify-center md:flex-col mx-auto  `,
      container2: `flex flex-col md:mx-auto md:space-y-[-20px] justify-end `,
      image: ` min-w-[150px] max-w-[150px] min-h-[120px] md:max-w-[220px]  md:mx-auto md:mb-[20px]  `,
      titlebox: `z-0 hover:bg-[#bcbae5] bg-[#6e45c7] shadow-md w-[220px]  md:w-[280px] h-[45px] md:max-w-[280px] md:h-[60px]  py-[5px] `,
      title: ` ml-[10px] font-[pix] text-white md:text-[25px] text-[20px] ml-[10px]   `,
      descbox: `flex flex-col justify-end z-1 bg-[#f1f1f1] p-2 max-w-[280px] min-w-[120px] max-h-[94px]  mx-0 md:mx-auto pb-[10px] pt-[25px]   `,
      desc: ` font-[minitel] md:text-[14px] text-[12px] ml-[5px]  `,
      icons: `fill-[#ffffff]`,
      socialiconscontainer: `mx-1 flex p-1 space-x-[10px] `,
      btnconnect: `font-[pix] rounded-full shadow-md w-full animate-pulse text-lg bg-[#71be8a] hover:bg-[#4f8560] text-white font-bold p-4  shadow-md`,


   }

  return (
    <>
      <div className={styles.container}>
         <div className={styles.image} >
            <img src={image} alt=""/>
         </div>
         <div className={styles.container2} >
            <div  >
               <button className={styles.btnconnect} onClick={() => {action(cost)}}>
                  <div className={styles.title}>
                     {title}
                  </div>
               </button>
            </div>
            <div className={styles.descbox}>
               <div className={styles.desc}>
                  {description}
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default ProductCard