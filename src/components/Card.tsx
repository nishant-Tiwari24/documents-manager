import React from 'react';
import { MdOutlineAttachFile } from "react-icons/md";
import { MdOutlineDownloadForOffline } from "react-icons/md";

function Card(props) {
  return (
    <div>
        <div className='relative w-60 h-72 rounded-[40px] px-8 py-10 bg-zinc-900/90 text-gray-200 p-5 overflow-scroll border-solid border-[1px] border-zinc-500'>
        <MdOutlineAttachFile />
        <p className='text-sm leading-tight mt-5'></p>
        <div className='w-full h-10 footer flex items-center mt-20 justify-between '>
            <p className='text-sm'>.4mb</p>
            <MdOutlineDownloadForOffline size={20} color='grey'/>    
        </div>
        <div className='w-full h-10 py-3 absolute bg-green-600 bottom-0 left-0 text-white'>
            <p className='text-center text-[12px] '>Download Now</p>
           
        </div>
        </div>
    </div>
  )
}

export default Card
