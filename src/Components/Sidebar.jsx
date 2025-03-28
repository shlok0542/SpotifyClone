import React from 'react'
import {ArrowRightIcon, Home, Library, Plus, Search} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-[25%] h-full pr-2 flex-col gap-2 text-while hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
           <Home/>
           <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
           <Search/>
           <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='bg-[#121212] h-[90%] rounded'>
        <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <Library/>
            <p className='font-semibold'>Your Library</p>
            </div>
            <div className='flex items-center gap-3'>
                <ArrowRightIcon/>
                <Plus/>
            </div>
        </div>
        <div className='p-2 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
           <h1>Create your first playlist</h1>
           <p className='font-light'>it's easy we will help you</p>
           <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer'>Create Playlist</button>
        </div>
        <div className='p-2 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
           <h1>Let's find some posdcasts to follow</h1>
           <p className='font-light'>we'll keep you update on new episodes</p>
           <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer'>Browse podcasts</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
