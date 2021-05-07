import styled from 'styled-components';



export const Container = styled.div`
  max-width: 1270px;
    margin: 0 auto;
    position: relative;
    padding: 0 20px;
`;

export const Content = styled.div`
    padding-top: 14px;
`;

export const ProfileContent = styled.div`
        position: relative;
    border-bottom: 1px solid rgba(0,0,0,.1);
    margin-bottom: 20px;
    padding-bottom: 20px;
`;

export const ProfilePair = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0;
`;


export const ProfileHint= styled.div`
    color: rgba(0,0,0,.4);
    margin-bottom: 10px;
`;

export const ProfileText= styled.div`
    display: flex;
    justify-content: center;
`;

export const HeaderTitle = styled.div`
        padding-top: 21px;
        padding-bottom: 38px;
        font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    border-bottom: 1px solid rgba(0,0,0,.1);
    color: #000;
    word-wrap: break-word;
    word-break: break-all;
`;

export const Divider = styled.div`
    height: 1px;
    background-color: rgba(0,0,0,.1);
    margin: 0 -20px;
`;

export const ProfileLogout = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #14213D;
    text-align: right;
    cursor: pointer;
`;
