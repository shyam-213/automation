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
import AboutUs from "./components/AboutUs";
import Cards from "./UserDashboard/Common/Cards";


const App = () => {

  const [isLogin, setisLogin] = useState(false)

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

            :
            <div className="flex h-screen overflow-y-auto">
              <div className="fixed top-0 left-0 w-36 z-50">
                <UserNavbar />
              </div>
              <div className="lg:ml-56 flex-1">
                
                <Routes>
                  <Route path="/ckp" element={<Cards/>}></Route>
                  <Route path="/kp" element={<AboutUs />}></Route>
                </Routes>
              </div>
            </div>
        }


        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
