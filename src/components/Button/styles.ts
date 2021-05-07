import styled from 'styled-components';
import { device } from '../../styles/utils';

interface Button {
    width?: string;
}

export const ButtonStyled = styled.button<Button>`
        font-weight: 700;
    text-decoration: none;
    padding: 20px 60px;
    min-width: 120px;
    color: #fff;
    background-color: #14213D;
    border-radius: 100px;
    border: none;
    text-align: center;
    cursor: pointer;
    outline: none;
    max-width: 340px;
    box-sizing: border-box;
    padding: 16px 28px;
    width: ${p => (p.width)};
    justify-content: center;

    &:disabled {
        background-color: #e4e4e4;
    cursor: not-allowed;
    box-shadow: none;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    }
    &[disabled] {
        background-color: #e4e4e4;
    cursor: not-allowed;
    box-shadow: none;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    }

    @media ${device.laptop} { 
    max-width: 1224px;
  }
`;
