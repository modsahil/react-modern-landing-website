import React from 'react'
import styled from 'styled-components'
import { Button } from '../GlobalStyling';
import { useAuth0 } from "@auth0/auth0-react";


const Container = styled.section`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
gap: 1rem;
margin-top: 3rem;
background-image: url(../../Assests/bckimg.jpg);
background-repeat: no-repeat;
background-size: 100%;
background-attachment: fixed;

@media (min-width: 768px) and (max-width: 1024px){
}

@media (min-width: 481px) and (max-width: 767px){
  
}
`;


const ImgBack = styled.div`
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #18122B;
    opacity: 0.7;

`;
const Data = styled.div`
color: #fff;
position: relative;
text-align: center;

.greet{
  font-size: 1.5rem;
}

h2{

    font-size: 5rem;
}

h2 span{
  color: #5B8FB9;
}

h5{
  font-size: 1.2rem;
}
li{
  margin-top: 3rem;
}

p{
  font-size: 0.9rem;
  opacity: 0.8;
  
}

li a{
  font-size: 1.1rem;
  font-weight: 500;
  border: 2px solid #5B8FB9;
  border-radius: 1.5rem;
  padding: .5rem 1.5rem .5rem 1.5rem;
  cursor: pointer;

  &:hover{
    background-color: #fff;
    color: #000078;
}}
`

const HeroImg = styled.div`
  .hero-img{
    width: 30vh;
    position: relative;
  }
`


const Header = () => {

  const {isAuthenticated, user} = useAuth0();

  return (
    <Container>
        <ImgBack className="overlay"> </ImgBack>
        {/* <HeroImg>
        <img src="../../Assests/heropc.svg" alt="" className='hero-img' />
        </HeroImg> */}
        <Data>
            {
              isAuthenticated && <h3 className='greet'>Hello, <span>{user.name}</span></h3>
            }
            <h2 className='static-txt'>Come To <span>Web</span> </h2>

            <h5>For business, productivity and portfolio</h5>

            {/* <p>MERN Stack Developer</p> */}

            <ul>
              <li><a href="#" className='hero-btn'>Get Started</a></li>
            </ul>
        </Data>
    </Container>
  )
}

export default Header