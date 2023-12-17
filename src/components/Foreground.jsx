import React from 'react'
import Card from './Card'

function Foreground() {
  const data= [
    {desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    size:".4mb", 
    close: "true",
    tag: {isOpen:"true", tagTitle:"Download Now", tagColor:"green"},
  }
  ];
  
  return (
    <div className='fixed z-[3] top-0 left-0 w-full h-full'>
        {data.map((item, index)=>(
          <Card data={item}/>
        ))}
    </div>
  )
}

export default Foreground
