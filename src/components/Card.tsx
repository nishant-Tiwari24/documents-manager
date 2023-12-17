import React from 'react';
import { MdOutlineAttachFile } from "react-icons/md";
import { MdOutlineDownloadForOffline } from "react-icons/md";

function Card() {
  return (
    <div>
        <div className='relative w-60 h-72 rounded-[40px] px-8 py-10 bg-zinc-900/90 text-white p-5 overflow-scroll'>
        <MdOutlineAttachFile />
        <p className='text-sm leading-tight mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div className='w-full h-10 footer flex items-center mt-20 justify-between '>
            <p className='text-sm'>.4mb</p>
            <MdOutlineDownloadForOffline size={20} color='grey'/>    
        </div>
        <div className='w-full h-10 py-3 absolute bg-green-600 bottom-0 left-0 text-white'>
            <p className='text-center text-sm '>Download Now</p>
           
        </div>
        </div>
    </div>
  )
}

export default Card
