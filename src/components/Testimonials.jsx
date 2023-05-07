import React from 'react'
import styled from 'styled-components'
import { Testimonial } from '../pages/TestimonialData'

// import Swiper core and required modules
import {Autoplay, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
// import 'swiper/css/scrollbar';








const Testimonials = () => {
  return (
    <Container>
        <Wrapper>
            <ReviewBack className='overlay'></ReviewBack>
            <h2>Testimonials</h2>
            <Swiper 
             // install Swiper modules
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{delay: 3000}}
      pagination={{ clickable: true }}

      className='reviews'
            >

              {
                Testimonial.map(({id, name, image, review}) => {
                  return(
                    <SwiperSlide key={id} className='review'>
                  <ImgReview>
                  <img src={image} alt="" />
                  </ImgReview>
                  <BodyReview>
                    <p  className='review-p'>{review}</p>
                    <p className='r-data'>{name}</p>
                  </BodyReview>
                </SwiperSlide>
                  )
                })
              }
            </Swiper>
        </Wrapper>
    </Container>
  )
}


const Container = styled.section`
height: 60vh;
background-image: url(../../Assests/testimonial.jpg);
background-repeat: no-repeat;
background-size: 100%;
background-attachment: fixed;
`

const ReviewBack = styled.div`
content: "";
position: absolute;
left: 0;
width: 100%;
height: 60%;
background-color: #03001C;
opacity: 0.6;
`

const Wrapper = styled.div`

h2{
  padding-top: 1rem;
  color: #fff;
  position: relative;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3.5rem
}

.review{
  
  padding: 2rem 0 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
`

// const Swiper = styled.div`
// display: flex;
// flex-direction: column;
// gap: 1rem;
// `

// const Review = styled.div`
// display: flex;
// flex-direction: column;
// gap: 1rem;
// justify-content: center;
// align-items: center;
// `

const ImgReview = styled.div`
img{
  width: 8rem;
  height: 8rem;
  background-color: rgb(144 172 209 / 20%);
  border-radius: 56% 44% 70% 30% / 30% 54% 46% 70%;
  position: relative;
  animation: water-wave 3s linear infinite;
  margin-bottom: 1rem;
}

img::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid rgba(11, 15, 20, 0.9);
    width: 10rem;
    height: 10rem;
    border-radius: 56% 44% 70% 30% / 30% 54% 46% 70%;;
    background-color: transparent;
    animation: water-wave 5s linear infinite alternate;
  }

@keyframes water-wave {
    0% {
      border-radius: 56% 44% 70% 30% / 30% 54% 46% 70%;
      border: 3px solid #fff;
    }
    50% {
      border-radius: 3% 97% 15% 85% / 72% 0% 100% 28%;
      border: 3px solid #fff;
    }
    100% {
      border-radius: 56% 44% 70% 30% / 30% 54% 46% 70%;
      border: 3px solid #fff;
    }
  }

`

const BodyReview = styled.div`
p{
  color: #fff;
  text-align: center;
  text-transform: capitalize;
  font-size: 1.1rem;
  /* max-width: 20rem; */
}

.review-p{

 
 font-weight: 200;
 line-height: 1.3;
 padding-bottom: 1rem;
 
}


.r-data{
  font-weight: 500;
  margin-bottom: 3rem;
}
`

export default Testimonials