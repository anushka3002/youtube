import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import Skeleton from "react-loading-skeleton";

const Searchpage = () => {
  const value = useContext(UserContext);
  const { searchedData, loader } = value;
  let history = JSON.parse(localStorage.getItem("historyData")) || []

  const handleClick = (e) => {
    history.push(e)
    localStorage.setItem("youtubeVideo", JSON.stringify(e));
    localStorage.setItem("historyData",JSON.stringify(history))
  };

  return (
    <div className="ml-28 pt-[80px]">
      <p>Filters</p>
      {searchedData.map((e) => {
        return (
          <div className=" flex w-[100%]">
            {loader ? (
              <div className="w-[40%] mb-4">
                <Skeleton height="190px" width="full" />
              </div>
            ) : (
              <div className="w-[30%] mb-4">
                <Link to="/videopage">
                  <img
                    onClick={() => handleClick(e)}
                    className="h-[190px] w-full object-cover rounded-[14px]"
                    src={e.snippet.thumbnails.high.url}
                  ></img>
                </Link>
              </div>
            )}
            {loader ? (
              <div className="ml-2 w-full">
                <Skeleton height="20px" width="40%" />
                <Skeleton height="20px" width="30%" />
                <Skeleton height="20px" width="60%" />
              </div>
            ) : (
              <div className="ml-2">
                <p className="text-[17px] mt-2">{e.snippet.title}</p>
                <p className="text-[12px] text-[#616161] font-medium mt-2">
                  {e.snippet.channelTitle}
                </p>
                <p className="text-[12px] text-[#616161] font-medium mt-2 truncate">
                  {e.snippet.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Searchpage;
