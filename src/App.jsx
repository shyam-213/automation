import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "lucide-react";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      
      <BrowserRouter>
         <Navbar />
        <Routes>

          <Route path="/" element={<Home/>}></Route>
          
          </Routes>
       <Footer />
      </BrowserRouter>

   
     
    </>
  );
};

export default App;
