import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from 'axios';

const UserContext = createContext();
export default function UserContextProvider({children}){
    const searchedData = JSON.parse(localStorage.getItem("searchedKey")) || []
    const signedUser = JSON.parse(localStorage.getItem("google user")) || []
    const [searchData,setSearchData] = useState(searchedData)
    // const [likedVideos,setLikedVideos] = useState([])
    const navigate = useNavigate(); 
    const [value,setValue] = useState("")
    const [userData,setUserData] = useState({
      name:"",
      avatar:"",
      email:"",
      // liked_videos:[],
      history:[],
      watch_later:[],
      // subscriptions:[],
    })
    const [loader,setLoader] = useState(false)
    const [homePageQuery,setHomePageQuery] = useState("standup")
    let google_user  = JSON.parse(localStorage.getItem("google user")) || []
    const [userPic,setUserPic] = useState(google_user.picture)
    const [userDropdown,setUserDropdown] = useState(false)
    // "YouTube Data API v3 has not been used in project 846458977532 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=846458977532 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry."

  
    const handleSearch = (e)=>{
      setLoader(true)
      console.log(e,"being called,")
      axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${e}&type=video&maxResults=10&key=${process.env.REACT_APP_API_2}`).then((response)=>{
        setSearchData(response.data.items)
        // navigate("/searchpage")
        localStorage.setItem("searchedKey",JSON.stringify(response.data.items))
        setLoader(false)
      }).catch((err)=>{
        console.log(err,"err")
        setLoader(false)
      })
    }

    const getData = ()=>{
        axios.get("https://641ff90182bea25f6df7bf9c.mockapi.io/youtube/users").then((response)=>{
            setUserData(response.data)
            setUserPic(response.data[0].avatar)
        }).catch((err)=>{
            console.log(err)
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
      google_user,
      userData,
      setUserData,
      getData
    }
    return(
        <UserContext.Provider value={mainData}>
            {children}
        </UserContext.Provider>
    )
}

export const UserContextData = () => useContext(UserContext)