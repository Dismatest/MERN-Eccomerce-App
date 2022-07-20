import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import React from 'react'


const Container = styled.div`
height: 60vh;
background-color: #fcf5f5f5;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Title = styled.h3`
font-size: 40px;
margin-bottom: 10px;
`;
const Description = styled.div`
font-size: 20px;
font-weight: 200;
margin-bottom: 10px;
`;
const InputContainer = styled.div`
width: 50%;
height: 30px;
background-color: #white;
display: flex;
justify-content: space-between;
border: 1px solid lightgrey;
`;
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`;
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
cursor: pointer;
`;

const Newslatter = () => {
  return (
    <Container>
        <Title>Subscribe To Our Newslatter</Title>
        <Description>Subscribe to our newslatter for new arrivals.</Description>
        <InputContainer>
        <Input placeholder="input your email address"/>
        <Button>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newslatter