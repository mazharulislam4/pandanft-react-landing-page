import React from "react";
import ethereum_classic from '../media/ethereum-classic-(etc).svg';
import classes from "./style/artistCard.module.css";
export default function ArtistCard({ content }) {
  const { cardPfImg, Title, count, cardbg } = content;
  return (
    <div className={`${classes.card}`}>
      <div className={`${classes.card_bg}`} style={{background:`url(${cardbg})`}}></div>
          <div className={`${classes.card_body} text-center`}>
              <figure className={`${classes.cardPfImg}`}><img src={cardPfImg} alt="" /></figure>
              <p className={`mb-2 ${classes.card_title}`}>{Title}</p>
              <p>
                  <span className="me-3"><img src={ethereum_classic} alt="" /></span>
                  <span>{ count }k</span>
              </p>
          </div>
    </div>
  );
}
