import styled from 'styled-components';
import { device } from '../../styles/utils';


export const Container = styled.div`
  max-width: 400px;
 margin: 120px auto;

 @media ${device.laptop} { 
    max-width: 960px;
    margin: 120px auto;
  }
`;

export const FormItem = styled.div`
    margin-bottom: 22px;
    display:flex;
    position: relative;
`;

export const Image = styled.img`
width: 30px;
    max-height: 30px;
    margin-right: 12px;
    margin-top: 5px;
`;

export const Input = styled.input`
-webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
`;

export const Form = styled.form`
    max-width: 300px;
    margin: 0 auto;

    @media ${device.laptop} { 
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
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
    width: 100%;
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
    max-width: 600px
  }
`;


export const ErrorMessage = styled.div`
    text-align: center;
    margin: 10px;
    padding-top: 20px;
    color: #f66;
`;

export const  Sugestion = styled.div`
    margin: 30px 0;
    width: 100%;
    text-align: center;
    color: #9b9b9b;

    a {
        font-size: 14px;
    font-weight: 400;
    color: #14213D;
    text-decoration: none;
    transition: .3s;
    cursor: pointer;
    }
`;