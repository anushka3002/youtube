import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import Sidebar from './sidebar'

const Homepage = () => {

  const tabs = ["All", "Mixes", "Music", "Comedy", "Gaming", "Lofi", "Ed-Sheeren", "Bollywood Music", "Indian Music","New","Pop Music", "Lessons"]
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
    <div>
    <div className='flex '>
      <div className='w-[6%]'>
      <Sidebar/></div>
      <div>
    {/* Tabs section */}
      <div className='flex'>
        {tabs.map((e)=>{
          return(
            <div className=''>
            <button className='rounded-[5px] mx-2 px-3 py-2 bg-[#f2f2f2]'>{e}</button>
            </div>
          )
        })}
      </div>
      <div className='grid grid-cols-4'>
        {data.map((e)=>{
          return(
            <>
            <div>
              <Link to="/videopage"><img onClick={()=>handleClick(e.id.videoId)} className='w-[90%] h-[75%] rounded-[14px]' src={e.snippet.thumbnails.high.url}></img></Link>
              <p>{e.snippet.title}</p>
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