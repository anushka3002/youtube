import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { UserContextData } from "../context/get-user-context";

const Shorts = () => {
  const { homePageQuery } = UserContextData();
  const [data, setData] = useState([]);
  const videoRef = useRef()
  let history = JSON.parse(localStorage.getItem("historyData")) || [];
  let videoData = JSON.parse(localStorage.getItem("youtubeVideo")) || [];
  const liked_videos = JSON.parse(localStorage.getItem("likedVideos")) || []
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  let e=0
  const handleLike = (e)=>{
    liked_videos.push(e)
    localStorage.setItem("likedVideos",JSON.stringify(liked_videos))
  }

  const API = process.env.REACT_APP_API_2;
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=youtube_shorts_coding&type=video&key=${API}&maxResults=10&autoplay=true`
      )
      .then((response) => {
        setData(response.data.items);
        console.log(response.data.items,"items")
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  useEffect(() => {
    const handleClick = (event) => {
      const videoElement = videoRef.current;
      if (event.target === videoElement) {
        const index = data.findIndex((e) => e.id.videoId === videoElement.src.split('/').pop());
        const video = data[index];
      }
    };
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('click', handleClick);
      return () => {
        videoElement.removeEventListener('click', handleClick);
      };
    }
  }, [data]);

  const handleClick = (e) => {
    console.log('in history')
    history.push(e);
    localStorage.setItem("youtubeVideo", JSON.stringify(e));
    localStorage.setItem("historyData", JSON.stringify(history));
  };

  return (
    <div className="ml-7">
      <div className="flex pt-[80px]">
        <div className="lg:w-[10%] w-[13%]"></div>
        <div className=" mx-auto w-[30%]">
          {data.map((e,index) => {
            return (
              <>
                <div className="flex w-[100%] height-s">
                  <div className="w-[100%]">
                  <iframe
                  ref={videoRef}
                    allow='autoplay; encrypted-media'
                    // onClick={() => handleClick(e)}
                    className="h-[95%] rounded-[14px] w-[100%]"
                    // ?autoplay=1
                    data-index={index}
                    src={`https://www.youtube.com/embed/${e.id.videoId}`}
                  ></iframe>
                </div>
                <div className="h-[95%] justify-content-end flex flex-col ml-2">
                <div className="mt-auto">
                  <div>
                    <div onClick={() => {
                  setLike(!like);
                  handleLike(e)
                  dislike && setDislike(!dislike);
                }} className="bg-[#f2f2f2] p-3 rounded-[50%] my-3 w-[45px] mx-auto"><img className="" src={`${
                    like
                      ? "https://www.freeiconspng.com/thumbs/like-button-png/like-button-png-26.png"
                      : "https://cdn-icons-png.flaticon.com/512/126/126473.png"
                  }`}></img></div>
                    <p className="text-[15px] text-center">1.5M</p>
                  </div>
                  <div>
                  <div onClick={() => {
                  setDislike(!dislike);
                  liked_videos.pop(e)
                  localStorage.setItem("likedVideos",JSON.stringify(liked_videos))
                  like && setLike(!like);
                }} className="bg-[#f2f2f2] p-3 rounded-[50%] my-3 w-[45px] mx-auto"><img  src={`${
                    dislike
                      ? "https://www.freeiconspng.com/thumbs/youtube-dislike-png/black-and-white-youtube-dislike-png-icon-22.png"
                      : "https://cdn-icons-png.flaticon.com/512/126/126504.png"
                  }`}></img></div>
                    <p className="text-[15px] text-center">Dislike</p>
                  </div>
                  <div>
                  <div className="bg-[#f2f2f2] p-3 rounded-[50%] my-3 w-[45px] mx-auto"><img src="https://cdn-icons-png.flaticon.com/512/60/60782.png"></img></div>
                    <p className="text-[15px] text-center">1.4K</p>
                  </div>
                  <div>
                  <div className="bg-[#f2f2f2] p-3 rounded-[50%] my-3 w-[45px] mx-auto"><img src="https://cdn-icons-png.flaticon.com/512/7420/7420852.png"></img></div>
                    <p className="text-[15px] text-center">Share</p>
                  </div>
                  <div className="bg-[#f2f2f2] px-3 py-4 rounded-[50%] my-2 w-[45px] mx-auto">
              <img
                src="https://voltamagazine.files.wordpress.com/2018/02/2000px-simple_icon_ellipsis-svg.png?w=1920&h=692&crop=1"
              ></img>
            </div>
                </div>
                </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shorts;
