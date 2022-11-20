import styled from "styled-components";

export const OrderBox= styled.div`
    border-radius: 15px;
    margin-top: 5px;
    margin-buttom: 5px;
    padding: 10px; 
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.55); 
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.55);
    &: hover {
        background-color: white;
        border: none;
        -webkit-box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38); 
        box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38);; 
    }
`