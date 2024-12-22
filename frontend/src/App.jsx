import Navbar from "./components/common/Navbar";

import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/forgotPassword";
import Pricing from "./pages/Pricing";
import { useState } from "react";
import Sidebar from "./Dashboard/Component/Sidebar";
import Dashboard from "./Dashboard/Component/Dashboard";
import History from "./Dashboard/Component/History";
import Setting from "./Dashboard/Component/Setting";
import Help from "./Dashboard/Component/Help";
import Workflow from "./Dashboard/Component/Workflow";


const App = () => {

  const [isLogin, setisLogin] = useState(true)

  return (
    <>
      <BrowserRouter>
        {
          isLogin ? 
            
            <div className="flex h-screen overflow-y-auto">
                <div className="fixed top-0 left-0 w-36 z-50">
                  <Sidebar />
                </div>
                <div className="lg:ml-56 md:ml-40 mt-20 flex-1 max-sm:p-0 p-10">
                  <Routes>
                    <Route path="/" element={<Dashboard />}></Route>
                    <Route path="/workflow" element={<Workflow />}></Route>
                    <Route path="/history" element={<History />}></Route>
                    <Route path="/setting" element={<Setting />}></Route>
                    <Route path="/help" element={<Help />}></Route>
                  </Routes>
                </div>
              </div>

            :
            <><Navbar />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Signup" element={<Signup />}></Route>
                <Route path="/Signin" element={<Signin />}></Route>
                <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
                <Route path="/pricing" element={<Pricing />}></Route>
              </Routes>
            </>
              
        }


        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
