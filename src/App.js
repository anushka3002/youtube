import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Homepage from './component/homepage';
import Router from './routers/router';
import Sidebar from './component/sidebar';

function App() {
  return (
    <div className="">
      <Sidebar/>
      <Navbar/>
      <Router/>
    </div>
  );
}

export default App;
