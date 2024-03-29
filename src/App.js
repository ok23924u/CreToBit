import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import CreToBit from './abi/CreToBit.json';
import { MetaMaskButton,Flex, Box, EthAddress,Loader,Select,Field,Input, Icon} from 'rimble-ui';
import creToBitIcon from './Media/logo.png';
import {HashRouter,Route, Switch,Link} from "react-router-dom";
import decentralized from './Media/decentralize.svg';




 
import Web3 from 'web3';

var BigNumber = require('big-number');

// main js 
function App() {

  let [account,setAccount] = useState("CONNECT YOUR WALLET");
  const [CTB,setCBT] = useState();
  const [deployed,setDeployed] = useState(false);
  const [ctbAddress,setctbAddress] = useState();
  const [CTBbalance,setCTBbalances] = useState(0);
  const demicals = 1000000000000000000;
  const [currentSymbol,setcurrentSymbol] = useState("ASSET");
  const [depositedCTB,setdepositedCTB] = useState(0);
  const [depositedETH,setdepositedETH] = useState(0);
  const [currentNetworkID,setcurrentNetworkID] = useState();
  const [accounts,setAccounts] = useState();
  const [Factor,setFactor] = useState();
  const [assetBalance,setAssetBalance] = useState();
  const [ableToClaim,setAbleToClaim] = useState(0);
  const [ignoreE59,setIgnoreE59] = useState(10000000000000000000000000000000000000000000000000000000000000000)

  
  






  // * create function to decide asset symbol 


    // return reward fun
  

 
  

  useEffect(()=> {
    ethEnabled();
    
  })

  




  const Gov = (props)=> {
    return (
      <div>
        <h2>   CTB Governance</h2>
     

        <div>
        <button class="button" onClick={props.mintCTB}>Governance Mint</button>
        </div>

       
        <div>
        <button class="button" onClick={props.burnCTB}>Burn CTB</button>
        </div>


        <div>
        <button class="button" onClick={props.updateOwnerTimeLock}>Owner TimeLock</button>
        </div>



        
        <div>

        </div>
      </div>
    )
  }

  




  const Home = (props) => {return(

<div>

<div class="wrapper-1">
      <div class="typing-demo-1">
     <h2 class="">CTB </h2>
      </div>
      </div>
    <div class="wrapper">

  
    <div class="typing-demo">
      Decentralized Bank Protocol.

      
    </div> 
</div>
   

    <div class="wrap">
      <a href="#/app">
  <button class="button" onClick={ethEnabled}>Launch App</button>
  </a>
</div>

<div class="wrapper">
{/* <div class="SpaceTop10 typing-demo-2">
  Borrow,Payback,no middlemen
</div> */}
</div>

<div class="spacingImage">
 <svg id="fb0462f1-4822-46c6-85a1-002b71cfcb82" 
 data-name="Layer 1" 
 xmlns="http://www.w3.org/2000/svg" 
 width="30%" height="10%" 
 viewBox="0 0 980.49384 751.89531">
   <title>nakamoto</title>
   <rect x="313.49413" y="116.99986" width="2" height="107" fill="#3f3d56"/>
   <rect x="313.49413" y="255.85045" width="2" height="94.14941" fill="#3f3d56"/>
   <rect x="310.49413" y="364.99986" width="155" height="2" fill="#3f3d56"/>
   <rect x="244.49413" y="391.99986" width="2" height="85" fill="#3f3d56"/>
   <rect x="262.49413" y="491.99986" width="235" height="2" fill="#3f3d56"/>
   <path d="M623.24692,551.05234" transform="translate(-109.75308 -74.05234)" 
   fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/>
   <path d="M623.24692,469.05234" transform="translate(-109.75308 -74.05234)" 
   fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/>
   <rect x="691.49413" y="48.99986" width="2" height="101" fill="#3f3d56"/>
   <rect x="529.45995" y="165.99986" width="147.03418" height="2" fill="#3f3d56"/>
   <rect x="512.49399" y="181.9999" width="2" height="135" fill="#3f3d56"/>
   <path d="M424.24721,331.0522a17,17,0,1,1,17-17A17.019,17.019,0,0,1,424.24721,331.0522Zm0-32a15,15,0,1,0,15,15A15.01672,15.01672,0,0,0,424.24721,299.0522Z" transform="translate(-109.75308 -74.05234)" fill="#3f3d56"/><path d="M356.24721,584.0522a17,17,0,1,1,17-17A17.019,17.019,0,0,1,356.24721,584.0522Zm0-32a15,15,0,1,0,15,15A15.01672,15.01672,0,0,0,356.24721,552.0522Z" transform="translate(-109.75308 -74.05234)" fill="#3f3d56"/><circle cx="315.49384" cy="366" r="16" fill="#6c63ff"/><rect x="728.49413" y="238.99986" width="166" height="2" fill="#3f3d56"/><rect x="711.49413" y="255.85045" width="2" height="94.14941" fill="#3f3d56"/><rect x="562.49413" y="364.99986" width="133" height="2" fill="#3f3d56"/><rect x="796.49413" y="373.99986" width="138" height="2" fill="#3f3d56"/><rect x="780.49413" y="391.99986" width="2" height="85" fill="#3f3d56"/><rect x="529.49413" y="491.99986" width="235" height="2" fill="#3f3d56"/><rect x="512.49413" y="414.99986" width="2" height="62" fill="#3f3d56"/><circle cx="712.49384" cy="240" r="16" fill="#6c63ff"/><path d="M802.24721,257.0522a17,17,0,1,1,17-17A17.019,17.019,0,0,1,802.24721,257.0522Zm0-32a15,15,0,1,0,15,15A15.01672,15.01672,0,0,0,802.24721,225.0522Z" transform="translate(-109.75308 -74.05234)" fill="#3f3d56"/><path d="M623.24721,257.0522a17,17,0,1,1,17-17A17.019,17.019,0,0,1,623.24721,257.0522Zm0-32a15,15,0,1,0,15,15A15.01672,15.01672,0,0,0,623.24721,225.0522Z" transform="translate(-109.75308 -74.05234)" fill="#3f3d56"/><path d="M890.24721,467.0522a17,17,0,1,1,17-17A17.019,17.019,0,0,1,890.24721,467.0522Zm0-32a15,15,0,1,0,15,15A15.01672,15.01672,0,0,0,890.24721,435.0522Z" transform="translate(-109.75308 -74.05234)" fill="#3f3d56"/><circle cx="780.49384" cy="493" r="16" fill="#6c63ff"/><path d="M623.24721,584.0522a17,17,0,1,1,17-17A17.019,17.019,0,0,1,623.24721,584.0522Zm0-32a15,15,0,1,0,15,15A15.01672,15.01672,0,0,0,623.24721,552.0522Z" transform="translate(-109.75308 -74.05234)" fill="#3f3d56"/><path d="M821.24721,457.0522a17,17,0,1,1,17-17A17.019,17.019,0,0,1,821.24721,457.0522Zm0-32a15,15,0,1,0,15,15A15.01672,15.01672,0,0,0,821.24721,425.0522Z" transform="translate(-109.75308 -74.05234)" fill="#3f3d56"/><path d="M356.24692,416.05234a20,20,0,1,0,20,20A20.0588,20.0588,0,0,0,356.24692,416.05234Zm0,6a6,6,0,1,1-6,6,6.02013,6.02013,0,0,1,6-6Zm0,28.88462a14.56987,14.56987,0,0,1-12-6.40385c.09616-4,8-6.20192,12-6.20192s11.90385,2.20192,12,6.20192a14.59411,14.59411,0,0,1-12,6.40385Z" transform="translate(-109.75308 -74.05234)" fill="#3f3d56"/><path d="M425.24692,143.05234a20,20,0,1,0,20,20A20.0588,20.0588,0,0,0,425.24692,143.05234Zm0,6a6,6,0,1,1-6,6,6.02013,6.02013,0,0,1,6-6Zm0,28.88462a14.56987,14.56987,0,0,1-12-6.40385c.09616-4,8-6.20192,12-6.20192s11.90385,2.20192,12,6.20192a14.59411,14.59411,0,0,1-12,6.40385Z" transform="translate(-109.75308 -74.05234)" fill="#3f3d56"/><path d="M802.24692,74.05234a20,20,0,1,0,20,20A20.0588,20.0588,0,0,0,802.24692,74.05234Zm0,6a6,6,0,1,1-6,6,6.02013,6.02013,0,0,1,6-6Zm0,28.88462a14.56987,14.56987,0,0,1-12-6.40385c.09616-4,8-6.20192,12-6.20192s11.90385,2.20192,12,6.20192a14.59411,14.59411,0,0,1-12,6.40385Z" transform="translate(-109.75308 -74.05234)" fill="#3f3d56"/><path d="M1032.24692,293.05234a20,20,0,1,0,20,20A20.0588,20.0588,0,0,0,1032.24692,293.05234Zm0,6a6,6,0,1,1-6,6,6.02013,6.02013,0,0,1,6-6Zm0,28.88462a14.56987,14.56987,0,0,1-12-6.40385c.09616-4,8-6.20192,12-6.20192s11.90385,2.20192,12,6.20192a14.59411,14.59411,0,0,1-12,6.40385Z" transform="translate(-109.75308 -74.05234)" fill="#3f3d56"/><path d="M1070.24692,428.05234a20,20,0,1,0,20,20A20.0588,20.0588,0,0,0,1070.24692,428.05234Zm0,6a6,6,0,1,1-6,6,6.02013,6.02013,0,0,1,6-6Zm0,28.88462a14.56987,14.56987,0,0,1-12-6.40385c.09616-4,8-6.20192,12-6.20192s11.90385,2.20192,12,6.20192a14.59411,14.59411,0,0,1-12,6.40385Z" transform="translate(-109.75308 -74.05234)" fill="#3f3d56"/><path d="M624.52486,427.71889l-2.049,8.215c2.323.579,9.483,2.941,10.643-1.708C634.32786,429.37889,626.84786,428.29789,624.52486,427.71889Z" transform="translate(-109.75308 -74.05234)" fill="#6c63ff"/><path d="M621.44286,440.07989l-2.26,9.058c2.789.693,11.392,3.455,12.664-1.655C633.17586,442.1549,624.23186,440.77589,621.44286,440.07989Z" transform="translate(-109.75308 -74.05234)" fill="#6c63ff"/><path d="M633.78686,403.26389a37.49274,37.49274,0,1,0,27.308,45.451A37.487,37.487,0,0,0,633.78686,403.26389Zm7.462,31.037c-.541,3.653-2.565,5.422-5.254,6.041,3.691,1.921,5.57,4.869,3.78,9.979-2.22,6.345-7.497,6.881-14.512,5.553l-1.703,6.824-4.115-1.025,1.68-6.733q-1.644-.40726-3.279-.85l-1.686,6.764-4.11-1.026,1.703-6.836c-.961-.246-1.937-.508-2.933-.757l-5.354-1.336,2.042-4.709s3.032.807,2.991.747a1.49616,1.49616,0,0,0,1.885-.978l2.691-10.787c.151.037.298.073.434.108a3.49556,3.49556,0,0,0-.427-.137l1.919-7.701a2.18915,2.18915,0,0,0-1.917-2.392c.065-.044-2.988-.743-2.988-.743l1.095-4.395,5.675,1.417-.005.021c.853.212,1.732.413,2.628.617l1.686-6.757,4.112,1.025-1.652,6.625c1.104.252,2.215.506,3.297.775l1.641-6.581,4.114,1.025-1.685,6.76C638.19585,426.6279,641.99486,429.3099,641.24886,434.3009Z" transform="translate(-109.75308 -74.05234)" fill="#6c63ff"/><path d="M261.75282,807.34635c-2.84542,25.87621-152.22585,23.704-151.99949-.00154C112.59871,781.47014,261.97914,783.64237,261.75282,807.34635Z" transform="translate(-109.75308 -74.05234)" fill="#e6e6e6"/><polygon points="103.754 668.156 109.81 681.276 120.911 680.267 127.976 657.054 116.874 650.999 103.754 668.156" fill="#ffb8b8"/><polygon points="65.642 698.373 65.403 707.516 82.56 708.525 82.56 697.424 65.642 698.373" fill="#ffb8b8"/><polygon points="71.458 531.908 75.495 612.647 65.403 700.451 95.68 704.488 114.856 593.472 120.911 517.778 71.458 531.908" fill="#2f2e41"/><path d="M133.777,576.69193s-12.11093,79.7303,13.12018,105.97066,59.54542,72.66559,59.54542,72.66559l24.22186-30.27733L169.10055,659.45l12.11093-44.40676,49.453-23.21262-8.07395-55.50844-72.6656-1.00924Z" transform="translate(-109.75308 -74.05234)" fill="#2f2e41"/><circle cx="83.56933" cy="295.74449" r="22.20338" fill="#ffb8b8"/><path d="M174.14677,374.84306s-1.00925,31.28657-6.05547,35.32355,18.1664,21.19413,18.1664,21.19413l15.13867-24.22186V384.9355Z" transform="translate(-109.75308 -74.05234)" fill="#ffb8b8"/><polygon points="74.486 343.179 62.233 324.677 55.31 334.096 45.218 362.355 53.292 472.362 100.726 473.371 106.782 347.216 91.643 329.05 74.486 343.179" fill="#d0cde1"/><path d="M235.71067,424.296l8.074-1.00924s2.01849,1.00924,3.02773,8.074,13.12018,69.63786,13.12018,69.63786l-16.14791,76.70257-18.1664-24.22186,11.10169-42.38826-11.10169-42.38827Z" transform="translate(-109.75308 -74.05234)" fill="#2f2e41"/><polygon points="23.015 349.234 16.959 349.234 1.821 430.983 15.95 494.566 30.079 471.353 26.042 446.122 28.061 423.919 35.126 410.798 23.015 349.234" fill="#2f2e41"/><path d="M222.5905,751.2912s-6.05547-2.01849-6.05547,2.01849,4.037,16.14791,4.037,16.14791-6.05547,37.342,3.02773,35.32355,16.14791-19.17564,17.15716-24.22186,6.05546-31.28658,6.05546-31.28658,8.074-19.17564,3.02773-20.18488-19.17564-5.04622-19.17564-5.04622S238.73841,749.27271,222.5905,751.2912Z" transform="translate(-109.75308 -74.05234)" fill="#2f2e41"/><path d="M193.32241,782.57778s-16.14791-10.09245-19.17564-2.01849a84.80084,84.80084,0,0,0-4.037,18.1664s-4.037,13.12017,12.11093,11.10169,14.12942-2.01849,15.13867-8.074S193.32241,782.57778,193.32241,782.57778Z" transform="translate(-109.75308 -74.05234)" fill="#2f2e41"/><path d="M180.20223,369.79684l4.037-1.00925s3.02773-17.15715,10.09244-15.13866,25.23111,4.037,25.23111-4.037-17.15715-15.13867-27.24959-14.12942-27.2496,4.037-26.24036,19.17564,7.52165,29.86536,7.52165,29.86536l.526-8.97562Z" transform="translate(-109.75308 -74.05234)" fill="#2f2e41"/><polygon points="91.643 355.29 74.486 343.179 91.643 329.05 97.6 336.197 91.643 355.29" fill="#d0cde1"/><polygon points="59.347 354.281 74.486 343.179 62.375 325.013 55.31 334.096 59.347 354.281" fill="#d0cde1"/><path d="M242.77538,423.28679l-32.29582-13.12018-7.56933-5.55084-22.708,100.41981-15.13866-45.416,4.5416-58.03155-41.88364,21.69876L141.851,491.9154l2.01849,26.24036L137.814,539.34989s-21.19413,15.13866-14.12942,31.28657,15.13866,17.15716,15.13866,17.15716,34.31431-32.29582,36.3328-40.36978,5.04622-22.20337,5.04622-22.20337,17.15716,64.59164,37.342,63.58239,20.18489-22.20337,20.18489-22.20337l-5.04622-22.20338L224.609,521.18349l4.037-38.35129Z" transform="translate(-109.75308 -74.05234)" fill="#2f2e41"/></svg>
</div>
</div>
    )
  }


  // first of app page
  const App = (props) => {

    const [depositState, setDepositState] = useState({
      depositAmt: 0
    })

    

    const [borrowValue,setborrowValue] = useState("")

  //  const handleChange =  async(e) => {
  //   window.web3 = new Web3(window.web3.currentProvider);
  //   const web3js = await window.web3;
  //   if (web3js)
  //   { console.log((e.target.value).toString())
  //     const value = (e.target.value)*props.demicals;
  //     console.log(value);
  //     let abc = await web3js.utils.fromWei((value).toString(),'ether')
  //     setborrowValue(JSON.stringify(abc))
  //     console.log(abc)
      
  // }

  //  }

// borrowETH function *

   const borrowETH = async()=> 
  {
    const amount = depositState.depositAmt
   


    if (CTB)
    {

      const web3 =  window.web3;
      
      CTB.methods.borrowETH(

        account,
        (web3.utils.toBN(amount*demicals).toString())
        )
        .send(
          {from:account}
          )
    }
  }




  const payBackETH = async()=> 
  {

    const amount = depositState.depositAmt;
    if (CTB)
    {
      const web3 =  window.web3;
      CTB.methods.getDepositCTB(
      
        // ,(0.01*1.2*demicals).toString()
        )
        .send(
          {from:account,
            // Match with borrowETH
            value: (web3.utils.toBN((amount*demicals).toFixed(0)).toString())
         
        }
          )
    }
  }




  const sendETH = async()=> {

    const amount = depositState.depositAmt
    if (window.web3)
    {
      const web3 = await window.web3;
      web3.eth.sendTransaction({
        from: account,
        to: ctbAddress,
        value: (amount*demicals).toString()
      })

    }
  }


    

   
    return (
    <div class="homePageTitle">
    <h2>App Dashboard </h2>
   

    <h5 class="smallAddress">{ctbAddress}</h5>

   

    <div class="ctbBalances-2">
    You have <span class="borrowText">{CTBbalance/demicals}</span>CTB to <span class="borrowText-1">borrow</span>
    </div>

    {/* <div>
      HERE:  {borrowValue} {}
    </div> */}

    <div class="ctbBalances-1">
    You need <span class="payBackText">  {(props.depositedCTB/demicals).toFixed(4) }</span>{currentSymbol} to <span class="payBackText-1">PAYBACK</span>
    </div>


{/* Start of row element */}
    <div class="row-element">



    <div>
     
   <div>
   <Input type="number" required={true} placeholder={"CTB"} 
   class="inputField" width={0.45}
  //  onChange={this.onTrigger}
  // onChange= {handleChange}
  onChange={(e) => setDepositState({
    ...depositState,
    depositAmt: e.target.value
    
  })}
  value={depositState.depositAmt}
  
  
   />
   </div>
   {/* Borrow Button */}
  <button class="button1" onClick={borrowETH} type="submit">Borrow</button>






  <div>
      
     <span class="borrowText"><b>
     {CTBbalance/demicals}
       </b></span> 
     CTB 

    <div class="spacingTopBottom">

      ▽


      </div>
    <div>  
    <span class="payBackText"><b>
    {(CTBbalance/demicals * 0.95).toFixed(4)}
      </b></span> 
      {currentSymbol}
      </div> 
  </div>
</div>

<div>
<div class="">
   <Input type="number" required={true} placeholder={currentSymbol} 
   class="inputField" width={0.45}
   onChange={(e) => setDepositState({
    ...depositState,
    depositAmt: e.target.value
    
  })}
  value={depositState.depositAmt}
   />
   </div>
  
   {/* <button class="button2" onClick={props.sendETH}>SEND </button> */}
   
  <button class="button2" onClick={payBackETH}>PayBack </button>
  
  
  <div>
     
    <span class="payBackText"><b>

      {/* Get depositedCTB[msg.sender] for this  */}
    {(depositedCTB/demicals).toFixed(4)}
      </b></span> 
    {currentSymbol}
  </div>
  <div class="spacingTopBottom">▼</div>
  <div>  
  <span class="borrowText"><b>
  {(depositedCTB/demicals ).toFixed(4)}
    </b></span> 
    CTB</div>
</div>


</div>


{/* End of Row ELement */}



{/* Start of row element-1 */}
<div class="row-element">



<div>
<div>
<Input type="number" required={true} placeholder={"CTB"} 
class="inputField" width={0.45}
onChange={(e) => setDepositState({
  ...depositState,
  depositAmt: e.target.value
  
})}
value={depositState.depositAmt}

/>
</div>
<button class="button3" onClick={sendETH}>Initial CTB</button>
<div>
  
 <span class="payBackText"><b>
 {assetBalance}
   </b></span> 
   {currentSymbol}


<div class="spacingTopBottom">

  ▽


  </div>
<div>  
<span class="initialText"><b>
{(assetBalance * 0.9).toFixed(4)}
  </b></span> 
  CTB 
  </div> 
</div>
</div>

<div>
<div class="">
{/* <Input type="number" required={true} placeholder={currentSymbol} 
class="inputField" width={0.45}/> */}
</div>

{/* <button class="button2" onClick={props.sendETH}>SEND </button> */}


{/* rewardbutton */}
<button class="rewardbutton2" onClick={props.holderIncentive}>Reward </button>


<div>
 
<span class="rewardText"><b>

  {/* Get depositedCTB[msg.sender] for this  */}
{(props.ableToClaim/demicals).toFixed(4)}
  </b></span> 
{currentSymbol}
</div>

<div>  
<span class="borrowText"><b>

</b></span> 
</div>
</div>


</div>


{/* End of Row ELement-1 */}




</div>


  )}

 
  

 

  const ethEnabled = async() => {
  
    if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      await window.ethereum.enable();
  
      const web3js = await window.web3;
      const accounts = await web3js.eth.getAccounts();
      let balances = await web3js.eth.getBalance(accounts[0]);
      setAssetBalance((balances/demicals).toFixed(4));
      
     
      const networkID = await web3js.eth.net.getId();
      if (networkID)
      {
        await setcurrentNetworkID(networkID)
        console.log("Current Network ID",networkID)
        if (networkID === 97 || 56)
        {
          setcurrentSymbol("BNB")
        }
        else if (networkID === 1 || 3 || 4)
        {
          setcurrentSymbol("ETH")
        }

        if (currentSymbol)
        {
          await console.log(currentSymbol)
        }
      
      }
     
      
      
      setAccount(accounts[0]);  
  
      console.log("Account connected");
      await addBlinking()

      const creToBitData = await CreToBit.networks[networkID];

      if (web3js && !deployed)
      {
        if (CreToBit)
        {
          const creToBit = await new web3js.eth.Contract(CreToBit.abi,creToBitData.address);
        console.log("creToBit",creToBit)
        setCBT(creToBit);
        setDeployed(true);
        await returnRewards()
        await setctbAddress(creToBit._address)
        await getBalanceOfCTB()
        await getDepositedCTB()
        await getDepositedETH()
        await balanceOFAddress()
        await returnFactor()
       
        
        
        
        }

      }
  

    }
  
    return false;
  }

  const addBlinking = async()=> {
   
      var element = document.getElementById("blink1");
      element.classList.add("blink_me")
      console.log("Blinking")
    
  }

  const refreshPage = ()=> {
    window.location.reload(false);
  }


  


  const getBalanceOfCTB = async()=> {

    if (CTB) {
     let balances = await CTB.methods.balanceOf(account).call()
     
     await setCTBbalances(balances)
     

    }

  }

