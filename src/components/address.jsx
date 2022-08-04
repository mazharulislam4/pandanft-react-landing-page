import React from 'react'

export default function Address({ children, ...rest}) {
  return (
    <address {...rest} >{children}</address>
  )
}
