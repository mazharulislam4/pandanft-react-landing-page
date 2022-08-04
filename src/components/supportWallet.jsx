import React from "react";
import binance from '../media/wallets/binance.svg';
import conibase from '../media/wallets/coinbase.svg';
import metamask from '../media/wallets/metamask.svg';
import tokocrypto from '../media/wallets/tokocrypto.svg';
import trustwallet from '../media/wallets/trustwallet.svg';

export default function SupportWallet() {
  return (
    <section className={`supported_wallet`}>
      <div className="container">
        <div className="row   row-cols-md-5  row-cols-2">
         <div className="col">
            <figure>
              <img src={binance} alt="" />
            </figure>
        </div>
                  

        <div className="col">
          <figure>
            <img src={trustwallet} alt="" />
          </figure>
        </div>
                  
          <div className="col">
            <figure>
              <img src={metamask} alt="" />
            </figure>
         </div>
                  
          <div className="col">
            <figure>
              <img src={conibase} alt="" />
            </figure>
         </div>
                  
          <div className="col">
            <figure>
              <img src={tokocrypto} alt="" />
            </figure>
         </div>
                  
        </div>
      </div>
    </section>
  );
}
