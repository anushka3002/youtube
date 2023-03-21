import React,{useContext} from "react"
import { GoogleLogin } from '@react-oauth/google';
import { UserContext } from "../App"
import jwt_decode from "jwt-decode";

const Google_auth = ()=> {

    const contextData = useContext(UserContext)
    const {setUserPic} = contextData
   

    const responseGoogle=(response)=>{
        var decoded = jwt_decode(response.credential);
        setUserPic(decoded.picture)
        localStorage.setItem("google user",JSON.stringify(decoded));
    }

    const errGoogle=(response)=>{
        console.log(response);
    }
    
        return(
            <div className="">
                <GoogleLogin
                style={{backgroundColor:"blue"}}
                onSuccess={responseGoogle}
                onFailure={errGoogle}
                cookiePolicy={'single_host_origin'}
                flow={'auth-code'}
                />
            </div>
        )
    }

export default Google_auth