import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import Sidebar from './sidebar'

const Homepage = () => {

  const [data,setData] = useState([])
  const APIR="AIzaSyDWSt2KeKOG_TXP2vl6Xcm56YCgO9dzEBE";
  useEffect(()=>{
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=programming&type=video&key=${APIR}&maxResults=20`).then((response)=>{
      console.log(response.data.items)
      setData(response.data.items)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const handleClick=(videoId)=>{
    console.log("anushka",videoId)
    localStorage.setItem("youtubeVideo",JSON.stringify(videoId))
  }

  return (
    <div className='ml-7'>
    <div className='flex pt-[120px]'>
      <div className='w-[10%]'>
      </div>
      <div>
      <div className='grid grid-cols-4'>
        {data.map((e)=>{
          return(
            <>
            <div className='mb-10'>
              <Link to="/videopage"><img onClick={()=>handleClick(e.id.videoId)} className='w-[90%] h-[149px] object-cover rounded-[14px]' src={e.snippet.thumbnails.high.url}></img></Link>
              <p className='text-[14px] font-medium mt-2'>{e.snippet.title}</p>
              <p className='text-[12px] text-[#616161] font-medium mt-2'>{e.snippet.channelTitle}</p>
            </div>
            </>
          )
        })}
      </div>
      </div>
      </div>
    </div>
  )
}

export default Homepage