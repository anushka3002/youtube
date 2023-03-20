// import React,{Component, useContext} from "react"
// import GoogleLogin from "react-google-login"
// import { UserContext } from "../App"
// const Google_auth = ()=> {

//     const contextData = useContext(UserContext)
//     const {setUserPic} = contextData

//     const responseGoogle=(response)=>{
//         console.log(response);
//         console.log("hellooooo",response);
//         setUserPic(response.profileObj.imageUrl)
//         localStorage.setItem("google user",JSON.stringify(response.profileObj));
//     }

//     const errGoogle=(response)=>{
//         console.log(response);
//     }
    
//         return(
//             <div className="border">
//                 <GoogleLogin
//                 clientId="1009641079467-v8ve5rfo6e4tgmlon3rs9nqhur89obmk.apps.googleusercontent.com"
//                 // clientId="1009641079467-3rniqmhfcjqni5cg9ehrrmvkhd9regc3.apps.googleusercontent.com"
//                 style={{backgroundColor:"blue"}}
//                 onSuccess={responseGoogle}
//                 onFailure={errGoogle}
//                 cookiePolicy={'single_host_origin'}
//                 />
//             </div>
//         )
//     }

// export default Google_auth