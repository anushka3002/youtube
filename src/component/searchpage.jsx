import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { UserContextData } from "../context/get-user-context";

const Searchpage = () => {
  const { searchedData, loader } = UserContextData();
  let navigate = useNavigate()
  let history = JSON.parse(localStorage.getItem("historyData")) || []

  const handleClick = (e) => {
    navigate("/videopage")
    history.push(e)
    localStorage.setItem("youtubeVideo", JSON.stringify(e));
    localStorage.setItem("historyData",JSON.stringify(history))
  };

  return (
    <div className="ml-28 pt-[80px] z-10">
      <div className="flex">
        <img className="w-[17px] h-[17px] my-auto" src="https://cdn.iconscout.com/icon/free/png-256/filter-1634626-1389150.png"></img>
        <p className="ml-3 font-medium">Filters</p>
      </div>
      <hr className="mt-2 mb-4 w-[80%]"></hr>
      {searchedData.map((e) => {
        return (
          <div onClick={() => handleClick(e)} className="flex cursor-pointer">
            {loader ? (
              <div className="w-[40%] mb-4">
                <Skeleton height="190px" width="full" />
              </div>
            ) : (
              <div className="mb-4 w-[40%]">
                {/* <Link to="/videopage"> */}
                  <img
                    className="h-[190px] w-[90%] object-cover rounded-[14px]"
                    src={e.snippet.thumbnails.high.url}
                  ></img>
                  {/* <p>searcged</p> */}
                {/* </Link> */}
              </div>
            )}
            {loader ? (
              <div className="w-[40%]">
                <Skeleton height="20px" width="40%" />
                <Skeleton height="20px" width="30%" />
                <Skeleton height="20px" width="60%" />
              </div>
            ) : (
              <div className="w-[40%]">
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
