import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const Videopage = () => {
  const value = useContext(UserContext);
  const { searchedData } = value;
  let videoData = JSON.parse(localStorage.getItem("youtubeVideo")) || []
  const [selectedVideo,setSelectedVideo] = useState(videoData)
  console.log(videoData, "vis");
  const handleClick = (e) => {
    localStorage.setItem("youtubeVideo", JSON.stringify(e));
    setSelectedVideo(e)
  };

  useEffect(()=>{
    setSelectedVideo(videoData)
  },[videoData])

  return (
    <div className="flex w-[100%] pt-20">
      <div className="w-[8%]"></div>
      <div className="w-[50%] h-screen">
        <iframe
          className="w-full h-[63%]"
          allowFullScreen
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
        ></iframe>
        <p className="text-[18px] font-medium mt-2">
          {selectedVideo.snippet.title}
        </p>
        <div className="flex justify-between mt-2">
          <div className="flex">
            <img
              className="w-[50px] h-[50px] rounded-[50%]"
              src="https://static.vecteezy.com/system/resources/previews/000/649/327/original/vector-headphones-icon-symbol-sign.jpg"
              alt="dp"
            ></img>
            <div className="my-auto ml-2">
              <p className="text-[14px] font-medium">
                {selectedVideo.snippet.channelTitle}
              </p>
              <p className="text-[12px] text-[#616161] font-medium">
                5M subscribers
              </p>
            </div>
            <button className="bg-[black] text-[white] rounded-[17px] px-4 h-[75%] my-auto text-[14px] font-medium ml-10">
              Subscribe
            </button>
          </div>
          <div className="flex">
            <div className="flex bg-[#f2f2f2] p-2 rounded-[25px] h-[75%] my-auto">
              <img
                className="w-[20px] h-[20px] mx-2"
                src="https://cdn-icons-png.flaticon.com/512/126/126473.png"
                alt="like"
              ></img>
              <p className="text-center my-auto border-r pr-2 text-[15px]">
                14K
              </p>
              <img
                className="w-[20px] h-[20px] mx-2"
                src="https://cdn-icons-png.flaticon.com/512/126/126504.png"
                alt="dislike"
              ></img>
            </div>
            <div className="flex bg-[#f2f2f2] ml-4 p-2 rounded-[25px] h-[75%] my-auto">
              <img
                className="w-[20px] h-[20px]"
                src="https://cdn.iconscout.com/icon/free/png-256/share-2336520-1956482.png"
                alt="she"
              ></img>
              <p className="text-[15px]">Share</p>
            </div>
            <div className="flex bg-[#f2f2f2] ml-4 p-2 rounded-[25px] flex items-center h-[75%] my-auto">
              <img
                className="w-[20px] h-[10px]"
                src="https://voltamagazine.files.wordpress.com/2018/02/2000px-simple_icon_ellipsis-svg.png?w=1920&h=692&crop=1"
                alt="d"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-6 mt-[20px] w-[30%]">
        {searchedData.map((e) => {
          return (
            <div className="flex w-full mt-[-25px]">
              <div className="w-[50%]">
                <img
                  onClick={() => handleClick(e)}
                  className="cursor-pointer w-[100%] h-[75%] rounded-[14px] object-cover"
                  src={e.snippet.thumbnails.high.url}
                ></img>
              </div>
              <div className="ml-2 w-[50%]">
                <p className="text-[14px] mt-2 flex flex-wrap">
                  {e.snippet.title}
                </p>
                <p className="text-[12px] text-[#616161] font-medium mt-2">
                  {e.snippet.channelTitle}
                </p>
                {/* <p className='text-[12px] text-[#616161] font-medium mt-2 truncate'>{e.snippet.description}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videopage;
