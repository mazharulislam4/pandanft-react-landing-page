import React from "react";
import heroImg from "../media/hero img.svg";
import live1Creator from '../media/live1 creator.svg';
import live1Img from '../media/live1.svg';
import live2Creator from '../media/live2 creator.svg';
import live2Img from '../media/live2svg.svg';
import live3Creator from '../media/live3 creator.svg';

import { AnchorOutlineBtn } from "./buttons";
import NFTcard from "./NFTcard";
import classes from "./style/threeCardsFeature.module.css";
export default function ThreeCardsFeature({ Title, btnText }) {
  const content = [
    {
      id:0,
      title: "Hamlet Contemplates ...",
      highlightText: "BSC",
      cardImg: live1Img,
      creatorImg: live1Creator,
      name: "SalvadorDali",
      ETH: 4.89,
    },
    { 
      id:1,
      title: "Hamlet Contemplates ...",
      highlightText: "BSC",
      cardImg: live2Img,
      creatorImg: live2Creator,
      name: "SalvadorDali",
      ETH: 4.89,
    },
    {
      id:2,
      title: "Hamlet Contemplates ...",
      highlightText: "BSC",
      cardImg: heroImg,
      creatorImg: live3Creator,
      name: "SalvadorDali",
      ETH: 4.89,
    },
  ];

  return (
    <section className='py-5 my-5'>
      <div className={`container`}>
        <div className={`d-flex justify-content-between align-items-center my-3  `}>
          <h2 className={`${classes.title}`}>{Title}</h2>
          <AnchorOutlineBtn to="/blog">{btnText}</AnchorOutlineBtn>
        </div>

        <div
          className={`row row-cols-lg-3  row-cols-1 gap-3 justify-content-lg-between justify-content-center aling-items-center m-0 flex-fill flex-lg-nowrap`}
        >

          {content.map((item ) => {
           return <NFTcard key={item.id} content={item} className='flex-shrink-1 flex-grow-0' />
          })}

        </div>
      </div>
    </section>
  );
}
