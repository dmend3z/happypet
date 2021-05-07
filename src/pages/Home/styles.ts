import styled from 'styled-components';

import { device } from '../../styles/utils';

export const Container = styled.div`
  
`;

export const Categories = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin-top: 12px;

  @media ${device.laptop} { 
    justify-content: center;
    margin: 22px;
  }
`;

export const Wrapper = styled.div`
    max-width: 1270px;
    margin: 0 auto;
    position: relative;
    padding: 0 20px;
`

export const NextPage = styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 500;
    color: #14213D;
    text-align: right;
    cursor: pointer;
    background: rgb(20,33,61, 0.2);
    border-radius: 34px;
    padding: 8px 16px;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 700;
`;

export const LastPage = styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 500;
    color: #14213D;
    text-align: left;
    cursor: pointer;
    background: rgb(20,33,61, 0.2);
    border-radius: 34px;
    padding: 8px 16px;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 700;
    
`;



export const Pagination = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Items = styled.div`
  display:flex;
  flex-flow: column wrap;

  @media ${device.laptop} { 
    flex-flow: row wrap;
    padding: 10px 0;
  }
`;

export const ItemPet = styled.div`
   margin: 0;
  display: flex;
    flex-flow: column nowrap;
    position: relative;

    &:first-child {
        margin-top: 20px;
    }

    @media ${device.laptop} { 
   width: 31.83333%;
    flex: none;
    margin: 0 0.25%;

    &:first-child {
        margin-top: 0;
    }

  }
`;