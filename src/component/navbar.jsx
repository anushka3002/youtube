import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { UserContext } from "../App";

const Navbar = () => {
  const tabs = ["All", "Mixes", "Music", "Comedy", "Gaming", "Lofi", "Entertainment", "Bollywood", "Cricket","New","Pop", "Lessons","King","Badshah"]
  const navigate = useNavigate(); 
  const location = useLocation();
  const [searchedItem,setSearchedItem] = useState([])
  console.log(location.pathname,"pathname")
  const contextData = useContext(UserContext)
  const {value,setValue,handleSearch,userPic,setUserPic,userDropdown,setUserDropdown} = contextData;
  const signedUser = JSON.parse(localStorage.getItem("google user")) || []
  console.log(signedUser,"signeduser")

  const handleChange = (e) =>{
    setValue(e.target.value)
  }

  const handleKeyDown = (e) =>{
    if(e.key === "Enter" && e.target.value.length>0){
      handleSearch()
      console.log(value)
    }
  }

  console.log(signedUser,"signed usere")

  useEffect(()=>{
    signedUser.length!=0 && setUserPic(userPic)
    signedUser.length!=0 && console.log("success")
  },[userPic])

  return (
    <div className="fixed w-full z-10 bg-[white]">
      <div className="py-2 flex justify-between px-5">
        <div className="flex justify-between my-auto">
          <div className="ml-12 w-[90px] h-[18px]">
            <img
            className="cursor-pointer"
              onClick={()=>navigate("/")}
              src="https://149504167.v2.pressablecdn.com/wp-content/uploads/2019/10/2000px-YouTube_Logo_2017.svg_.png"
            />
          </div>
        </div>
        <div className="flex w-[50%] rounded-[20px]">
            <div className="flex w-full bg-[#f8f8f8] border rounded-[20px]">
              <input onChange={handleChange} onKeyDown={handleKeyDown} type="text" placeholder="Search" className="border w-[90%] px-2 py-2 rounded-l-[20px]"></input>
              <div className="w-[20px] h-[10px] mx-auto mt-2">
              <img onClick={value.length>0 && handleSearch} src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"></img>
              </div>
            </div>
          <div><img className="w-[10px] h-[20px] ml-4 mt-2" src="https://images.all-free-download.com/images/graphiclarge/microphone_icon_clip_art_9684.jpg"></img></div>
        </div>
        <div className="flex">
          <div className="w-[22px] h-[12px] mt-2 ml-5">
          <img
            id="create"
            src="https://static.thenounproject.com/png/3750242-200.png"
          />
          </div>
          <div className="w-[20px] h-[10px] mt-2 ml-5">
          <img
            id="icon"
            src="https://cdn-icons-png.flaticon.com/512/3239/3239958.png"
          />
          </div>
          <div className="w-[35px] h-[35px] ml-5">
           <img
            className="rounded-[50%]"
            onClick={()=>setUserDropdown(true)}
            id="icon"
            src={userPic}
          />
          </div>
        </div>
      </div>
      {location.pathname === "/" && <div className='flex px-4 my-3 ml-16'>
        {tabs.map((e)=>{
          return(
            <div className=''>
            <button className='rounded-[5px] mx-2 px-3 py-1 bg-[#f2f2f2] text-[14px]'>{e}</button>
            </div>
          )
        })}
      </div>}
      <div className={`${userDropdown?"block":"hidden"} fixed right-8 border p-4 mt-[-60px] bg-[white] rounded-[15px] shadow-lg`}>
        <button className="w-full mx-auto flex justify-center text-[14px] border-b rounded-[5px] px-3 py-2">Sign Up</button>
        <p className="text-center">or</p>
         {/* <Google_auth/> */}
      </div>
    </div>
  );
};

export default Navbar;
