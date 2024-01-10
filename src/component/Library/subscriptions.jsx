import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Subscriptions = () => {
    const subscribed_videos = JSON.parse(localStorage.getItem("subscribedVideos")) || []
    const [subscriptions,setSubscriptions] = useState([])

    useEffect(()=>{
        let uniqueData = subscribed_videos.filter(
          (obj, index) =>
            subscribed_videos.findIndex((item) => item.id.videoId === obj.id.videoId) === index
        );
        setSubscriptions(uniqueData)
      },[])

    const handleClick = (e) => {
        localStorage.setItem("youtubeVideo", JSON.stringify(e));
      };
  return (
    <div className='ml-28 pt-[80px] mr-14'>
    <div className="flex justify-between">
    <Link to="/history">
      <div className="flex ">
        <p className="ml-2 text-[16px] font-medium">Today</p>
      </div>
    </Link>
    <Link to="/history">
      <div>
        <p className="mr-5 font-medium text-[14px] text-[#1067d6] hover:bg-[#cbe6f7] cursor-pointer hover:rounded-[20px] px-4 py-1">
          Manage
        </p>
      </div>
    </Link>
  </div>
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-4">
    {subscriptions.slice(0).reverse().map((e) => {
      return (
        <>
          <div className=" mb-10">
            <Link to="/videoPage"><img
            onClick={() => handleClick(e)}
              className="w-[85%] h-[120px] object-cover rounded-[14px]"
              src={e.snippet.thumbnails.high.url}
            ></img></Link>
            <p className="text-[14px] font-medium mt-2">
              {e.snippet.title}
            </p>
            <p className="text-[12px] text-[#616161] font-medium mt-2">
              {e.snippet.channelTitle}
            </p>
          </div>
        </>
      );
    })}
  </div>
  </div>
  )
}

export default Subscriptions