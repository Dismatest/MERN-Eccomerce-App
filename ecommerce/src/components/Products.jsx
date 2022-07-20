import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {popularProducts} from './data'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {
  const [products, setProduct] = useState([])
  const [productFiltered, setProductFiltered] = useState([])

  useEffect(() => {
    const fetchProducts = async () =>{
      try {
        const res = await axios.get(cat ? `http://localhost:5000/api/v1/product/findall?category${cat}` : `http://localhost:5000/api/v1/product/findall`)
        setProduct(res.data)
      } catch (error) {
        
      }
    }
    fetchProducts()
  }, [cat])

  useEffect(() => {
    cat && setProductFiltered(
      products.filter((item) =>
      Object.entries(filters).every(([key, value]) => 
      item[key].includes(value)
      )
      )
    )
  }, [products, cat, filters])

  useEffect(() => {
    if (sort === "newest"){
      setProductFiltered((prev) => 
      [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    }else if (sort === "asc"){
      setProductFiltered((prev) => 
      [...prev].sort((a, b) => a.price - b.price)
      )
    }else{
      setProductFiltered((prev) => 
      [...prev].sort((a, b) => b.price - a.price)
      )
    }
  }, [sort])
  return (
    <Container>
    {cat ? productFiltered.map(item =>(
        <Product item={item} key={item._id} />
    )) : products.slice(0, 8).map(item =>(
      <Product item={item} key={item._id} />
  ))}
    </Container>
  )
}

export default Products