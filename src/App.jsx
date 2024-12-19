import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";


const App = () => {
  return (
    <>
      
      <BrowserRouter>
         <Navbar />
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Signin" element={<Signin/>}></Route>
          
          </Routes>
       <Footer />
      </BrowserRouter>

   
     
    </>
  );
};

export default App;
