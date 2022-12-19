import React from 'react';
// import Future from '../components/Future/Future.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import OneClickBuy from './BuyCrypto/OneClickBuy';
import P2pTradingFees from './BuyCrypto/P2pTradingFees';
import FiatDeposite from './BuyCrypto/FiatDeposite';
import MarketOverview from './Markets/MarketOverview';
import Traders from './Traders/Traders';
import Features from './Traders/Features';
import MobileApp from './Traders/MobileApp';
import Wallets from './Traders/Wallets';
import Security from './Traders/Security';
import Explore from './Explore/Explore';
import Future from  './Future/Future';
import SignUp from './Login/SignUp';
import SignIn from './Login/SignIn';
import MarketData from './Markets/MarketData';
import {Route,Routes} from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/> 
       <Route path="/one-click-buy" element={<OneClickBuy/>}/> 
       <Route path="/p2p-trading-Fees" element={<P2pTradingFees/>}/>
       <Route path="/fiat-deposite" element={<FiatDeposite/>}/>
       <Route path="/market-overview" element={<MarketOverview/>}/>
       <Route path="/traders" element={<Traders/>}/>
       <Route path="/features" element={<Features/>}/>
       <Route path="/mobile-app" element={<MobileApp/>}/>
       <Route path="/wallets" element={<Wallets/>}/>
       <Route path="/security" element={<Security/>}/>
       <Route path="/explore" element={<Explore/>}/>
       <Route path="/future" element={<Future/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/signin" element={<SignIn/>}/>
       <Route path="/market-data" element={<MarketData/>}/>
     </Routes>
    </>
 
  )
}

export default App
