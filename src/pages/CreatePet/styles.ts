import styled from 'styled-components';
import { device } from '../../styles/utils';

export const Container = styled.div`
  
`;

export const Wrapper = styled.div`
    max-width: 1270px;
    margin: 0 auto;
    position: relative;
    padding: 0 20px;
    @media ${device.laptop} { 
        margin: 0 auto;
         max-width: 1120px;
         padding: 0;
        position: relative;
        width: 100%;
        box-sizing: border-box;
  }
`

export const ErrorMessage = styled.div`
    text-align: center;
    margin: 10px;
    padding-top: 20px;
    color: #f66;
`;