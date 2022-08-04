import React from 'react';
import { AnchorFillBtn } from './buttons';

export default function JoinNow({ content }) {
    const { btnText, Title, description } = content;
  return (
      <section className='py-3'>
          <div className={`container  py-2 `} style={{border:'2px solid #4373C5' , borderRadius:"10px"}} >
              <div className='text-center p-4 '>
              <h2 className={`fw-bold fs-1`} >{Title}</h2>
              <p className={`my-5 w-lg-75 w-100 text-center m-auto`} >{description}</p>
              <AnchorFillBtn to='/home'>{ btnText }</AnchorFillBtn>
              </div>
          </div>
    </section>
  )
}
