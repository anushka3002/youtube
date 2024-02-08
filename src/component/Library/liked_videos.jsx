import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContextData } from "../../context/get-user-context";

const LikedVideos = () => {
  let liked_videos = JSON.parse(localStorage.getItem("likedVideos"));
  console.log(liked_videos,"liked")
  const { google_user } = UserContextData();
  const [uniqueLiked,setUniqueLiked] = useState([])

  useEffect(()=>{
    let uniqueData = liked_videos?.filter(
      (obj, index) =>
      liked_videos?.findIndex((item) => item.id.videoId === obj.id.videoId) === index
    );
    setUniqueLiked(uniqueData)
  },[])

  const handleClick = (e) => {
    localStorage.setItem("youtubeVideo", JSON.stringify(e));
  };

  return (
    <div className="ml-28 pt-[80px] flex">
        {liked_videos ? <div class="relative w-[30%] h-[450px] bg-center">
        <div
        //  style={{backgroundImage: `url(${liked_videos[liked_videos.length-1].snippet.thumbnails.high.url})`}}
            class="w-full h-full bg-cover bg-center bg-[length:500px_700px] bg-gradient-to-b from-[grey] via-red-500 to-[grey] bg-opacity-75 rounded-[15px]">
        </div>
        <div
            class="absolute top-1 mx-auto w-[90%] left-0 right-0">
            {liked_videos ? <img
            // onClick={() => handleClick(e)}
            className="w-full h-[170px] mx-auto mt-5 object-cover rounded-[10px]"
            src={liked_videos[liked_videos?.length-1].snippet.thumbnails.high.url}
            ></img> : <></>}
            <p className="text-[25px] mt-2 font-bold text-[white]">Liked videos</p>
            <p className="mt-2 text-[17px] text-[white] font-medium">{google_user.name}</p>
            <p className="mt-2 text-[13px] text-[white]">{liked_videos?.length} videos&nbsp; No views&nbsp; Updated today</p>
            <div className="flex my-3">
            <img className="w-[40px] bg-[white] bg-opacity-25 my-auto p-3 rounded-[50%]" src="https://cdn-icons-png.flaticon.com/512/3917/3917330.png"></img>
            <img className="ml-3 w-[40px] bg-[white] bg-opacity-25 my-auto p-3 rounded-[50%]"  src="https://static.thenounproject.com/png/2854151-200.png"></img>
            </div>
            <div className="justify-between w-full flex mt-2">
              <button className="bg-white text-center py-2 rounded-[20px] w-[48%] mr-[2%] flex justify-center"><img className="w-[22px] mr-1 my-auto" src="https://static.thenounproject.com/png/1192916-200.png"></img><p className="ml-1">Play all</p></button>
              <button className="bg-white bg-opacity-25 text-center py-2 rounded-[20px] w-[48%] ml-[2%] flex justify-center"><img className="w-[22px] mr-1 my-auto" src="https://www.shareicon.net/data/2016/03/27/465669_media_256x256.png"></img><p className="ml-1 text-[white] font-medium">Shuffle</p></button>
            </div>
        </div>
    </div> : <></>}
      <div className="w-[60%]  ml-9">
        {uniqueLiked?.length>0 ? uniqueLiked?.slice(0).reverse().map((e,index) => {
          return (
            <div className=" flex mb-4 w-full">
                <p className="my-auto text-[grey] font-medium mr-4">{index+1}</p>
              <div className="w-[25%]">
                <Link to="/videopage">
                  <img
                    onClick={() => handleClick(e)}
                    className="h-[90px] w-[100%] object-cover rounded-[7px]"
                    src={e.snippet.thumbnails.high.url}
                  ></img>
                </Link>
              </div>
              <div className="ml-2 w-[75%]">
                <p className="text-[15px] font-medium">{e.snippet.title}</p>
                <p className="text-[12px] text-[#616161] mt-2">
                  {e.snippet.channelTitle}
                </p>
                {/* <p className="text-[12px] text-[#616161] font-medium mt-2 truncate">
                  {e.snippet.description}
                </p> */}
              </div>
            </div>
          );
        }) : <div className="text-[grey]">You have not liked any videos yet</div>}
      </div>
     
    </div>
  );
};

export default LikedVideos;
