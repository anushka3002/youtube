import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'

const Homepage = () => {
  const contextData = useContext(UserContext);
  const { homePageQuery } = contextData;
  const [data,setData] = useState([])
  let history = JSON.parse(localStorage.getItem("historyData")) || []
  const API = process.env.REACT_APP_API_3
  console.log(API,"api check")
  useEffect(()=>{
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${homePageQuery}&type=video&key=${API}&maxResults=2`).then((response)=>{
      // console.log(response.data.items)
      setData(response.data.items)
    }).catch((err)=>{
      console.log(err)
    })
  },[homePageQuery])

  const handleClick=(e)=>{
    history.push(e)
    localStorage.setItem("youtubeVideo",JSON.stringify(e))
    localStorage.setItem("historyData",JSON.stringify(history))
  }


  return (
    <div className='ml-7'>
    <div className='flex pt-[120px]'>
      <div className='lg:w-[10%] w-[13%]'>
      </div>
      <div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {data.map((e)=>{
          return(
            <>
            <Link to="videoPage"><div className='mb-10'>
              <img onClick={()=>handleClick(e)} className='w-[90%] h-[190px] object-cover rounded-[14px]' src={e.snippet.thumbnails.high.url}></img>
              <p className='text-[14px] font-medium mt-2'>{e.snippet.title}</p>
              <p className='text-[12px] text-[#616161] font-medium mt-2'>{e.snippet.channelTitle}</p>
            </div></Link>
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