//  const getClaimedReward =async()=> {
//    if (CTB)
//    {
//      let rewards;
//      rewards = await CTB.methods.holderIncentive().call();
//      console.log('claimed: ', rewards/demicals)
//    }
//  }


  const consoleLogSomething = async()=> {
    console.log("props working ")
  }

  

  const sendETH = async()=> {
    if (window.web3)
    {
      const web3 = await window.web3;
      web3.eth.sendTransaction({
        from: account,
        to: ctbAddress,
        value: (0.05*demicals).toString()
      })

    }
  }


  const updateOwnerTimeLock = async()=> {
    if (CTB)
    {
      CTB.methods.updateOwnerTimeLock(
      
        (10*demicals).toString()
        )
        .send(
          {from:account,
            // Match with borrowETH
           
         
        }
          )
    }
  }
  // Must equal or less than borrowETH
  // paybackETH function


  const icoCTB = async()=> {
    
    if (CTB)
    { 
      let ableToBuy;
      ableToBuy = await CTB.methods.allowance(ctbAddress,account);
      console.log("Able to Buy:", ableToBuy)
      console.log()
      CTB.methods.icoCTB(
        (0.001* demicals).toString()
      ).send (
        {
          from:account,
          
        }
      )
    }
  }




  const mintCTB = async()=> {
    
    if (CTB)
    { 
     
      CTB.methods.governanceMint(
       
      ).send (
        {
          from:account,
          
        }
      )
    }
  }



  const burnCTB = async()=> {
    
    if (CTB)
    { 
     
      CTB.methods.burnICO(
       
      ).send (
        {
          from:account,
          
        }
      )
    }
  }

  


  const holderIncentive = async()=> {

    if (CTB)
    {
      CTB.methods.holderIncentive(
        (account))
        .send(
          {from:account}
          )
    }
  }

  

  const returnFactor = async()=> {
    let factor;
    if (CTB)
    {
      
      

      let updatedFactoR = await CTB.methods.returnFactor().call();
      await console.log('Updated factor',updatedFactoR)
    }
  }


  const returnRewards = async()=> {
   
    if (CTB)
    {
      let rewards = await CTB.methods.returnRemainingReward(account).call();
     
      
        if (rewards/ignoreE59 > 0.001)
        {
        await setAbleToClaim(
           rewards/ignoreE59
          );
        console.log("Remaining rewards: ",rewards);
        }

        else {
          await setAbleToClaim(
            // rewards
            rewards
            );
        }
       
      
    }
  }

  const balanceOFAddress = async()=> {
    let balancess;

    if (CTB)
    {
      balancess = await CTB.methods.balanceOf(CTB._address).call();
      console.log('CTB balances contracts',await balancess/demicals);
      let totalETH = await CTB.methods.totalETH().call();
      await setFactor(totalETH/balancess)
      console.log('TOTAL ETH contract', await totalETH/demicals);
      console.log('Expect factor:' , await totalETH/balancess);

      let rewards = await CTB.methods.holderIncentive(account).call();
      console.log('rewards:',rewards/demicals);
    }
  }

 


  const getDepositedCTB = async()=> {
    let depositedCTB;
    
    if (CTB)
    {
      
      depositedCTB =  await CTB.methods.depositedCTB(account).call()
    await setdepositedCTB(depositedCTB);
    console.log(depositedCTB, "deposited CTB")
    }

  }



  const getDepositedETH = async()=> {
    let depositedETH;
    
    if (CTB)
    {
      
      depositedETH =  await CTB.methods.depositedETH(account).call()
    await setdepositedETH(depositedETH);
    console.log(depositedETH, "deposited CTB")
    }

  }

 





  const NavBar = (props)=> {

    return (
      <div className="navBar">
  
        
        <ul>
         
         <div className="navBarMain">
        
        <span>   
        <a href="#">  
           <img src={creToBitIcon} alt="Lihkg Icon" className="navIcon" />  
           
       
         </a>
        
  
         </span>


         <div>
           <a href="#/app">
           <h2> App</h2>
           </a>
         </div>

         <div> 
           <a href="#/gov">     
         <h2 className="govText" id="blink1">GOV</h2>
         </a>
         </div>
       
       
         
         <div>
          <a href="https://cretobit.gitbook.io/cretobit" target="_blank">
         <h2 className="balance">Docs</h2>
         </a>
         </div>
  
        

         </div>
            <div className="navBarWallet">    
            
            <EthAddress address={props.account} />    
              <MetaMaskButton    width= {0.5}onClick={props.ethEnabled,props.refreshPage}>Connect Wallet</MetaMaskButton>   
            </div>
  
          

        </ul>
  
      </div>
    );
    
  }

  return (

    <HashRouter>


    <div className="App">

      <NavBar
      ethEnabled={ethEnabled}
      account={account}
      refreshPage={refreshPage}
      />

      <Switch>

        <Home exact path="/"/>
        <App  path="/app"
        sendETH={sendETH}
        depositedCTB={depositedCTB}
        depositedETH={depositedETH}
        // borrowETH={borrowETH}
        // payBackETH={payBackETH}
        // getClaimedReward={getClaimedReward}
        // withdrawlETH={withdrawlETH}
        account={account}
        holderIncentive={holderIncentive}
        demicals={demicals}
        assetBalance={assetBalance}
        ableToClaim={ableToClaim}
   
        

        
        />

        <Gov path="/gov"
        icoCTB={icoCTB}
        mintCTB={mintCTB}
        sendETH={sendETH}
        burnCTB={burnCTB}
        updateOwnerTimeLock={updateOwnerTimeLock}
        />

      </Switch>

      

     

      











      
      


    </div>
    </HashRouter>
  );
}

export default App;
