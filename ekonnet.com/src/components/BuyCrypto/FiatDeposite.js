import React from 'react';
import './FiatDeposite.css';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const FiatDeposite = () => {
  return (
    <>
    <section id='fiat_deposite' className='fiat_deposite'>
      <div className='container'>
        <div className='row'>
         <div className='col-lg-12'>
          <div className='fiat_deposite_button d-flex'>     
            <Nav.Link as={Link} to={"/one-click-buy"}><button>One-Click Buy</button></Nav.Link> 
            <Nav.Link as={Link} to={"/P2p-trading-fees"}><button>P2P</button></Nav.Link> 
            <Nav.Link as={Link} to={""}><button id="fiat_deposite_active">Fiat-Deposite</button></Nav.Link> 
          </div>
         </div>
        </div>
      </div>
    </section>
    <section id='fiat' className='fiat'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
              <div className='d-flex'>
              <div>
              <label>Amount</label>
              <input type="text" placeholder='15.00 - 12500.00' className='text'></input> 
              </div>
              <div>
              <label>Currency</label>
              <button className='dropdown-toggle'>EUR</button>
              </div>
              </div>
              <div className='payment'>
              <label>Payment Method</label> 
              <input list="payment" className="browser dropdown-toggle" placeholder='Select payment method' data-bs-toggle="dropdown"></input>
              <datalist id="payment">
              <option value="P2P"/>
              <option value="Phonepe"/>
              <option value="Local Card"/>
             </datalist>
              </div>
              <div className='one_click_buy_login'>
              <Nav.Link as={Link} to={"/sign-in"}><button>Sign In</button></Nav.Link> 
              </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FiatDeposite
