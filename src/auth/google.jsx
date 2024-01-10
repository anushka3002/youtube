import React,{useContext} from "react"
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { UserContextData } from "../context/get-user-context";
import { postUser } from "../api/user-api";

const Google_auth = ()=> {

    const {setUserPic,userData,setUserData,getData,userPic,setUserDropdown} = UserContextData()
    const liked_videos = [];
    const history = [];
    const watch_later = [];
    const subscriptions = [];

    const responseGoogle=async(response)=>{
        var decoded = jwt_decode(response.credential);
        const user = {name:decoded.name,avatar:decoded.picture,email:decoded.email,liked_videos:liked_videos,history:history,watch_later:watch_later,subscriptions:subscriptions}
        try{
            const userResponse = await postUser(user);
            if(userResponse.status=== 200){
                getData()
                setUserDropdown(false)
                localStorage.setItem("google user",JSON.stringify(decoded));
            }
        }
        catch(err){
            console.log(err,"google err")
        }
        
    }    
        return(
            <div className="">
                <GoogleLogin
                style={{backgroundColor:"blue"}}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                flow={'auth-code'}
                />
            </div>
        )
    }

export default Google_auth