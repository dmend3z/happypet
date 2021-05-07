import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/utils";

export const Container = styled.div`
  margin-top: 24px;
`;

export const Item = styled(Link)`
  margin-bottom: 12px;
  box-shadow: none;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 20px 0 rgb(0 0 0 / 10%);
  text-decoration: none;
  overflow: hidden;
  margin-bottom: 12px;
  transition: 0.3s;
  min-width: 260px;
  
  @media ${device.laptop} { 
    margin-bottom: 36px;
    flex: none;
    height: auto;
  }
  
`;

export const Background = styled.div`
  width: 100%;
  height: 140px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 140px;
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h3`
    text-align: center;
    font-size: 28px;
    line-height: 1.2;
    font-weight: 400;
    color: #fff;
    margin: 0;
    padding: 0 8px;
    text-shadow: 0 1px 4px rgb(0 0 0 / 60%);

`;

export const CardContent = styled.div`
    padding: 8px 8px;
    @media ${device.laptop} { 
      padding: 12px 14px;
  }
   
`;

export const About = styled.div`
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 1.6;
    font-weight: 400;
    color: #000;
`;

export const AboutText = styled.div`
    display: flex;
    align-items: center;
`;

export const Text = styled.span`
    color: #000;
    font-size: 14px;
    font-weight: 500;
`;
