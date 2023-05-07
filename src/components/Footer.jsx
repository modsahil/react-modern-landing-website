import React from 'react'
import styled from 'styled-components'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <FooteR>
    <Wrapper>
        <Socials>
            <ul className='socials'>
                <li><a href="#"><FaFacebookF /></a></li>
                <li><a href="#"><FaInstagram /></a></li>
                <li><a href="#"><FaTwitter /></a></li>
                <li><a href="#"><BsGithub /></a></li>
            </ul>
        </Socials>
        <Menu>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Backend</a></li>
          <li><a href="#">Designs</a></li>
        </Menu>
        <TAC>
          <li><a href="#">Accesibility</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Contract</a></li>
          <li><a href="#">Teams</a></li>
        </TAC>
        <Copyright>
          <small>
           <AiOutlineCopyrightCircle className='copyright'/> SRJ: All rights Reserved
            </small>
        </Copyright>
    </Wrapper>
</FooteR>
  )
}

const FooteR = styled.footer`
background: #222222;
`

const Wrapper = styled.div``

const Socials = styled.div`
.socials{
  display: flex;
  font-size: 1.7rem;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 0 1.5rem 0;
}
`

const Menu = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 2rem;
font-size: 1.1rem;
`

const TAC = styled.div`
display: flex;
font-size: 1.1rem;
justify-content: center;
gap: 2rem;
padding: 1rem 0 8rem 0;
`

const Copyright = styled.div`
display: flex;
justify-content: center;
small{
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 0 0.5rem 0;
  opacity: 0.5;
  text-transform: capitalize;
  border-top: 1px solid #fff;
  width: 100%;
  
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  

  .copyright{
    font-size: 1.2rem;
  }
}
`


export default Footer