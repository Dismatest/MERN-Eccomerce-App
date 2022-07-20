import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import React, { useState } from 'react'
import {sliderItems} from './data'

const Container = styled.div`
width: 100%;
height: 100vh;
display:flex;
position: relative;
overflow: hidden;
`;
const Pointer = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: white;
display:flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index:2;
`;
const Wrapper = styled.div`
display:flex;
height: 100%;
transition: all 1.5s ease;
transform: translateX(${props => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
width: 100vw;
heigh: 100vh;
display: flex;
align-items: center;
background-color: #${props=> props.bg};
`;
const ImageContainer = styled.div`
height: 100%;
flex: 1;
padding: 60px;

`;
const Image = styled.img`
height: 80%;
width: 100%;
padding-top: 30px;
object-fit: cover;
`;
const InfoContainer = styled.div`
flex: 1;
`;
const Tittle = styled.h2`
font-size: 30px;
`;
const Description = styled.p`
margin: 20px 0px;
font-size: 15px;
font-weight: 400;
latter-spacing: 2px;
`;
const Button = styled.button`
padding: 5px;
font-size: 10px;
background: transparent;
cursor: pointer;

`;

const Slider = () => {
  const [slideIndex, setslideIndex] = useState(0)
  const handleClick = (direction) => {
    if(direction === "left"){
      setslideIndex(slideIndex > 0 ? slideIndex-1: 2)
    }else{
      setslideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  }
  return (
      <Container>
          <Pointer direction="left" onClick={()=>handleClick("left")}>
              <ArrowLeftOutlined />
          </Pointer>
          <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item => (   
            <Slide bg={item.bg} key={item.Id}>
            <ImageContainer>
                <Image src={item.image} alt="placeholder" />
            </ImageContainer>
            <InfoContainer>
              <Tittle>{item.title}</Tittle>
              <Description>{item.desc}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>
            ))} 
          </Wrapper>
           <Pointer direction="right" onClick={() =>handleClick("right")}>
              <ArrowRightOutlined />
          </Pointer>
    </Container>
  )
}

export default Slider