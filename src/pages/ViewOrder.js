import { useParams } from "react-router-dom";
import styled from "styled-components";

import NavBarNewOrder from "../components/NavBarNewOrder";
import ViewOrderSection from "../components/ViewOrderSection";

export default function ViewOrder({entries}){
    let {id} = useParams();
    const order = entries.find( (entry) => entry.id === id);

    return(
        <>
        <StyledHead>
            <p>Detailansicht</p>
        </StyledHead> 
        <ViewOrderSection order={order} />
        <NavBarNewOrder page={"new"}/>
        </>
    );
}

export const StyledHead = styled.div`
    border-bottom: 1px solid;
    background-color: white;
    position: fixed;
    width: 100%;
    height: 70px;
    top: 0;
    layer: 10; 
    margin-bottom: 10px; 
`