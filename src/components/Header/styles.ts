import styled from 'styled-components';

interface Props{  // DEPOIS MUDA AQUI O NOME XD 
  background?: string; 
}

export const Container = styled.header<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
  min-height: 60px;
  margin: 0 auto;
  background-color: ${props => props.background || "#ffc244"};
  z-index: 19;
  box-sizing: border-box;
  align-items: flex-start;
  position: relative;

  img {
    height: 52px;
    margin-top: 0;
  }
`;

export const TextLogout = styled.span`
  padding: 8px;
  color: #ffffff;
  
`;