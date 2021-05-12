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
      <h2 style={{ color: "white", 
                   textAlign: "center", 
                   fontFamily: "Yeon Sung, sans serif" 
                   }}>
        Mars°Ma°Zon
      </h2>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Chaz</FooterLink>
            <FooterLink href="#">Paul-E</FooterLink>
            <FooterLink href="#">AL</FooterLink>
          </Column>
          <Column>
            <Heading>Liens utiles</Heading>
            <FooterLink href="#">Nasa</FooterLink>
            <FooterLink href="#https://starwars.fandom.com/fr/wiki/Galaxie">Galaxies</FooterLink>
            <FooterLink href="#">Blabla</FooterLink>
           
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