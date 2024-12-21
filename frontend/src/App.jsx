import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/forgotPassword";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const FooterWrapper = () => {
    const location = useLocation();
    return location.pathname !== "/dashboard" && <Footer />;
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Signin" element={<Signin />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
        </Routes>
        <FooterWrapper />
      </BrowserRouter>
    </>
  );
};

export default App;
