import { useParams } from "react-router-dom"; 
import styled from "styled-components";

import NavBarNewOrder from "../components/NavBarNewOrder";
import CreateOrderForm from "../components/CreateOrderForm";
import { getDateFromString, getDateString } from "../utils/getDate";

export default function CreateOrder({onHandleSubmit}){
    let {dateString} = useParams();
    if(dateString === undefined || dateString.length !== 10) {
        dateString = getDateString(new Date());
    }
    
    const showDate = getDateFromString(dateString);

    return(
        <>
            <StyledHead>
                <p>erstelle neuen Eintrag </p>
            </StyledHead> 
            <CreateOrderForm date={showDate} onHandleSubmit={onHandleSubmit}/>
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