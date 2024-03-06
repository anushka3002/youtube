import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
import { useNavigate } from 'react-router-dom'
import { UserContextData } from '../context/get-user-context'

const Homepage = () => {
  const { homePageQuery,setValue,handleSearch } = UserContextData();
  const [data,setData] = useState([])
  const navigate=useNavigate()
  let history = JSON.parse(localStorage.getItem("historyData")) || []
  const API = process.env.REACT_APP_API_1
  useEffect(()=>{
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${homePageQuery}&type=video&key=${API}&maxResults=2`).then((response)=>{
      setData(response.data.items)
    }).catch((err)=>{
      console.log(err)
    })
  },[homePageQuery])

  const handleClick=(e)=>{
    setValue(e.snippet.title)
    navigate("/videopage")
    history.push(e)
    handleSearch(e.snippet.channelTitle)
    localStorage.setItem("youtubeVideo",JSON.stringify(e))
    localStorage.setItem("historyData",JSON.stringify(history))
  }

  console.log(API,'api')


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
              <img onClick={()=>handleClick(e)} className='w-[90%] h-[190px] object-cover rounded-[14px] cursor-pointer' src={e.snippet.thumbnails.high.url}></img>
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