import React from 'react'
import { images } from '../assets';
import { useState } from 'react';
import { useEffect } from 'react';
import { ethers } from 'ethers'
import ABI from '../assets/TekoNFT.json'

const styles = {
   bg: `bg-[#ffffff] px-[18px] pt-[20px] flex justify-center`,
   about1: `font-[minitel]  text-[25px] text-center md:text-[30px] pt-[40px]`,
   purple: `font-[minitel] text-[25px] text-[#71be8a] md:text-[30px]`,
   container: `px-3 py-3 flex flex-col sm:flex-row justify-center bg-[#feffe4] md:max-w-2xl shadow-lg  `,
   div1: ` p-2 sm:w-1/2 flex flex-col justify-center text-center space-y-2`,
   div2: ` p-2 sm:w-1/2 align-middle text-center flex flex-col justify-center space-y-2` ,
   imagect: ` px-6 py-0`,
   image: ` shadow-lg`,
   supply: `font-[pix] text-lg bg-[#ffffff] mx-6 shadow-md`,
   metamaskerror: `font-[minitel] text-sm bg-[#ffffff] mx-6 capitalize p-1`,
   btnconnect: `font-[pix] w-full animate-pulse text-lg bg-[#71be8a] hover:bg-[#4f8560] text-white font-bold p-4  shadow-md`,
   amount: `font-[pix] text-lg`,
   btnmint: `font-[pix] text-lg bg-[#71be8a] hover:bg-[#45c76e] text-white font-bold py-4 px-6 shadow-md`,
   counterbtnp: `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l`,
   counterbtnn: `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r`,
   counter: `bg-gray-200 text-gray-800 font-bold py-3 px-4`,
   asupply: `text-[30px] text-[#45c76e]`,
   polygon: `max-w-[130px] mx-auto`,
   modal: `mx-auto`,
   spinner: `mx-auto mt-[100px] w-20 h-20 rounded-full animate-spin border-8 border-solid border-purple-500 border-t-transparent`,
   opensea: `max-w-[260px] mx-auto pt-[20px] shadow-md`,
}

const address = "0x8DbA0BED459BB1C0b037CA638f22e224a00E7802"
const rpcurlprovider =  new ethers.providers.JsonRpcProvider(["https://polygon-mumbai.g.alchemy.com/v2/pkqdvzeiqirYql1sNmUAA3IIe0AL9_0U"])
const contract =  new ethers.Contract(address, ABI.abi, rpcurlprovider) 

const Minter = () => {
   const [mintAmount, setmintAmount] = useState(1)
   const [metamask, setmetamask] = useState(false)
   const [walletconnected, setWalletconnected] = useState(false)
   const [metamaskprovider, setMetamaskprovider] = useState([])
   const [nftcostwei, setnftcostwei] = useState("0")
   const [nftcosteth, setnftcosteth] = useState("0")
   const [price, setprice] = useState()
   const [totalSupply, setTotalsupply] = useState()
   const [mintingmodal, setmintingmodal] = useState(false)
   
   window.onload = function () {
      async function handleaccountchange() {
         const accounts = await window.ethereum.request({ method: "eth_accounts" });
         const isConnected = !!accounts.length;
         isConnected ? setWalletconnected(true) : setWalletconnected(false) 
      }
      async function handlechainchange() {
         const mmprovider = await new ethers.providers.Web3Provider(window.ethereum)
         setMetamaskprovider(mmprovider)
         console.log("newprovidersetted")
      }
      if (window.ethereum !== "undefined") {
         window.ethereum.on('accountsChanged',() => {handleaccountchange()} );
         setmetamask(true)
      } else {setmetamask(false)}
      if (window.ethereum !== "undefined") {
         window.ethereum.on('chainChanged',() => {handlechainchange()} );
         setmetamask(true)
      } else {setmetamask(false)}
   }

   async function connectWallet () {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      setMetamaskprovider(provider)
      await provider.send("eth_requestAccounts",[])
      setWalletconnected(true)   
   }

   async function mint() {
      const chainIdbg = await window.ethereum.chainId
      console.log("chainIdbg",chainIdbg)
      console.log("metamaskprovider",metamaskprovider)
      if (chainIdbg !== "0x13881") {
         window.alert("MetaMask is connect to wrong network! To Mint, Please First Connect your MetaMask to Polygon Mainnet Network (ID:137) before minting")
      } else {
         const signer = await metamaskprovider.getSigner()  
         const signedcontract = await contract.connect(signer)
         const totalprice = nftcostwei * mintAmount
         const pay = {value: totalprice.toString() }
         const minting = await signedcontract.mint(pay)
         setmintingmodal(true)
         await minting.wait()
         setmintingmodal(false)
         }
   }

   useEffect(() => {
      const rpcurlprovider =  new ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/pkqdvzeiqirYql1sNmUAA3IIe0AL9_0U")
      const contract =  new ethers.Contract(address, ABI.abi, rpcurlprovider) 
      async function loaddata(){
         const nftcostbg = await contract.nftPrice()
         const nftcostwei =  await nftcostbg.toString()
         setnftcostwei (nftcostwei)
         const nftcostethx = await nftcostwei / 1000000000000000000
         const nftcosteth = await nftcostethx.toFixed(4)
         setnftcosteth (nftcosteth)
         const totalSupplybn = await contract.totalMinted()
         const totalSupply = await totalSupplybn.toString()
         setTotalsupply (totalSupply)
      } 
      loaddata()
   }, [])
   
   useEffect(() => {
      const pricecount = mintAmount * nftcosteth
      const priceformatted = pricecount.toLocaleString("en-US", { maximumFractionDigits: 4, minimumFractionDigits: 1 })
      setprice(priceformatted)
    }, [mintAmount, nftcosteth])

  return (
    <>
      {/* <div className={styles.about1}>
         <span className={styles.purple}>MINT</span> OPEN
      </div> */}
      <div className={styles.bg}>
         <div className={styles.container}>
            <div className={styles.div1}>
               <div className={styles.imagect}>
                  <img  className={styles.image} src={images.nftart} alt=""/>
               </div>
               <div className={styles.supply}>
                  <span>HOLDERS: </span>
                  <span className={styles.asupply}>{totalSupply}</span>
               </div>
            </div>
            {
            !mintingmodal 
            ?
               <div className={styles.div2}>
                  <img src={images.pl} alt="" className={styles.polygon}></img>
                  {metamask ?
                     <div className={styles.btndiv} > 
                        { walletconnected ? "" :
                           <button className={styles.btnconnect} onClick={() => {connectWallet()}}>CONNECT WALLET</button>    
                        }
                        { walletconnected ? "" :
                           <a href="https://opensea.io/collection/33-devs-punks" target="_blank"><img className={styles.opensea}src={images.op}></img></a>
                        }
                     </div>
                  : <div className={styles.metamaskerror}>Metamask Extension Not Detected! For minting, please install it and refresh the page </div>}                           


                     {walletconnected ?  
                        <div className={styles.supply}>
                              <span>PRICE: </span>
                              <span className={styles.asupply}>{mintAmount * nftcosteth == 0 ? "FREE" : price }</span> {mintAmount * nftcosteth == 0 ? "to mint" : "MATIC" }
                        </div>
                     : "" }
                  
                     {walletconnected ?    
                        <button className={styles.btnmint} onClick={()=>{mint()}}>MINT</button>
                     : "" } 
               </div>
             : 
               <div className={styles.modal}>
                  <div className={styles.spinner}> </div>
                  <span className={styles.supply}>TRANSACTION IN PROCESS</span>
               </div> 
            }
         </div>
      </div>
    </>
  )
}

export default Minter