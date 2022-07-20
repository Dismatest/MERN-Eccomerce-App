import { Add, Remove } from '@material-ui/icons';
import {React, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'; 
import styled from "styled-components"
import Advertisement from '../components/Advertisement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLatter from '../components/NewsLatter';
import { addProduct } from '../redux/catRedux';
import { publicRequest } from "../requestMethods"
import { useDispatch } from 'react-redux';


const Container = styled.div`

`;
 const Wrapper = styled.div`
 padding: 40px;
 display:flex;
 `;
 const ImageContainer = styled.div` 
 flex: 1;
 `;
 const InfoContainer = styled.div`
 flex: 1;
 padding: 0px 50px;
 `;
 const Image = styled.img`
 width: 100%;
 height: 60vh;
 object-fit: cover;
 `;
 const Title = styled.h3`
 font-weight: 200;
 `;
 const Desc = styled.p`
 margin: 10px 0px;
 `;
 const Price = styled.span`
 font-weight: 80;
 font-size: 20px;
 `;

 const FilterContainer = styled.div` 
 display: flex;
 justify-content: space-between;
 margin: 20px 0px;
 width: 60%;
 `;
 const Filter = styled.div`
 display: flex;
 align-items: center;
 `;
 const FilterTitle = styled.span`
 font-size: 10px;
 font-weight: 100;
 `;
 const FilterColor = styled.div`
 width: 20px;
 height: 20px;
 border-radius: 50%;
 background-color: ${props=>props.color};
 margin: 0px 3px;
 cursor: pointer;
 `;
 const FilterSize = styled.select`
 margin-left: 10px;
 padding: 3px;
 `;
 const FilterSizeOption = styled.option``;
 const AddContainer = styled.div`
 display: flex;
 align-items: center;
 width: 60%;
 justify-content: space-between;
 `;
 const AmountContainer = styled.div`
 display: flex;
 align-items: center;
 `;
 const Amount = styled.div`
 width: 20px;
 height: 20px;
 border-radius: 5px;
 border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
 `;
 const Button = styled.button`
 padding: 5px;
 border: 1px solid teal;
 background-color: white;
 cursor: pointer;

 &:hover{
     background-color: #f8f4f4;
 }
 `;

const Product = () => {

  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () =>{
        try {

        const res = await publicRequest.get(`/product/find/+${id}`)
            setProduct(res.data)
        } catch (error) {
            
        }
    }
    getProduct()
  },[id])

  const handleQuantity = (type)=>{
   if(type === 'dec'){
       //if quantity is greater than one then decrement by one
       quantity > 1 && setQuantity(quantity - 1)
   }else if(type === 'inc'){
        setQuantity(quantity + 1)
   }
  }
const handleClick = () =>{
    dispatch(addProduct({...product, quantity, color, size}))
}

  return (
   <Container>
       <Navbar/>
       <Advertisement/>
       <Wrapper>
           <ImageContainer>
               <Image src={product.image}/>
           </ImageContainer>
           <InfoContainer>
               <Title>{product.title}</Title>
               <Desc>{product.desc}</Desc>
               <Price>{product.price}</Price>
               <FilterContainer>
                   <Filter>
                       <FilterTitle>Color</FilterTitle>
                       {
                           product.color?.map((c) => (
                            <FilterColor color={c} key={c} onClick={setColor(c)}/>
                           ))
                       }
                    
                   </Filter>
                   <Filter>
                       <FilterTitle>Size</FilterTitle>
                       <FilterSize onChange={(e)=>setSize(e.target.value)}>
                           {
                               product.size?.map((z) => (
                                <FilterSizeOption key={z}>{z}</FilterSizeOption>
                               ))
                           }                           
                       </FilterSize>
                   </Filter>
               </FilterContainer>
               <AddContainer>
                   <AmountContainer>
                       <Remove onClick={()=>handleQuantity("dec")}/>
                       <Amount>{quantity}</Amount>
                       <Add onClick={()=>handleQuantity("inc")}/>
                   </AmountContainer>
                   <Button onclick={handleClick}>Add To Cart</Button>
               </AddContainer>
           </InfoContainer>
       </Wrapper>
       <NewsLatter/>
       <Footer/>
   </Container>
  )
}

export default Product