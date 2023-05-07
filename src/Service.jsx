import React from 'react'
import styled from 'styled-components'
import Servicelist from './components/service/Servicelist' 


const Service = () => {
  return (
    <Container>
      <Wrapper>
        <SeriveUpper>
          <h2>A Solution For every need.</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus et deserunt quis nesciunt a tenetur, dolorem eligendi officiis eveniet blanditiis dolor, distinctio vel quo temporibus voluptate dolores ea nulla labore.</p>

          <ServiceUpperBtn>
            <Button>
              Works
            </Button>
            <Button2>
              Contact
            </Button2>
          </ServiceUpperBtn>
        </SeriveUpper>
        < Servicelist />
      </Wrapper>
    </Container>
  )
}

const Container = styled.section`
z-index: 1000;
text-align: center;
color: #fff;
`

const Wrapper = styled.div``

const SeriveUpper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3rem;
height: 45vh;
background: #16213E;

h2{
  padding: 4rem 0 0.1rem 0;
  font-size: 3rem;
  font-weight: 600;
}

p{
  text-align: center;
  max-width: 60rem;
  line-height: 1.3;
  font-weight: 200;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}
`

const ServiceUpperBtn = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
`

const Button = styled.button`
padding: 0.5rem 2rem 0.5rem 2rem;
font-size: 1.1rem;
font-weight: 500;
background: #fc9a21;
color: #fff;
cursor: pointer;
`

const Button2 = styled.button`
padding: 0.5rem 2rem 0.5rem 2rem;
background: transparent;
color: #fff;
font-size: 1.1rem;
font-weight: 400;
border: 2px solid #fff;
cursor: pointer;
`

export default Service