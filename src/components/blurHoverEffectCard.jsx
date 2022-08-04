import React from "react";
import { AnchorFillBtn } from "./buttons";
import classes from "./style/blurHoverEffectCard.module.css";
export default function BlurHoverEffectCard({ content, className }) {
  const { title, highlightText, creatorImg, cardImg, name, ETH } = content;
  return (
    //   card image
    <div className={`${classes.card} ${className}`}>
      <div className={`${classes.card_img_container}`}>
        <figure className={`${classes.card_img}`} >
          <img src={cardImg} alt="NFT card " />
        </figure>
              
        <div className={`${classes.overlay} d-flex align-items-center justify-content-center  `}>
                <AnchorFillBtn to='/' style={{zIndex:'1'}} >Place a bid</AnchorFillBtn>  
        </div>
      </div>
      {/* card body  */}
      <div className={`card_content`}>
        {/* card title  */}
        <div
          className={`d-flex justify-content-between align-items-center mt-2`}
        >
          <span className={`d-inline-block fs-6  ${classes.card_title} `}>
            {title}
          </span>
          <span className={`highlight d-inline-block ms-2 px-3 py-1 rounded`}>
            {highlightText}
          </span>
        </div>
        {/* card creator division  */}
        <div className={`d-flex justify-content-between mt-4`}>
          <div className={`creator d-flex align-items-center `}>
            <figure className="mt-1 d-inline align-middle">
              {" "}
              <img src={creatorImg} alt="creator" />
            </figure>
            <div className={`mx-2`}>
              <p className={`text-dark mb-1`}>Creator</p>
              <p className={``}>{name}</p>
            </div>
          </div>
          {/* current bid  */}
          <div>
            <p className={`text-dark mb-1`}>Current Bid</p>
            <p className={``}>{ETH} ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}
