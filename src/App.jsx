import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Views/Home/Home";
import ContactUs from "./Views/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";

// import WhereWeDo from "./Views/WhereWeDo/WhereWeDo";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
