import React, {useState} from 'react'
import { questions } from '../../pages/QueAnsData'
import styled from 'styled-components'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const MyAccordian = () => {

  const [isActive,  setIsActive] = useState(false);

  return (
    <Container>
        <Wrapper>
          <h2>FYQ</h2>
            <FYQS>
              {
                questions.map(({id, question, answer}) => {
                  return(
                    <FYQ key={id}>
                    <Question >
                    <h4>{question}</h4>
                    <p onClick={() => setIsActive(!isActive)}>
                    <Sign>
                      {isActive ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                      </Sign>
                    </p>
                    
                    </Question>
                    <Answer>
                      {
                        isActive && <p>{answer}</p>
                      }
                    </Answer>
                </FYQ>
                  )
                })
              }
            </FYQS>
        </Wrapper>
    </Container>


  )
}



const Container = styled.section`
margin-bottom: 4rem;
`

const Wrapper = styled.div`
  h2{
      margin-top: 4rem;
      font-size: 2.5rem;
      color: #03001C;
      text-align: center;
  }
`

const FYQS = styled.div`
 display: grid;
 gap: 3rem;
 grid-template-columns: repeat(2, 1fr);
 margin: 3rem 3rem 4rem 3rem;
`

const FYQ = styled.div`
    text-align: center;
    /* margin-bottom: 1rem; */
`

const Question = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: rgba(0, 0, 120, 0.1);
`

const Answer = styled.div`
 padding: 2rem 4rem 2rem 4rem;
 box-shadow: 0px 0px 20px 0px rgb(0, 0, 120 / 100%);

`

const Sign = styled.div``


export default MyAccordian