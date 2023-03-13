import React, { useState } from "react";

const Navbar = () => {

  const [value,setValue] = useState("")
  const [updatedValue, setUpdatedValue] = useState("")

  const handleChange = (e) =>{
    setValue(e.target.value)
  }

  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
      setUpdatedValue(value)
      console.log(value)
    }
  }

  return (
    <div>
      <div className=" py-2 flex justify-between mx-5">
        <div className="flex justify-between w-[12%] my-auto">
          <div>
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuUG62nIlWV_nnpvNT8_sdmvSPfsqF9HU0Q&usqp=CAU"
              width="17px"
              height="17px"
            />
          </div>
          <div>
            <img
              src="https://149504167.v2.pressablecdn.com/wp-content/uploads/2019/10/2000px-YouTube_Logo_2017.svg_.png"
              width="90px"
              height="18px"
            />
          </div>
        </div>
        <div className="flex w-[50%] rounded-[20px]">
            <div className="flex w-full bg-[#f8f8f8] border rounded-[20px]">
              <input type="text" placeholder="Search" className="border w-[90%] px-2 py-2 rounded-l-[20px]"></input>
              <div className="w-[20px] h-[10px] mx-auto mt-2">
              <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"></img>
              </div>
            </div>
          <div><img className="w-[10px] h-[20px] ml-4 mt-2" src="https://images.all-free-download.com/images/graphiclarge/microphone_icon_clip_art_9684.jpg"></img></div>
        </div>
        <div className="flex justify-between w-[10%]">
          <div className="w-[22px] h-[12px] mt-2">
          <img
            id="create"
            src="https://static.thenounproject.com/png/3750242-200.png"
          />
          </div>
          <div className="w-[20px] h-[10px] mt-2">
          <img
            id="icon"
            src="https://cdn-icons-png.flaticon.com/512/3239/3239958.png"
          />
          </div>
          <div className="w-[35px] h-[35px]">
           <img
            id="icon"
            src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
