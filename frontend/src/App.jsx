import Navbar from "./components/common/Navbar";

import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/forgotPassword";
import Pricing from "./pages/Pricing";
import { useState } from "react";
import UserNavbar from "./UserDashboard/Common/UserNavbar";


const App = () => {

  const [isLogin, setisLogin] = useState(true)

  return (
    <>
      <BrowserRouter>
        { 
          isLogin ? <><Navbar />
            <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Signin" element={<Signin />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
            </Routes>
            </>
            
            : <UserNavbar />
        }
       
        
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
