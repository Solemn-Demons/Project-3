import React from 'react'; 
import client from './utils/apolloClient';  
import { ApolloProvider } from '@apollo/client';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './App.css';
import './nav.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ApolloProvider client={client}>
      <div className="background-container">
        <button className="home-btn" onClick={() => console.log("Home Clicked!")}></button>
        <button className="info-btn" onClick={() => console.log("Info Clicked!")}></button>
        <button className="profile-btn" onClick={() => console.log("Profile Clicked!")}></button>
        <button className="login-btn" onClick={() => console.log("Login Clicked!")}></button>
        <button className="signup-btn" onClick={() => console.log("Signup Clicked!")}></button>
      </div>

  
    </ApolloProvider>
  );
}

export default App;
