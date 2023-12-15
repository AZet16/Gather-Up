
import {Route, Routes } from 'react-router-dom';
import Navbar from "./navbar";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';

 function App(){
     return (
         <>
             <Navbar />
             <div>
                <Routes>
                     <Route path="/home" element={<Home />} />
                     <Route path="/profile" element={< UserProfile/>} />

                     <Route path="/register" element={<Register />} />
                     <Route path="/login" element={< Login/>} />

                </Routes>
             </div>
         
         </>
     );

}


export default App;