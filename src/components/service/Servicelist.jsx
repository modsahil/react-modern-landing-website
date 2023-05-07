import React from 'react'
import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import SLists from '../../pages/ServiceListData'

const Servicelist = () => {
    return (
        <Container>
            <Wrapper>
                <ListUpper>
                    <h2>
                        Solutions by Service
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae placeat excepturi consequatur qui minus ipsum!
                    </p>
                </ListUpper >

                <Cards>
                    {
                        SLists.map(({ id, icon, name, btnName }) => {
                            return (
                                < Card key={id} >
                            <Icon>{icon}</Icon>
                            <h4>{name}</h4>
                            <ButtonList>
                                {btnName}
                            </ButtonList>
                        </Card>
                            )
                        }
                        )
                    }

                </Cards>

            </Wrapper>
        </Container >
    )
}

const Container = styled.section`
    background: #F5F5F5;
    /* height: 100vh; */
`

const Wrapper = styled.div`
padding-top: 4rem;
text-transform: capitalize;
`

const ListUpper = styled.div`
color: black;
line-height: 1.3;

h2{
    font-size: 2.5rem;
}

p{
    font-size: 1rem;
    margin-bottom: 3rem;
}
`

const Cards = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 3rem;
padding-bottom: 3rem;
margin: 1rem 4rem 0 4rem;

@media (max-width: 768px){
    grid-template-columns: repeat(2, 1fr @media (min-width: 481px) and (max-width: 767px));
}
`

const Card = styled.div`
color: black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
width: 25rem;
height: 25rem;
transition: all ease-in 200ms;

&:hover{
    transform: translateY(-1rem);
}


h4{
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
}
`
const Icon = styled.div`
font-size: 2.5rem;
margin-bottom: 2rem;
`

const ButtonList = styled.button`
font-size: 1.2rem;
padding: 0.5rem 1rem 0.5rem 1rem;
border-radius: 2rem;
margin-top: 4rem;
background: #222222;
color: #fff;
cursor: pointer;
`

export default Servicelist