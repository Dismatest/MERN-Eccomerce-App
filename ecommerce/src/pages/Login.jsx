import React from 'react'
import styled from 'styled-components';

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
width: 50%;
padding: 20px;
background-color: white;
`;
const Title = styled.h3`
font-size: 20px;
font-weight: 200;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 5px;
`;
const Button = styled.button`
width: 40%;
border: none;
padding: 5px 20px;
background-color: teal;
color: white;
cursor: pointer; 
`;
const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
             <Title>SIGN IN</Title>
             <Form>
                 <Input placeholder="username"/>
                 <Input placeholder="password"/>
                <Button>Login</Button>
                <Link>Forgot password?</Link>
                <Link>Creat Account</Link>
             </Form>
         </Wrapper>
    </Container>
  )
}

export default Login