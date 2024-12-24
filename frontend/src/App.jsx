import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/Home";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/forgotPassword";
import Pricing from "./pages/Pricing";
import Sidebar from "./Dashboard/Component/Sidebar";
import Dashboard from "./Dashboard/Component/Dashboard";
import History from "./Dashboard/Component/History";
import Setting from "./Dashboard/Component/Setting";
import Help from "./Dashboard/Component/Help";
import Workflow from "./Dashboard/Component/Workflow";
import Footer1 from "./Dashboard/Component/Footer1";
import { useSelector } from "react-redux";

function App() {

  const {isLogin} = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      {isLogin ? (
        <div className="flex h-screen overflow-y-auto">
          <div className="fixed top-0 left-0 w-36 z-50">
            <Sidebar />
          </div>
          <div className="lg:ml-56 md:ml-40 mt-20 flex-1 max-sm:p-0 p-10">
            <Routes>
              <Route path="/ck" element={<Dashboard />} />
              <Route path="/workflow" element={<Workflow />} />
              <Route path="/history" element={<History />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/help" element={<Help />} />
              <Route path="*" element={<Navigate to="/ck" />} />
            </Routes>
            <Footer1 />
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<Navigate to="/signin" />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;