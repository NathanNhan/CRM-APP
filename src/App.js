import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './app.css'
import Home from "./components/pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
function App() {
  return (
    <>
   <div>
     <Topbar/>
     <div className="container">
       <Sidebar/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/users" element={<UserList/>}/>
        </Routes>
      </BrowserRouter>
     </div>
   </div>
    </>
  );
}

export default App;
