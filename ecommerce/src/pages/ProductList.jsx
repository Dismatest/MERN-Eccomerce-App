import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Advertisement from "../components/Advertisement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLatter";
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
`;

const Title = styled.h3`
margin: 15px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const Filter = styled.div`
margin: 15px;
`;

const FilterText = styled.span`
font-size: 15px;
font-weight: 400;
margin-right: 10px;
`;
const Select = styled.select`
padding: 5px;
margin-right: 10px;
`;
const Option = styled.option`
`;
const ProductList = () => {

  const location = useLocation()
  const cat = location.pathname.split('/')[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")


const handleFilters = (e) =>{
const value = e.target.value
setFilters({
  ...filters,
  [e.target.name]: value
})
}
  
console.log(filters)
  return (
    <Container>
      <Navbar />
      <Advertisement/>
      <Title>{`${cat} products`}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest" disabled>
              Newest 
            </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option> 
          </Select>
        </Filter>
        <Filter>
        <FilterText>Sort Products</FilterText>
        <Select name="size" onChange={handleFilters}>
            <Option disabled>
              Size
            </Option>
            <Option>Xs</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default ProductList