import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height: 20px;
background-color: teal;
color: white;
display:flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: 500;
`
const Advertisement = () => {
  return (
      <Container>
         We have a discount of 50% on the new arrival items... Hurry !!!
    </Container>
  )
}

export default Advertisement