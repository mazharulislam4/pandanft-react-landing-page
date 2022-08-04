/*
component: Home ;
Defination: Home page / landing page;
style path : 
imports: hero,SupportWallet , ThreeCardsFeature , joinNow
*/
import React from 'react';
import BlurHoverEffectCard from '../components/blurHoverEffectCard';
import FourCardFeature from '../components/fourCardFeature';
import Hero from '../components/hero';
import JoinNow from '../components/joinNow';
import SupportWallet from '../components/supportWallet';
import ThreeCardsFeature from '../components/threeCardsFeature';
import heroImg from "../media/hero img.svg";
import live3Creator from '../media/live3 creator.svg';

export default function Home() {
  return (        
    <main>
      <Hero />
      <SupportWallet />
      <ThreeCardsFeature Title='Live Auctions' btnText='View More' />
      <FourCardFeature Title='Feature Artist' btnText='View More' />
      <JoinNow content={{
        Title: 'Create Your Own NFT!',
        description: 'We have a large scale group to support each other in this game, Join us to get the news as soon as possible and follow our latest announcements!',
        btnText:'Join Comunity Now'
      }} />

      <BlurHoverEffectCard content={{
      id:2,
      title: "Hamlet Contemplates ...",
      highlightText: "BSC",
      cardImg: heroImg,
      creatorImg: live3Creator,
      name: "SalvadorDali",
      ETH: 4.89,
    }} />

    </main>
  )
}
