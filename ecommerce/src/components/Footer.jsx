import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h3`

`;
const Desc = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
margin-bottom: 20px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;
const Right = styled.div`
flex: 1;
padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom: 10px;
display: flex;
align-items: center;
`;

const Payment = styled.img` 
width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Logo.</Logo>
            <Desc>
                Our products are available in different sizes
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F"> 
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men</ListItem>
                <ListItem>Woman</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>Account</ListItem>
                <ListItem>Truck order</ListItem>
                <ListItem>Wishlists</ListItem>
            </List>
        </Center>
        <Right>
            <Title>
                Contact
            </Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}}/>
                124 Carbi Center Nairobi 0100
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}}/>
                +254727750213
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: "10px"}}/>
                billclinton88@gmail.com
            </ContactItem>
            <Payment src="https://clipground.com/images/mpesa-logo-png-4.png" />
        </Right>
    </Container>
  )
}

export default Footer