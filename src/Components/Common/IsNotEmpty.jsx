import React from 'react'

const IsNotEmpty = (props, {children}) => {
  return (
    <div>{props && <div>{children}</div>}</div>
  )
}

export default IsNotEmpty;