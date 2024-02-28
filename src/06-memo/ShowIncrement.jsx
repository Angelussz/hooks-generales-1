import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    console.log("me volvi a generar")
  return (
    <button onClick={()=>{
        increment()
    }}>
        Incrementar
    </button>
  )
})
