import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 80px;
    margin-bottom: 60px;
    text-align: left;
    
    fieldset {
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        border: 0.5px solid;
        border-radius: 10px;
        border-color: gray;
        border-bottom: solid;
        border-color: #74b49b;
        background-color: #f4f9f4; 
        width: 300px;
        gap: 10px;
    }
`
export const SaveBtn = styled.button`
    height: 40px;
    margin-top: 70px;
    height: 40px;
    background-color: #f4f9f4;
    border: 1px solid;
    border-radius:10px;

    &: hover {
        background-color: white;
        border: none;
        -webkit-box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38); 
        box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38);
    }  
`
export const DeleteBtn = styled.button`
    margin-top: 20px; 
    height: 40px;
    background-color: #f4f9f4;
    border: 1px solid;
    border-radius:10px;

    &: hover {
        background-color: white;
        border: none;
        -webkit-box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38); 
        box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38);
    }  
`
export const LinkedUserBtn = styled.button`
    background-color: white;
    border-radius: 10px;
    border: none;
    border-bottom: 0.5px solid;

    &:hover {
        background-color: #cc0000;
        outline: none;
    }
`
export const LeftUserBtn = styled.button`
    background-color: white;
    border-radius: 10px;
    border: none;
    border-bottom: 0.5px solid;

    &:hover {
        background-color: #009933;
        outline: none;
    }
`
export const ShowUserLeftBtn = styled.button`
    height: 40px;
    border: 1px solid;
    border-radius:10px;
    background-color: #f4f9f4;

    &: hover {
        background-color: white;
        border: none;
        -webkit-box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38); 
        box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38);
    } 
`