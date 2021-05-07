import styled from 'styled-components';
import { device } from '../../styles/utils';

export const Container = styled.div`
  max-width: 1270px;
    margin: 0 auto;
    position: relative;
    padding: 0 20px;
`;


export const GoBack = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin-top: 12px;

  @media ${device.laptop} { 
    justify-content: left;
    margin: 22px;
  }
`;