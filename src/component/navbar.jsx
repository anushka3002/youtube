import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Google_auth from "../auth/google";
import { UserContextData } from "../context/get-user-context";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  extendTheme,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const Navbar = () => {
  const tabs = [
    "All",
    "Mixes",
    "Music",
    "Comedy",
    "Gaming",
    "Lofi",
    "Entertainment",
    "Bollywood",
    "Cricket",
    "New",
    "Pop",
    "Lessons",
    "King",
    "Badshah",
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const {
    value,
    setValue,
    handleSearch,
    userPic,
    setUserPic,
    userDropdown,
    setUserDropdown,
    setHomePageQuery,
  } = UserContextData();
  const signedUser = JSON.parse(localStorage.getItem("google user")) || [];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isSmallMobile = true;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // useEffect(()=>{
  //   isOpen && SpeechRecognition.startListening()
  // },[isOpen])

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // useEffect(()=>{
  //   if(listening==true){
  //     console.log(isOpen,"is open inside useeffect")
  //     onOpen()
  //   }
  // },[listening])

  console.log(listening,"listening",isOpen,"is open outside")


  useEffect(() => {
    if(transcript.length>0){
      location.pathname!=="/searchpage" && navigate("/searchpage")
      setValue(transcript)
      handleSearch(transcript)
    }
    onClose();
  }, [!listening && transcript.length>0]);

  useEffect(() => {
    location.pathname == "/searchpage" && onClose();
  }, [location.pathname]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      navigate("/searchpage");
      handleSearch(e.target.value);
    }
  };

  if (listening == false) {
    setValue(transcript);
    // onClose()
  }

 
  return (
    <div className="fixed w-full bg-[#ffffff]">
      <div className="py-2 flex justify-between px-5">
        <div className="flex justify-between my-auto">
          <div className="ml-12 w-[90px] h-[18px]">
            <img
              className="cursor-pointer"
              onClick={() => navigate("/")}
              src="https://149504167.v2.pressablecdn.com/wp-content/uploads/2019/10/2000px-YouTube_Logo_2017.svg_.png"
            />
          </div>
        </div>
        <div className="flex w-[50%] rounded-[20px]">
          <div className="flex sm:ml-0 ml-2 w-full bg-[#f8f8f8] border rounded-[20px]">
            <input
              onChange={(e)=>setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              type="text"
              defaultValue={value}
              placeholder="Search"
              className="border sm:w-[90%] w-[40%] px-2 py-2 rounded-l-[20px]"
            ></input>
            <div className="w-[20px] h-[10px] mx-auto mt-2">
              <img
                onClick={()=>value.length > 0 && handleSearch(value)}
                src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
              ></img>
            </div>
          </div>
          {/* SpeechRecognition.startListening() */}
          <div onClick={()=>{onOpen() ; SpeechRecognition.startListening()}} className="w-[35px] ml-2 cursor-pointer p-3">
            <img
              className=""
              src="https://images.all-free-download.com/images/graphiclarge/microphone_icon_clip_art_9684.jpg"
            ></img>
          </div>
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
            {userPic == undefined ? (
              <img
                className="rounded-[50%]"
                onClick={() => setUserDropdown(true)}
                id="icon"
                src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
              />
            ) : (
              <img
                className="rounded-[50%]"
                onClick={() => setUserDropdown(!userDropdown)}
                id="icon"
                src={userPic}
              />
            )}
          </div>
        </div>
      </div>
      {location.pathname === "/" && (
        <div className="flex px-4 my-3 sm:ml-16 ml-0">
          {tabs.map((e) => {
            return (
              <div className="">
                <button
                  onClick={() => setHomePageQuery(e)}
                  className="rounded-[5px] mx-2 px-3 py-1 bg-[#f2f2f2] text-[14px]"
                >
                  {e}
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div
        className={`${
          userDropdown ? "block" : "hidden"
        } fixed right-8 border p-4 mt-[-60px] bg-[#ffffff] rounded-[15px] shadow-lg`}
      >
        <button className="w-full mx-auto flex justify-center text-[14px] border-b rounded-[5px] px-3 py-2">
          Sign Up
        </button>
        <p className="text-center">or</p>
        <Google_auth />
      </div>

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        padding={"0"}
        background="[#000000]"
        width={isSmallMobile ? "1000px" : "700px"}
        size={"lg"}
        className="z-20"
      >
        <ModalOverlay bg="rgba(0,0,0,0.4)" />

        <ModalContent
          width={isSmallMobile ? "600px" : "384px"}
          height="400px"
          paddingX={isSmallMobile ? "28px" : "36px"}
          paddingY={isSmallMobile ? "28px" : "36px"}
          background="white"
          margin="auto"
          marginTop="10px"
        >
          <div className="absolute top-3 right-3">
            <ModalCloseButton
              onClick={SpeechRecognition.stopListening}
              outline={"none"}
              _focus="none"
            />
          </div>
          <ModalBody padding={0}>
            <div className="mt-5">
              <p className="text-[25px] text-[#000000]">
                {transcript.length<=0  ? "Listening..." : transcript}
              </p>
            </div>
            <div className="flex justify-center gap-6 mt-7">
              <div id="VP-VE-TG" className="cursor-pointer absolute bottom-5">
                <img
                  onClick={SpeechRecognition.startListening}
                  className="w-[100px] h-[75px]"
                  src="mic.png"
                ></img>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Navbar;
