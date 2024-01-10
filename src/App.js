import './App.css';
import Navbar from './component/navbar';
import Router from './routers/router';
import Sidebar from './component/sidebar';
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useLocation } from "react-router-dom";
import Userdata from './component/userdata';
import UserContextProvider, { UserContextData } from './context/get-user-context';

function App() {
  const location = useLocation();
  // const {userDropdown,setUserDropdown} = UserContextData()
 
  return (
    <SkeletonTheme baseColor="#cccccc" highlightColor="#a2a2a2" duration={0.7}>
      <UserContextProvider>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
    <div className="">
      {location.pathname!="/videopage" && <Sidebar/>}
      <Navbar/>
      {/* <Userdata/> */}
      <Router/>
    </div>
    </GoogleOAuthProvider>
    </UserContextProvider>
    </SkeletonTheme>
  );
}

export default App;
