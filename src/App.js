import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Homepage from './component/homepage';
import Router from './routers/router';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Router/>
    </div>
  );
}

export default App;
