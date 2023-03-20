import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
import Navbar from './navbar'
import Sidebar from './sidebar'

const Homepage = () => {
  // AIzaSyDViP2uCSVcLTE7wHU3nkIenYFRQeOkq2o
  const contextData = useContext(UserContext);
  const { searchedData,value,setValue,handleSearch } = contextData;
  const [data,setData] = useState([])
  const APIR="AIzaSyDViP2uCSVcLTE7wHU3nkIenYFRQeOkq2o";
  useEffect(()=>{
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=programming&type=video&key=${APIR}&maxResults=20`).then((response)=>{
      console.log(response.data.items)
      setData(response.data.items)
    }).catch((err)=>{
      console.log(err)
    })
    console.log("expensive fetching")
  },[])

  const handleClick=(e)=>{
    console.log("anushka",e)
    localStorage.setItem("youtubeVideo",JSON.stringify(e))
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
            <div className='mb-10'>
              <Link to="/videopage"><img onClick={()=>handleClick(e)} className='w-[90%] h-[190px] object-cover rounded-[14px]' src={e.snippet.thumbnails.high.url}></img></Link>
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