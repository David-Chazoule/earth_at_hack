import styled from 'styled-components';
   
export const Box = styled.div`
  background: #404654;
  position: absolute;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
   
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 
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
      color: #CBA646;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: white;
  // margin-bottom: 40px;
  font-weight: bold;
  text-decoration: underline white;
  text-underline-offset: 3px;
`;