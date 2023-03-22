import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import ReactPlayer from "react-player";

const Shorts = () => {
  const contextData = useContext(UserContext);
  const { homePageQuery } = contextData;
  const [data, setData] = useState([]);
  const videoRef = useRef()
  let history = JSON.parse(localStorage.getItem("historyData")) || [];
  let videoData = JSON.parse(localStorage.getItem("youtubeVideo")) || [];
  const API = process.env.REACT_APP_API_3;
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=youtube_shorts&type=video&key=${API}&maxResults=1&autoplay=true`
      )
      .then((response) => {
        setData(response.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const handleClick = (e) => {
    history.push(e);
    localStorage.setItem("youtubeVideo", JSON.stringify(e));
    localStorage.setItem("historyData", JSON.stringify(history));
  };

  return (
    <div className="ml-7">
      <div className="flex pt-[80px]">
        <div className="lg:w-[10%] w-[13%]"></div>
        <div className=" mx-auto w-[30%]">
          {data.map((e) => {
            return (
              <>
                <div className="flex w-[100%]">
                  <div className="w-[85%]">
                  <iframe
                  ref={videoRef}
                    allow='autoplay; encrypted-media'
                    onClick={() => handleClick(e)}
                    className="h-screen rounded-[14px]"
                    // ?autoplay=1
                    src={`https://www.youtube.com/embed/${e.id.videoId}`}
                  ></iframe>
                </div>
                <div className="h-screen flex flex-col">
                <div className="mt-auto">
                  <div>
                    <div className="bg-[#f2f2f2] p-3 rounded-[50%] my-3 w-[45px] mx-auto"><img className="" src="https://cdn-icons-png.flaticon.com/512/39/39508.png"></img></div>
                    <p className="text-[15px] text-center">1.5M</p>
                  </div>
                  <div>
                  <div className="bg-[#f2f2f2] p-3 rounded-[50%] my-3 w-[45px] mx-auto"><img src="https://cdn.onlinewebfonts.com/svg/img_529680.png"></img></div>
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
