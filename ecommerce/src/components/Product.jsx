import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
top: 0;
left: 0;
position: absolute;
background-color: grey;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 150px;
height: 280px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info}{
opacity: 1;
}
`;
const Image = styled.img`
height: 90%;
width: 90%;
z-index: 2;
`;
const Icon = styled.div`
height: 30px;
width: 30px;
border-radius: 50%;
background-color: rgba(0, 0, 0, 0.2);
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;

&:hover{
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`;

const Product = ({item}) => {
  return (
    <Container>
      <Image src={item.image}/>
      <Info>
          <Icon>
              <ShoppingCartOutlined/>
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`}>
              <SearchOutlined/>
            </Link>
          </Icon>
          <Icon>
              <FavoriteBorderOutlined/>
          </Icon>
      </Info>
    </Container>
  )
}

export default Product