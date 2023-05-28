import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import FAQSearchBar from './Components/FAQ/FAQSearchBar';
import AboutUs from './Components/AboutUs/AboutUs';
import CustomNavbar from './Components/Home/CustomNavbar';

export default function App() {

  return (
    <>
    <CustomNavbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQSearchBar />} />
      <Route path="/aboutus" element={<AboutUs />} />
      {/* <Route path="/faq" element={<FAQSearchBar />} /> */}
    </Routes> 

    </>
  );
}

