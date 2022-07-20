import React from 'react'
import styled from 'styled-components'
import { SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Container = styled.div`
height: 50px;
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
`
const Left = styled.div`
flex:1;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
display: flex;
align-items: center;
`
const SerchContainer = styled.div`
display:flex;
margin-left: 20px;
padding: 3px;
align-items: center;
`
const Input = styled.input`
border: none;
`
const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h2`
font-weight: bold;
`
const Write = styled.div`
flex:1;
align-items: center;
display: flex;
justify-content: flex-end;
`
const MenuItems = styled.div`
font-size: 10px;
cursor: pointer;
margin-left: 20px;
`
const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
      <Container>
          <Wrapper>
              <Left>
                  <Language>
                      Logo
                      <SerchContainer>
                        <Input placeholder='search'/>
                          <SearchOutlined style={{ color: "gray", fontZise: 10 }}/>
                      </SerchContainer>
                  </Language>
              </Left>
              <Center>
                <Logo>BUY ONLINE.</Logo>
              </Center>
              <Write>
                <MenuItems>Register</MenuItems>
                <MenuItems>Login</MenuItems>
                <Link to="/cart">
                  <MenuItems>
                    <Badge badgeContent={quantity} color="secondary">
                    <ShoppingCartOutlined />
                    </Badge>
                  </MenuItems>
                  </Link>
              </Write>
          </Wrapper>
    </Container>
  )
}

export default Navbar