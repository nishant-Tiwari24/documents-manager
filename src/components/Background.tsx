import React from 'react'

function Background() {
  return (
    <div className='w-full h-screen fixed z-[2] bg-zinc-800'>
      <div className='py-10 absolute text-zinc-500 text-center left-1/2 text-[19px] top-[5%] hover:text-[21px] ease-in duration-300 -translate-x-[50%]'>Document Manager</div>
      <h1 className='text-[15rem] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] tracking-tighter font-bold text-zinc-900'>DOCS</h1>
    </div>
  )
}

export default Background
