import React, {useState} from 'react'
import FAQCard from '../cards/FAQCard';

const styles = {
   container: `space-y-4 py-[50px] flex flex-col justify-center bg-[#feffe4]`,
   header: `font-[minitel] text-[25px] text-center px-[20px] leading-[50px] md:text-[30px]`,
   cardcontainer: `py-[25px] mx-auto md:max-w-[1800px] md:flex flex-row flex-wrap   max-w-screen justify-center `,
   purple: `text-[#71be8a]`,
   faqcontainer: `mx-auto flex flex-col flex-wrap md:flex-row md:justify-center  justify-start`,
}

const faqdata = [
   {questionid:'faq01',question:'What are the benefits of being an nft holder?', answer:'We consider our NFT holders as our prime and most important early investors in the Teko  that we are building. That is why a lot of work and efforts have been put in order to ensure that they get as many benefits as we can. Helping sustainable tourism, entrepreneurship and the community'},
   {questionid:'faq02', question:'How do I claim my rewards token?', answer:'This is the official website, you can mint your erc1155 nft'},
   {questionid:'faq03', question:'How do I redeem this $ONCA for perks?', answer:'Just connect your wallet to this website, and after that you will have access to a list of the rewards you can claim based on your balance of $ONCA tokens'},
   {questionid:'faq04', question:'Why investing in tourism sustainable?', answer:'Because you in this way you can incentivize the local economy and population'},
]

const FAQ = () => {
   const [activefaq, setactivefaq] = useState(faqdata[0].questionid);
  return (
     <>
      <div className={styles.container} id="FAQ">
         <div className={styles.header}> F.A.Q </div>
         <div className={styles.faqcontainer}>
            {faqdata.map(question => (
                  <FAQCard
                  question={question}
                  setactivefaq={setactivefaq}
                  activefaq={activefaq}
                  />
            ))}
         </div>
      </div>
     </>
  )
}

export default FAQ