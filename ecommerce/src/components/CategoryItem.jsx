import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`;
const Image =styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
const Info = styled.div`
position: absolute;
height: 100%;
width: 100%;
top:0;
left:0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Title = styled.h4`
color: white;
margin-bottom: 10px;
`;
const Button = styled.button`
border: none;
padding: 5px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.image}/>
      <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
      </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem