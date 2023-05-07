import React from 'react'
import styled from 'styled-components'
import { BsFillStarFill } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'
import { RiComputerFill } from 'react-icons/ri'
import Projects from '../pages/ProjectData'





const Container = styled.section`
background: #fff;
`

const Wrapper = styled.div`
h2{
    margin-top: 4rem;
    font-size: 2.5rem;
    text-align: center;

    @media (min-width: 768px) and (max-width: 1024px){

            }
}
`

const Cards = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

@media (min-width: 768px) and (max-width: 1024px){
    gap: 0;
}
`

const Card = styled.div`
box-shadow: 0 15px 30px 1px grey;
	background: rgba(255, 255, 255, 0.90);
	text-align: center;
	border-radius: 5px;
	overflow: hidden;
	margin: 5em auto;
	height: 350px;
	width: 70rem;

    /* display: flex;
    flex-direction: column; */
    

    @media (min-width: 768px) and (max-width: 1024px){
        width: 60rem;
        height: 300px;
    }

    @media (min-width: 481px) and (max-width: 767px){
        width: 40rem;
        height: 200px;
    }
`

const CardDetails = styled.div`
    position: relative;
	text-align: left;
	overflow: hidden;
	padding: 30px;
	height: 100%;
	float: left;
	width: 40%;
    padding-right: 4rem;

    h4{
        display: inline-block;
	position: relative;
	font-size: 2rem;
	color: #344055;
	margin: 0;

    @media (min-width: 481px) and (max-width: 767px){
        font-size: 1.5rem;
    }
    }

    h4:before{
        position: absolute;
	content: '';
	right: 0%; 
	top: 0%;
	transform: translate(25px, -15px);
	font-family: 'Bree Serif', serif;
	display: inline-block;
	background: #ffe6e6;
	border-radius: 5px;
	font-size: 14px;
	padding: 5px;
	color: white;
	margin: 0;
	animation: chan-sh 6s ease infinite;
    }

    > p{
        text-align: left;
	font-size: 1rem;
    line-height: 1.4;
    padding-bottom: 1.2rem;
	color: #7d7d7d;

    @media (min-width: 481px) and (max-width: 767px){
        font-size: 0.8rem;
        padding-bottom: 0;
        line-height: 1;
    }
    }

    span{
        display: flex;
        flex-direction: row;
        gap: 0.2rem;
        padding-bottom: 2rem;
        padding-left: 0.5rem;

        @media (min-width: 481px) and (max-width: 767px){
            margin-bottom: -1rem;
        }
        
     
    }

    .star{
	color: gold;
    font-size: 1.1rem;
    @media (min-width: 481px) and (max-width: 767px){
        font-size: 0.8rem;
    }
    }

`

const Control = styled.div`
position: absolute;
	margin-top: 1rem;
	left: 4rem;
`

const Btn = styled.button`
transform: translateY(0px);
	transition: 0.3s linear;
	background:  #809fff;
	border-radius: 5px;
  position: relative;
  overflow: hidden;
	cursor: pointer;
	outline: none;
	border: none;
	color: #eee;
	padding: 0;
	margin: 0;

    &:hover{
        transform: translateY(-6px);
	background: #1a66ff;}
    
    span{
        transition: transform 0.3s;
	display: inline-block;
  padding: 10px 20px;
	font-size: 1.2em;
	margin:0;
    }

    .price, .development{
        background: #333;
	border: 0;
	margin: 0;
    }

    .price{
        transform: translateX(-10%);
         padding-right: 15px;
    }

    .development{
        transform: translateX(-100%);
  position: absolute;
	background: #333;
	z-index: 1;
  left: 0;
  top: 0;
    }

    .buy{
        z-index: 3;
         font-weight: bolder;
    }

    &:hover .price{
        transform: translateX(-110%);
    }

    &:hover .development{
        transform: translateX(0%);
    }
	
`

const CardImg = styled.div`
transition: all 0.3s ease-out;
	display: inline-block;
	position: relative;
	overflow: hidden;
	height: 100%;
	float: right;
	width: 58%;
	display: inline-block;


    img{
        width: 100%;
        height: 100%;
        border-top-right-radius: 5px;
    }







`

const CardInfo = styled.div`

    background: rgba(27, 26, 26, 0.9);
    /* font-family: 'Bree Serif', serif; */
    transition: all 0.3s ease-out;
    transform: translateX(-100%);
    position: absolute;
    line-height: 1.8;
    text-align: left;
    font-size: 105%;
    cursor: no-drop;
    color: #FFF;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;

    h2{
        text-align: center
    }

    ul li{
        transition: 0.3s ease;
    }

    ul li:hover{
        transform: translateX(50px) scale(1.3);
    }
    
`

const CardZoom = styled.div`
    .product-image:hover .info{
        transform: translateX(0);
    }

    .product-image:hover img{
        transition: all 0.3s ease-out;
    }

    .product-image:hover img{
        transform: scale(1.2, 1.2);
    }

`

const Left = styled.div``

const Right = styled.div``











const Project = () => {
    return (

        <Container>
            <Wrapper>
                
                    <h2>Our<span> Works</span></h2>
                

                <Cards>


                    {Projects.map(({ id, iname, description, image }) => {
                        return(
                        <Card key={id}>
                            {/* <Left> */}
                            <CardDetails className='product-details'>
                                <h4>{iname}</h4>
                                <span>
                                    < BsFillStarFill className='star' />
                                    < BsFillStarFill className='star' />
                                    < BsFillStarFill className='star' />
                                    < BsFillStarFill className='star' />
                                    < AiOutlineStar className='star' />

                                </span>

                                <p className='information'>{description}</p>

                                <Control className="control">
                                    <Btn className='btn'>
                                        <span className="price">Moden</span>
                                        <span className='development'><RiComputerFill /></span>
                                        <span className="buy">Visit now</span>
                                    </Btn>
                                </Control>
                            </CardDetails>
                            {/* </Left> */}

                            {/* <Right> */}

                            <CardZoom>

                            <CardImg className="product-image">
                                <img src={image} alt="" />
                            </CardImg>

                            

                            <CardInfo className='info'>
                                <h2>Description</h2>
                                <ul>
                                    <li><strong>Technology :</strong>MERN</li>
                                    <li><strong>Type :</strong>School Management</li>
                                    <li><strong>Responsive :</strong>Yes</li>
                                    <li><strong>SEO Friendly :</strong>Yes</li>
                                </ul>
                            </CardInfo>
                            </CardZoom>
                            {/* </Right> */}
                        </Card>)})}
                    
                    



                </Cards>
            </Wrapper>
        </Container>
    )
}






export default Project