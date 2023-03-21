import React from "react";
import { Link } from "react-router-dom";

const History = () => {
  let history = JSON.parse(localStorage.getItem("historyData"));
  const unique = history.filter(
    (obj, index) =>
      history.findIndex((item) => item.id.videoId === obj.id.videoId) === index
  );
  const handleClick = (e) => {
    localStorage.setItem("youtubeVideo", JSON.stringify(e));
  };

  return (
    <div className="ml-28 pt-[80px] flex">
      <div className="w-[50%]">
        <p className="ml-2 text-[16px] font-medium mb-4">Watch History</p>
        {unique.map((e) => {
          return (
            <div className=" flex w-full">
              <div className="w-[50%] mb-4">
                <Link to="/videopage">
                  <img
                    onClick={() => handleClick(e)}
                    className="h-[130px] w-[95%] object-cover rounded-[14px]"
                    src={e.snippet.thumbnails.high.url}
                  ></img>
                </Link>
              </div>
              <div className="ml-2 w-[50%]">
                <p className="text-[17px] mt-2">{e.snippet.title}</p>
                <p className="text-[12px] text-[#616161] font-medium mt-2">
                  {e.snippet.channelTitle}
                </p>
                <p className="text-[12px] text-[#616161] font-medium mt-2 truncate">
                  {e.snippet.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[30%] ml-[15%] mr-[5%]">
        <div className="flex border-b border-[#1a343a] pb-2 w-[70%]">
          <img
            className="my-auto w-[15px] h-[15px] mr-2"
            src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
          ></img>
          <input placeholder="Search watch history"></input>
        </div>
        <div className="flex justify-between py-3 mt-6">
          <p>History type</p>
          <p>333</p>
        </div>
        <div className="flex border-t justify-between text-[14px] py-4">
          <p>Watch history</p>
          <p>0</p>
        </div>
        <div className="flex border-y justify-between text-[14px] py-4">
          <p>Community</p>
          <p>1,987</p>
        </div>
        <button className="flex my-auto bg-[#f2f2f2] px-3 py-2 rounded-[15px] font-medium text-[14px] my-4">
          <img
            className="my-auto w-[15px] h-[15px] mr-2"
            src="https://www.svgrepo.com/show/21045/delete-button.svg"
          ></img>
          Clear all watch history
        </button>
        <button className="flex my-auto bg-[#f2f2f2] px-3 py-2 rounded-[15px] font-medium text-[14px] my-4">
          <img
            className="my-auto w-[15px] h-[15px] mr-2"
            src="https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/pause-button-icon.png"
          ></img>
          Pause watch history
        </button>
        <button className="flex my-auto bg-[#f2f2f2] px-3 py-2 rounded-[15px] font-medium text-[14px] my-4">
          <img
            className="my-auto w-[15px] h-[15px] mr-2"
            src="https://cdn-icons-png.flaticon.com/512/126/126472.png"
          ></img>
          Manage watch history
        </button>
        <p className="text-[14px] text-[#6b6b6b] font-medium ml-10">
          Watch and search history
        </p>
        <p className="text-[14px] text-[#6b6b6b] font-medium ml-10 mt-5">
          Comments
        </p>
        <p className="text-[14px] text-[#6b6b6b] font-medium ml-10 mt-5">
          Live chat
        </p>
      </div>
    </div>
  );
};

export default History;
