import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "lucide-react";


const App = () => {
  return (
    <>
      
      <BrowserRouter>
         <Navbar />
        <Routes>

          
          </Routes>
       <Footer />
      </BrowserRouter>

   
     
    </>
  );
};

export default App;
