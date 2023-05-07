import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyling = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Halant', serif;
    scroll-behavior: smooth;
    
  }

  a{
    text-decoration: none;
    color: #fff;
  }

  li{
    list-style: none;
  }

  section{
    /* height: 100vh; */
    /* margin-top: 4rem; */
  }

  ::-webkit-scrollbar{
    display: none;
  }

  
  @media (min-width: 768px) and (max-width: 1024px){
    
}
  
`;


export const Button = styled.button`
  padding: 0.3rem 1rem 0.3rem 1rem;
  background: #fc9a21;
  color: #fff;
  font-weight: 500;
  border-radius: 2rem;
  cursor: pointer;
  border: none;


`




export default GlobalStyling;