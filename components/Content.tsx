

import React from 'react'


interface ContentProps {
    headerText:String,
    headerMain:String,
    headerSecondary?:String,
    onMouseEnter: () => void,
    onMouseLeave: () => void
}

export default function Content({headerText,headerMain,headerSecondary,onMouseEnter,onMouseLeave}:ContentProps) {
  return (
    <div className='content'>
        <h1 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{headerText}</h1>
        <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{headerMain}</p>
        <p>{headerSecondary}</p>
    </div>
  )
}
