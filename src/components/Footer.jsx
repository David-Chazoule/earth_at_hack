import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

  import galaxy from "./Assets/images/galaxie.png"

  
const Footer = () => {
  return (
    <Box>
      <h2 style={{ color: "black", 
                   textAlign: "center", 
                   fontFamily: "'Press Start 2P",
                   fontSize: "40px",
                   margin:0,
                   padding:"15px"
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
            <FooterLink href="https://www.leboncoin.fr/" target="_blank">Le très bon coin</FooterLink>
            <FooterLink href="https://starwars.fandom.com/fr/wiki/Galaxie" target="_blank">Galaxies voisines</FooterLink>
            <FooterLink href="https://intl.startrek.com/" target="_blank">Star Trek</FooterLink>
           
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Saturnbook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Neptagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  JupTwitter
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
          <img style={{ maxWidth:"80%"}} src={galaxy} alt="icone"/>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;