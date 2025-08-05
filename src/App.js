import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import CreateBlog from "./pages/CreaterBlog"
import AboutUs from "./pages/Aboutus";
import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";
import CommonHeader from "./pages/CommonHeader";
import WelcomeUser from "./pages/WelcomeUser";

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import jwt_decode from 'jwt-decode';
import { jwtDecode } from "jwt-decode";


import { useState } from "react";



function App() {
 const [data, setUserData] = useState(''); // Initialize state

  // Check for existing session on initial load
  useEffect(() => {
    const savedUserData = localStorage.getItem('googleUserData');
    if (savedUserData) {
      try {
        const parsedData = JSON.parse(savedUserData);
        setUserData(parsedData);
        // Optionally fetch fresh cost data
        // fetchCostData(parsedData.email);
      } catch (error) {
        console.error('Failed to parse saved user data', error);
        localStorage.removeItem('googleUserData');
      }
    }
  }, []);

 

  const handleLogin = async (credentialResponse) => {
    //const decoded = jwt_decode(credentialResponse.credential);
    const decoded = jwtDecode(credentialResponse.credential);
    if(decoded != null) {
      console.log('User Info:', decoded);
      console.log('User Name:', decoded.name);
    } else {
      console.error('Failed to decode token');
      return;
    }
          
    // Send token to backend for verification
    const res = await fetch('http://localhost:8000/verify-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: credentialResponse.credential }),
    });
    const resp = await res.json();
    setUserData(resp);
    localStorage.setItem('googleUserData', JSON.stringify(resp));
    console.log(data);
  };
  

  const handleLogout = () => {
    localStorage.removeItem('googleUserData');
    setUserData(null);
   
  };

  return (

    
    <Router>
      {data ? (
        <>
        <WelcomeUser userData={data} /> 
        <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <GoogleOAuthProvider clientId="204094864237-i6f53hhl6g8480hgv8nrlrseigph1f3j.apps.googleusercontent.com">
      <h2>Login with Google</h2>
      <GoogleLogin
        onSuccess={handleLogin}
        onError={() => console.log('Login Failed')}
      />
    </GoogleOAuthProvider>  
      )}

      <Navbar />
      <CommonHeader />
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;