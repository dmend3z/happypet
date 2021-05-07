import styled from 'styled-components'




export const Container  = styled.div`
    width: 100%;
    margin: 0 0 30px 0;
    display: flex;
    flex-direction: column;
    position: relative;

`;

export const Label = styled.label`
    position: relative;
    font-size: 12px;
    color: #6e6e6e;
    text-align: left;
    line-height: 1;
`

export const StyledSelect = styled.select`
    width: 100%;
    min-height: 31px;
    margin: 0;
    padding: 0 20px 0 0;
    border: none;
    border-bottom: 2px solid #d8d8d8;
    color: #222222;
    border-radius: 0;
    box-sizing: border-box;
    font-size: 16px;
    outline:none;
    
    &:focus {
    border-bottom: 2px solid #ffc244;
}
`