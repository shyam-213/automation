import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
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
