import React from "react";
import artistbg1 from '../media/artistbg1.svg';
import artistbg2 from '../media/artistbg2.svg';
import artistbg3 from '../media/artistbg3.svg';
import artistbg4 from '../media/artistbg4.svg';
import artPf1 from '../media/artPf1.svg';
import artPf2 from '../media/artPf2.svg';
import artPf3 from '../media/artPf3.svg';
import artPf4 from '../media/artPf4.svg';
import { AnchorOutlineBtn } from "./buttons";
import classes from './style/fourCardFeature.module.css'
import ArtistCard from "./artistCard";
function FourCardFeature(props) {
  const { Title, btnText } = props;

  const content = [
    {
  id:1,
  Title: 'CryptoPunks',
  count: 150,
  cardbg: artistbg1,
  cardPfImg: artPf1
   },
   {
    id:2,
    Title: 'CryptoPunks',
    count: 25.5,
    cardbg: artistbg2,
    cardPfImg: artPf2
     },    {
      id:3,
      Title: 'CryptoPunks',
      count: 400,
      cardbg: artistbg3,
      cardPfImg: artPf3
    },
   
    {
      id:4,
      Title: 'CryptoPunks',
      count: 300,
      cardbg: artistbg4,
      cardPfImg: artPf4
       },
]


  return (
    <section className="py-5 artist_feature">
      <div className={`container`}>
        <div className={`d-flex justify-content-between aling-items-center my-3`}>
          <h1 className={`${classes.title}`} >{Title}</h1>
          <AnchorOutlineBtn to="/">{btnText}</AnchorOutlineBtn>
        </div>

        <div
          className={`row row-cols-xl-4   row-cols-1 gap-3 justify-content-xl-between justify-content-center aling-items-center m-0 flex-fill flex-xl-nowrap`}
        >
        
         {content.map(item=>  <ArtistCard content={item} key={item.id} />)}
          
        </div>

      </div>
    </section>
  );
}

export default FourCardFeature;
