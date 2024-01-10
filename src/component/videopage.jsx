import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContextData } from "../context/get-user-context";

const Videopage = () => {
  const { searchedData } = UserContextData();
  const liked_videos = JSON.parse(localStorage.getItem("likedVideos")) || []
  const videoData = JSON.parse(localStorage.getItem("youtubeVideo")) || [];
  const history = JSON.parse(localStorage.getItem("historyData")) || [];
  const subscribed_videos = JSON.parse(localStorage.getItem("subscribedVideos")) || []
  const [like, setLike] = useState(false);
 
  const [dislike, setDislike] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(videoData);
   const [subscribed, setSubscribed] = useState(false);
  const [alreadySub,setAlreadySub] = useState(false)
  const [alreadyLiked,setAlreadyLiked] = useState(false)
  const handleClick = (e) => {
    history.push(e);
    localStorage.setItem("youtubeVideo", JSON.stringify(e));
    setSelectedVideo(e);
    localStorage.setItem("historyData", JSON.stringify(history));
  };

  const handleLike = (selectedVideo)=>{
    // if(like==true){
      liked_videos.push(selectedVideo)
      console.log(liked_videos,"liked videos")
      localStorage.setItem("likedVideos",JSON.stringify(liked_videos))
    // }
    // else{
    //   liked_videos.pop()
    //   console.log("poped",liked_videos)
    //   localStorage.setItem("likedVideos",JSON.stringify(liked_videos))
    // }
  }

  console.log(liked_videos,"like")

  const sub = ()=>{
    subscribed_videos.forEach((e)=>{
      if(e.id.videoId===selectedVideo.id.videoId){
        setAlreadySub(true)
      }
      else{
        setAlreadySub(false)
      }
    })
  }

  const liked = ()=>{
    liked_videos.forEach((e)=>{
      if(e.id.videoId===selectedVideo.id.videoId){
        console.log(e.id.videoId,selectedVideo.id.videoId)
        setLike(true)
      }
      else{
        setLike(false)
      }
    })
  }

  useEffect(()=>{
    sub()
    // liked()
  },[selectedVideo])

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
              {/* {Math.floor(Math.random() * 10)+1}M subscribers */}
              10K subscribers
              </p>
            </div>
            {alreadySub ? (
              <button onClick={() =>{ setAlreadySub(!alreadySub);subscribed_videos.pop();localStorage.setItem("subscribedVideos",JSON.stringify(subscribed_videos))}} className="flex bg-[#f2f2f2] text-[#000000] rounded-[17px] px-4 h-[75%] my-auto text-[14px] font-medium ml-10">
              <img
                className="my-auto w-[20px] h-[20px]"
                src="https://www.citypng.com/public/uploads/small/11640343342ezruhtak2eqlwlpjvcpusdulgnjntqoijktm8vfk5lbowzhwm6ufti9vdjag8t9cmwug2birxqxklbv1ykfpnntupqtdhizrrpfr.png"
              ></img>
              <p className="my-auto px-2">Subscribed</p>
              <img
                className="my-auto w-[15px] h-[15px]"
                src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
              ></img>
            </button>
            ) : (
              <button
                onClick={() => {setAlreadySub(!alreadySub);subscribed_videos.push(selectedVideo);localStorage.setItem("subscribedVideos",JSON.stringify(subscribed_videos))}}
                className="bg-[#000000] text-[#ffffff] rounded-[17px] px-4 h-[75%] my-auto text-[14px] font-medium ml-10"
              >
                Subscribe
              </button>
            )}
          </div>
          <div className="flex">
            <div className="flex bg-[#f2f2f2] rounded-[25px] h-[75%] my-auto">
              <div
                onClick={() => {
                  setLike(!like);
                  handleLike(selectedVideo)
                  dislike && setDislike(!dislike);
                }}
                className=" p-2 flex cursor-pointer"
              >
                <img
                  className="w-[20px] h-[20px] mx-2"
                  src={`${
                    like
                      ? "https://www.freeiconspng.com/thumbs/like-button-png/like-button-png-26.png"
                      : "https://cdn-icons-png.flaticon.com/512/126/126473.png"
                  }`}
                  alt="like"
                ></img>
                <p className="text-center my-auto border-r pr-2 text-[15px]">
                  {/* {Math.floor(Math.random() * 10)+1}K */}
                  3K
                </p>
              </div>
              <div
                onClick={() => {
                  setDislike(!dislike);
                  liked_videos.pop(selectedVideo)
                  localStorage.setItem("likedVideos",JSON.stringify(liked_videos))
                  like && setLike(!like);
                }}
                className="py-2 pr-2 cursor-pointer"
              >
                <img
                  className="w-[20px] h-[20px] mx-2"
                  src={`${
                    dislike
                      ? "https://www.freeiconspng.com/thumbs/youtube-dislike-png/black-and-white-youtube-dislike-png-icon-22.png"
                      : "https://cdn-icons-png.flaticon.com/512/126/126504.png"
                  }`}
                  alt="dislike"
                ></img>
              </div>
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
