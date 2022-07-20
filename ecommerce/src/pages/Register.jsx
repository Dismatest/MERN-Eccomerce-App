
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), 
url("https://images.unsplash.com/photo-1652028506778-002ebfd287f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80") 
center no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper = styled.div`
width: 60%;
padding: 40px;
background-color: white;
`;
const Title = styled.h3`
font-size: 20px;
font-weight: 200;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 10px 0px 0px;
padding: 5px;
`;
const Button = styled.button`
width: 40%;
border: none;
padding: 10px 20px;
background-color: teal;
color: white;
cursor: pointer; 
margin: 10px 0px;
`;

const Register = () => {
  return (
    <Container>
         <Wrapper>
             <Title>CREAT AN ACCOUNT</Title>
             <Form>
                 <Input placeholder="first name"/>
                 <Input placeholder="last name"/>
                 <Input placeholder="username"/>
                 <Input placeholder="email"/>
                 <Input placeholder="password"/>
                 <Input placeholder="confirm password"/>
                <Button>Register</Button>
             </Form>
         </Wrapper>
    </Container>
  )
}

export default Register 