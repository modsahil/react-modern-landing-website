import React from 'react'
import styled from 'styled-components'
import {AboutFList, AboutBList} from '../../pages/AboutListData'
import BsFillStarFill from 'react-icons/bs'

const Abouttech = () => {
    return (
        <Container>
            <Wrapper>
                <SectionH>
                <h2>
                    We Serve
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate suscipit ut libero quos laudantium commodi nobis atque, similique eligendi eveniet? Laudantium nihil deleniti ratione optio?
                </p>
                </SectionH>
                <Main>
                    <MainLeft className='main'>
                    <LeftHead className='about-head'>
                    <h3>FrontEnd</h3>
                    </LeftHead>
                    {
                        AboutFList.map(({id, name, icon }) => {
                            return (
                                <Left key={id} className='about-card'>
                                    
                                    <LData className='about-data'>
                                
                                        <Icon>
                                            {icon}
                                        </Icon>
                                        <p>{name}</p>
                                    </LData>
                                </Left>
                            )
                        })
                    }
                    </MainLeft>
                    <MainRight className='main'>
                        <RightHead className='about-head'>
                        <h3>
                                    Backend
                                </h3>
                        </RightHead>
                    {
                        AboutBList.map(({id, name, icon}) => {
                            return(
                                <Right key={id} className='about-card'>
                                    
                                <Rdata className='about-data'>
                                <Icon>
                                    {icon}
                                </Icon>
                                <p>{name}</p>
                                </Rdata>
                            </Right>
                            )
                        })
                    }
                    </MainRight>


                </Main>
            </Wrapper>
        </Container>
    )
}


const Container = styled.section`
background: #F5F5F5;
padding-top: 4rem;
padding-bottom: 4rem;
`

const Wrapper = styled.div`
h2{
    color: #222222;
    font-size: 3rem;
    text-align: center;
}

p{
    color: #222222;
    max-width: 55rem;
    font-weight: 500;
}
`

const SectionH = styled.div`
    display: flex;
    flex-direction: column;
    gap: .1rem;
    justify-content: center;
    align-items: center;
    line-height: 1.4;

    margin-bottom: 5rem;

`

const Main = styled.div`
color: #222222;
display: grid;
gap: 4rem;
grid-template-columns: repeat(2, 1fr);
margin: 0 4rem 0 4rem;

.main{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.about-head{
    font-size: 1.5rem;
    text-align: center;
    border-bottom: 1px solid #222222;
    margin-bottom: 0.1rem;
}

.about-card{
    padding: 2rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all ease-in 200ms;

    &:hover{
        transform: translateY(-1rem);
    }
}

.about-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;

    p{
        font-size: 1rem;
    }
    
}
`
const MainLeft = styled.div``

const Left = styled.div`` 

const LeftHead = styled.div``

const LData = styled.div``

const MainRight = styled.div``

const Right = styled.div``

const RightHead = styled.div``

const Icon = styled.div`
font-size: 1.5rem;
`

const Rdata = styled.div``


export default Abouttech