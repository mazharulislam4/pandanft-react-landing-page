import React from "react";
import creator from '../media/hero bottom ing.svg';
import heroImg from "../media/hero img.svg";
import { AnchorFillBtn } from "./buttons";
import NFTcard from "./NFTcard";
import classes from "./style/hero.module.css";
export default function Hero() {
  return (
    <section className="my-5">
      <div
        className={`container d-flex justify-content-between align-items-center flex-md-row flex-column  gap-5 `}
      >
        <div className={`left_side`}>
          <h1 className={`${classes.section_title} `}>
            Discover a New Era of Crypto Currency
          </h1>
          <p className={`${classes.section_sub_title} my-4 text-dark`}>
            Panda NFT is the primier marketplace for NFT, which are digital
            items you can truly own. Digital items have existed for a long time,
            but never like this.
          </p>
          <AnchorFillBtn to='/blog'>Get Started</AnchorFillBtn>
        </div>
        {/* right side  */}

        <div className={`right_side`}>
          <NFTcard content={{
            title: 'Hamlet Contemplates ...',
            highlightText: 'BSC',
            cardImg: heroImg,
            creatorImg: creator,
            name: "SalvadorDali",
            ETH:4.89
            
          }} />
        </div>
      </div>
    </section>
  );
}
