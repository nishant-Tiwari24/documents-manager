import React from 'react'
import Card from './Card'

function Foreground() {
  
  const data= [
    {desc: "Lorem ipsum dolor sit amet lorem20 elit.", 
    size:".4mb", 
    close: true,
    tag: {isOpen:true, tagTitle:"Download Now", tagColor:"blue"},
  },
  {desc: "Lorem ipsum dolor sit amet lorem20 elit.", 
  size:".4mb", 
  close: true,
  tag: {isOpen:true, tagTitle:"Download Now", tagColor:"green"},
},
{desc: "Lorem ipsum dolor sit amet lorem20 elit.", 
size:".4mb", 
close: true,
tag: {isOpen:true, tagTitle:"Download Now", tagColor:"green"},
},
{desc: "Lorem ipsum dolor sit amet lorem20 elit.", 
size:".4mb", 
close: true,
tag: {isOpen:true, tagTitle:"Upload", tagColor:"blue"},
},
{desc: "Lorem ipsum dolor sit amet lorem20 elit.", 
size:".4mb", 
close: true,
tag: {isOpen:true, tagTitle:"Download Now", tagColor:"blue"},
},
{desc: "Lorem ipsum dolor sit amet lorem20 elit.", 
size:".4mb", 
close: true,
tag: {isOpen:true, tagTitle:"Upload", tagColor:"green"},
},
{desc: "Lorem ipsum dolor sit amet lorem20 elit.", 
size:".4mb", 
close: true,
tag: {isOpen:true, tagTitle:"Download Now", tagColor:"blue"},
},
{desc: "Lorem ipsum dolor sit amet lorem20 elit.", 
size:".4mb", 
close: true,
tag: {isOpen:true, tagTitle:"Upload", tagColor:"green"},
},
{desc: "Lorem ipsum dolor sit amet lorem20 elit.", 
size:".4mb", 
close: true,
tag: {isOpen:true, tagTitle:"Download Now", tagColor:"blue"},
},

  ];
  
  return (
    <div className='fixed z-[3] top-0 left-0 w-full h-full flex py-10 px-2 gap-10  flex-wrap'>
      {data.map((item,index)=>(
        <Card data={item}
        />
      ))}
    </div>
  )
}

export default Foreground
