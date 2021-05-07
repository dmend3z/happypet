import styled from 'styled-components';

export const Container = styled.div`
    white-space: wrap;
    overflow: hidden;
    position: relative;
`;

export const Filter = styled.div`
    display: flex;
    font-size: 14px;
    padding: 8px 12px;
    margin-right: 7px;
    cursor: pointer;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
    border-radius: 100px;
    color: #4a4a4a;
    text-decoration: none;
`;

export const FilterTitle = styled.h2`
    display: inline;
    margin: 0;
    font-size: 14px;
    font-weight: 300;
    font-family: Gotham,Arial,Helvetica Neue,Helvetica,sans-serif;
    line-height: 20px;
    vertical-align: middle;
`;