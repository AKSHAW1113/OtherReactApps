import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    // We always giong to manage our state in parent component
    const [name, setName] = useState('')

  return (
    <>
        <Child name={name} setName={setName} />
        <p>I am indise parent component and the value of name is:: {name}</p>
    </>
  )
}

export default Parent