import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h2 style={{ color: "black", 
                   textAlign: "center", 
                   fontFamily: "Yeon Sung, sans serif",
                   fontSize: "30px",
                   }}>
        Mars°Ma°Zon
      </h2>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="https://www.linkedin.com/in/david-chazoule-7b7ba81b5/" target="_blank">Chaz</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/paul-emmanuel-legrand-3a07b4a9/" target="blank">Paul-E</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/anne-laure-ferrari-480676209/" target="blank">AL</FooterLink>
          </Column>
          <Column>
            <Heading>Liens utiles</Heading>
            <FooterLink href="">Nasa</FooterLink>
            <FooterLink href="https://starwars.fandom.com/fr/wiki/Galaxie" target="_blank">Galaxies</FooterLink>
            <FooterLink href="">Blabla</FooterLink>
           
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;