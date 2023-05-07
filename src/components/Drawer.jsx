import React from 'react'
import styled from 'styled-components'
import { Button } from '../GlobalStyling'
import {NavLink} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


const Drawer = ({isOpen, toggleDrawer}) => {
    const { loginWithRedirect, logout, isAuthenticated, user} = useAuth0();
  return (
    <>
    {isOpen && <Backdrop onClick={toggleDrawer}/>}
    <SDrawer isOpen={isOpen}>

    <LOGO>
        <h2>SRJ</h2>
      </LOGO>

      <Menu>

        <ul className="menu" onClick={toggleDrawer}>
          <li><NavLink to='/' className='active nav'>Home</NavLink></li> 
          <li><NavLink to='/service' className='nav'>Services</NavLink></li>
          <li><NavLink to='/about' className='nav'>About Us</NavLink></li>
          {/* {
            isAuthenticated && <li><USER><img src={user.picture} alt="" className='user-img'/><p>{user.email}</p></USER></li>
          } */}
          {
            isAuthenticated ? (
              <li><Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </Button></li>
            ) : (
              <li><Button onClick={() => loginWithRedirect()}>Log In</Button></li>
            )
          }
          
        </ul>
      
      </Menu>

    </SDrawer>
    </>
  )
}

const Backdrop = styled.div`
height: 100%;
width: 100%;
z-index: 9999;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
transition: 0.3s ease;
`

const SDrawer = styled.div`
z-index: 99999;
position: absolute;
top: 0;
height: 100vh;
width: 60%;
background-color: #fff;
transition: 0.3s ease;
transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
position: fixed;
`

const LOGO = styled.div`
font-size: 1.5rem;
color: #222222;
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;
margin-bottom: 5rem;
`

const Menu = styled.div`

.nav{
    color: #404258;
    font-size: 1.2rem;
    font-weight: 600;
}

.menu{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
`

const USER = styled.div``



export default Drawer