import styled from 'styled-components';

   
export const Box = styled.div`
  background: #CE490C;
  width: 100%;
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    border-top: solid 0.5px black;
    @media (max-width: 1000px) {
    font-size:20px;
    } 
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
export const FooterLink = styled.a`
  color: white;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
 
   
  &:hover {
      color: #F48723;
      transition: 100ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 18px;
  color: white;
  font-style: italic;
  // font-weight: bold;
  text-decoration: underline white;
  text-underline-offset: 3px;
`;