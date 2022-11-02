import styled from "styled-components";

export default function EntryCard(){

    return(
        <StyledCard >
            <p>Termin Name</p>
            <p>Kunden Name</p>
        </StyledCard>
    );
}

export const StyledCard = styled.div` 
    border: solid 1px;
    border-radius: 10px;
    margin: 5px;
    &:hover {
        background-color: lightgray;
    }
`


