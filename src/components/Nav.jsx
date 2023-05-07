import {React, useState} from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Switch, NavLink, Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '../GlobalStyling';
import {CgMenu, CgCloseR} from 'react-icons/cg'
import Drawer from './Drawer';


const Navbar = styled.nav`
  height: 3rem;
  width: 100%;
  background: #222222;
  opacity: 1;
  top: 0;
  z-index: 1;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem 0 4rem;
  /* border-bottom: 1px solid red; */
  overflow: hidden;
  margin-bottom: 1rem;
  `;

const LOGO = styled.div`
  h2{
    color: #fff;
    font-size: 1.8rem;
    }`;

const Menu = styled.div`
display: flex;
align-items: center;




  .menu{
    display: flex;
    gap: 4rem;
    align-items: center;
    /* justify-content: center; */
    

    
  }

 

   li a{
    color: #fff;
    font-size: 1.1rem;
    font-weight: 400; 

    &:after{
      position: absolute;
      content: '';
      width: 0px;
      height: 2px;
      left: 0;
      background-color: #18d26e;
      visibility: hidden;


    }
    
    &:hover{
      color: #fff;
    }

  @media (max-width: 768px){
  display: none;
}
  } 
  
  `
  const USER = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    font-size: 0.9rem;
    align-items: center;

    .user-img{
  height: 1.7rem;
  width: 1.7rem;
  border-radius: 56% 44% 70% 30% / 30% 54% 46% 70%;
  display: flex;
  position: relative;
  align-items: center;
  animation: water-wave 3s linear infinite;
}

p{
  color: #fff;
  opacity: 0.8;
  font-weight: 300;
}

@keyframes water-wave {
    0% {
      border-radius: 56% 44% 70% 30% / 30% 54% 46% 70%;
      border: 2px solid #fc9a21;
    }
    50% {
      border-radius: 3% 97% 15% 85% / 72% 0% 100% 28%;
      border: 2px solid #fc9a21;
    }
    100% {
      border-radius: 56% 44% 70% 30% / 30% 54% 46% 70%;
      border: 2px solid #fc9a21;
    }
  }
  `

 

  
  const Nav = () => {
  const { loginWithRedirect, logout, isAuthenticated, user} = useAuth0();

  const [isOpen, setIsOpen] = useState(false  );

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  }


  return (
    <>
    <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    <Navbar toggleDrawer={toggleDrawer}>
      

      <DrawerButton onClick={toggleDrawer}>
          <CgMenu/>
      </DrawerButton>

      <LOGO>
        <h2>SRJ</h2>
      </LOGO>

      <Menu>

        <ul className="menu">
          <li><NavLink to='/' className='active'>Home</NavLink></li> 
          <li><NavLink to='/service'>Services</NavLink></li>
          <li><NavLink to='/about'>About Us</NavLink></li>
          {
            isAuthenticated && <li><USER><img src={user.picture} alt="" className='user-img'/><p>{user.email}</p></USER></li>
          }
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
    </Navbar>
    </>

  )

}

const DrawerButton = styled.button`
 all: unset;
 font-size: 2.2rem;
 color: #fff;
 display: grid;

@media (min-width: 768px){
  display: none;
}
`

export default Nav