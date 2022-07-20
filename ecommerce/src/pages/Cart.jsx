import styled from 'styled-components'
import React from 'react'
import Advertisement from '../components/Advertisement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Add, Remove } from '@material-ui/icons'
import { useSelector } from 'react-redux'

const Container = styled.div`

`;
const Wrapper = styled.div`
padding:20px;
`;
const Title = styled.h3`
font-weight: 200;
text-align:center;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const TopButton = styled.button`
padding: 3px;
font-weight: 200;
cursor: pointer;
border: ${props=>props.type === "filed" && "none"};
background-color: ${props=>props.type === "filed" ? "black" : "transparent"};
color: ${props=>props.type === "filed" && "white"};

`;

const Toptexts = styled.div`
`;
const Toptext = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 15px;
`;
const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;
const Info = styled.div`
flex: 3;
`;

const Summery = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 10px;
height: 80vh;
margin-top: 10px;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;
`;
const Image = styled.img`
width: 200px;
padding: 10px 0px;
border-radius: 10px;
`;
const Details= styled.div`
padding: 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.span`

`;
const ProductId = styled.span`

`;
const ProductColor = styled.div`
width: 10px;
height: 10px;
border-radius: 50%;
background-color: ${props=>props.color}
`;
const ProductSize = styled.span`

`;

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-button: 10px;
`;

const ProductAmount = styled.div`
font-size: 12px;
margin: 4px;
`;
const ProductPrice = styled.div`
font-size: 12px;
font-weight: 200;
`;

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`;

const SummeryTitle = styled.h3`
font-weight: 200;
`;
const SummeryItems = styled.div`
margin: 20px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "300"};
font-size: ${props=>props.type === "total" && "24px"};

`;
const SummeryItemText = styled.span`

`;
const SummeryItemPrice = styled.span`

`;
const SummeryButton = styled.button`
width: 100%;
padding: 3px;
background-color: black;
color: white;
font-weight: 400;
`;

const Cart = () => {
    const cart = useSelector(state=>state.cart)
  return (
    <Container>
        <Navbar/>
        <Advertisement/>
        <Wrapper>
            <Title>Your Shopping Cart</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <Toptexts>
                    <Toptext>Shopping bag(3)</Toptext>
                    <Toptext>Your Wishlist(0)</Toptext>
                </Toptexts>
                <TopButton type="filed">Check out</TopButton>
            </Top>
            <Bottom>
                <Info>
            { cart.products.map(product => (
            <Product>
                        <ProductDetail>
                            <Image src={product.img} />
                            <Details>
                                <ProductName><b>Product: </b>{product.name}</ProductName>
                                <ProductId><b>Id: </b>{product._id}</ProductId>
                                <ProductColor color={product.color}/>
                                <ProductSize><b>size: </b>{product.size}</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
                        </PriceDetail>
                    </Product>
                    ))
                    }
                    <Hr/>
                </Info>
                <Summery>
                    <SummeryTitle>Order Summery</SummeryTitle>
                    <SummeryItems>
                        <SummeryItemText>Subtotal</SummeryItemText>
                        <SummeryItemPrice>$ {cart.total}</SummeryItemPrice>
                    </SummeryItems>
                    <SummeryItems>
                        <SummeryItemText>Estimated Shipping</SummeryItemText>
                        <SummeryItemPrice>$ 21</SummeryItemPrice>
                    </SummeryItems>
                    <SummeryItems>
                        <SummeryItemText>Order Discount</SummeryItemText>
                        <SummeryItemPrice>$ 100</SummeryItemPrice>
                    </SummeryItems>
                    <SummeryItems type="total">
                        <SummeryItemText>Total</SummeryItemText>
                        <SummeryItemPrice>$ {cart.total}</SummeryItemPrice>
                    </SummeryItems>
                    <SummeryButton>Check Out</SummeryButton>
                </Summery>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart