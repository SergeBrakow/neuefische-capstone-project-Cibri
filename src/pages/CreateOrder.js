import styled from "styled-components";

import NavBarNewOrder from "../components/NavBarNewOrder";

export default function CreateOrder({onHandleSubmit}){
   

    return(
        <>
            <StyledHead>
                <p>erstelle neuen Eintrag </p>
            </StyledHead> 

            <NavBarNewOrder page={"new"}/>
        </>
    );
}

export const StyledHead = styled.div`
    border-bottom: 1px solid;
    width: 100%;
    height: 70px;
    margin-bottom: 10px; 
`