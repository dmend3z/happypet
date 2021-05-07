import styled from "styled-components";
import { device } from "../../../../styles/utils";




export const Wrapper = styled.div`
    max-width: 1270px;
    margin: 0 auto;
    position: relative;
    padding: 0 20px;
`

export const Container = styled.div`
   display: flex;
    flex-flow: column nowrap;
    position: relative;
  margin-top: 20px;
  justify-content: space-between;  

  @media ${device.laptop} {
    flex-flow: row wrap; 
  }
`;

export const Item = styled.div`
      display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 2px 20px 0 rgb(0 0 0 / 10%);
    text-decoration: none;
    overflow: hidden;
    margin-bottom: 40px;
    transition: .3s;
    min-width: 260px;

    @media ${device.laptop} {
      width: 45%; 
      margin-bottom: auto;
  }

`;

export const Title = styled.div`
   display: flex;
    justify-content: center;
    margin-bottom: 16px;

    h3 {
    font-size: 16px;
    padding: 0 0 12px ;
    margin: 0;

    
  }

  @media ${device.laptop} { 
    justify-content: left;
    h3 {
    font-size: 28px;
    padding: 0 ;
    margin: 0;
    width: 100%;
    overflow-wrap: break-word;
  }
  }
`;

export const Info = styled.div`
   position: relative;
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 300px;
    align-items: left;
    p {
    font-size: 12px;
    padding: 0 ;
    margin: 0;
    width: 100%;
    overflow-wrap: break-word;
  }

  @media ${device.laptop} { 
    max-width: 1224px;
    
    p {
    font-size: 18px;
    padding: 0 ;
    margin: 0;
    width: 100%;
    overflow-wrap: break-word;
  }
  }
`;




export const ItemContact = styled.div`
      display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    border-radius: 10px;
    text-decoration: none;
    overflow: hidden;
    transition: .3s;
    min-width: 260px;
    justify-content: center;

    a {
      width: 100%;
    }

    @media ${device.laptop} { 
      
      display: flex;
      width: 45%;
      align-self: center;
      border-radius: 10px;
    box-shadow: 0 2px 20px 0 rgb(0 0 0 / 10%);
    padding: 16px;
     }

`;

export const NameContact = styled.div`
   display: flex;
    justify-content: center;
    
    p {
    font-size: 16px;
    padding: 0 0 12px ;
    margin: 0;
    
  }

  @media ${device.laptop} { 
    p {
      font-size: 26px;
    padding: 0 ;
    margin: 0;
    width: 100%;
    overflow-wrap: break-word;
  }
  }
`;