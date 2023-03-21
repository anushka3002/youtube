import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Homepage from './component/homepage';
import Router from './routers/router';
import Sidebar from './component/sidebar';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useLocation } from "react-router-dom";

export const UserContext = createContext();

function App() {
  const searchedData = JSON.parse(localStorage.getItem("searchedKey")) || []
  const signedUser = JSON.parse(localStorage.getItem("google user")) || []
  const [searchData,setSearchData] = useState(searchedData)
  const navigate = useNavigate(); 
  const [value,setValue] = useState("")
  const [loader,setLoader] = useState(false)
  const location = useLocation();
  const [homePageQuery,setHomePageQuery] = useState("mixed")
  let google_user  = JSON.parse(localStorage.getItem("google user")) || []
  const [userPic,setUserPic] = useState(google_user.picture)
  const [userDropdown,setUserDropdown] = useState(false)

  const handleSearch = ()=>{
    console.log(value,"searched value")
    setLoader(true)
    navigate("/searchpage")
    console.log("handlesearch")
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${value}&type=video&key=${process.env.REACT_APP_API_2}`).then((response)=>{
      console.log(response,"response")
      setSearchData(response.data.items)
      localStorage.setItem("searchedKey",JSON.stringify(response.data.items))
      setLoader(false)
    }).catch((err)=>{
      console.log(err,"err")
      setLoader(false)
    })
  }

  useEffect(()=>{
    setSearchData(searchData)
  },[searchData])
  
  const mainData = {
    searchedData,
    value,
    setValue,
    handleSearch,
    loader,
    setLoader,
    userPic,
    setUserPic,
    userDropdown,
    setUserDropdown,
    homePageQuery,
    setHomePageQuery,
    google_user
  }
  return (
    <SkeletonTheme baseColor="#cccccc" highlightColor="#a2a2a2" duration={0.7}>
      <UserContext.Provider value={mainData}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
    <div onClick={()=>userDropdown==true && setUserDropdown(false)} className="">
      {location.pathname!="/videopage" && <Sidebar/>}
      <Navbar/>
      <Router/>
    </div>
    </GoogleOAuthProvider>
    </UserContext.Provider>
    </SkeletonTheme>
  );
}

export default App;
