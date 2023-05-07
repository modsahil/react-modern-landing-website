import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Nav from './components/Nav'
import GlobalStyling from './GlobalStyling'
import Home from './Home'
import Service from './Service'
import Footer from './components/Footer'
import About from './About';


const App = () => {
  return (
    <Auth0Provider
    domain="dev-4gigiydqvr637kiu.us.auth0.com"
    clientId="ogWxZoClockXzZsUDoWc9KlvW0XcL724"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <GlobalStyling />
      <BrowserRouter>
      < Nav />
      < Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      < Footer />
      </BrowserRouter>

      </Auth0Provider>
  )
}

export default App

