import React from 'react';
import { MdOutlineAttachFile } from "react-icons/md";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import {motion} from "framer-motion";

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2} whileTap={{ scale: 0.8 }}>
        <div className='relative w-60 h-72 rounded-[40px] px-8 py-10 bg-zinc-900/50 text-gray-200 p-5 overflow-scroll'>
        <MdOutlineAttachFile />
        <p className='text-sm leading-tight mt-5'>{data.desc}</p>
        <div className='w-full h-10 footer flex items-center mt-20 justify-between '>
            <p className='text-sm'>{data.size}</p>
             {data.close ? (<IoMdCloseCircleOutline size={20} color='grey' /> ): (<MdOutlineDownloadForOffline size={20} color='grey'/>) }
        </div>
        {data.tag.isOpen && (
        <div className={`w-full h-10 py-3 absolute ${data.tag.tagColor === "blue" ? "bg-green-500" : "bg-blue-500"} bottom-0 left-0 text-white`}>
        <p className='text-center text-[12px] '>{data.tag.tagTitle}</p>
        </div>
        )}
        </div>
    </motion.div>
  )
} 

export default Card
