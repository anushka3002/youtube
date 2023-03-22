import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Library = () => {
  let contextData = useContext(UserContext);
  const { userPic, google_user } = contextData;
  let history = JSON.parse(localStorage.getItem("historyData"));

  const unique = history.filter(
    (obj, index) =>
      history.findIndex((item) => item.id.videoId === obj.id.videoId) === index
  );
  const handleClick = (e) => {
    localStorage.setItem("youtubeVideo", JSON.stringify(e));
  };
  console.log(unique, "data data");

  return (
    <div className="ml-7">
      <div className="flex pt-[80px]">
        <div className="lg:w-[8%] w-[13%]"></div>
        <div className="w-[68%]">
          <div className="flex justify-between">
            <Link to="/history">
              <div className="flex">
                <img
                  className="w-[23px] h-[20px]"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/history-line-icon.png"
                ></img>
                <p className="ml-2 text-[16px] font-medium">History</p>
              </div>
            </Link>
            <Link to="/history">
              <div>
                <p className="font-medium text-[14px] text-[#1067d6] hover:bg-[#cbe6f7] cursor-pointer hover:rounded-[20px] px-4 py-1">
                  See all
                </p>
              </div>
            </Link>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-4">
            {unique.slice(0).reverse().map((e) => {
              return (
                <>
                  <div className="mb-10">
                    <Link to="/videoPage"><img
                    onClick={() => handleClick(e)}
                      className="w-[95%] h-[110px] object-cover rounded-[14px]"
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
        <div className="w-[15%] mx-auto mt-[70px] mx-6">
          <div>
            <img className="w-[44%] mx-auto rounded-[50%]" src={userPic}></img>
            <p className="text-center mt-2">{google_user.name.split(" ")[0]}</p>
          </div>
          <div className="flex border-t justify-between text-[12px] py-2 mt-6">
            <p>Subscriptions</p>
            <p>333</p>
          </div>
          <div className="flex border-t justify-between text-[12px] py-2">
            <p>Uploads</p>
            <p>0</p>
          </div>
          <div className="flex border-y justify-between text-[12px] py-2">
            <p>Likes</p>
            <p>1,987</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
