import React from 'react'
import Logo from './logo'
export default function AboutWidget({children  , ...rest}) {
  return (
    <>
      <Logo />
   <p {...rest}  > {children}</p>
    </>
  )
}
