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
    

    return(
        <>
            <StyledHead>
                <p>erstelle neuen Eintrag </p>
            </StyledHead> 
            <CreateOrderForm date={getDateFromString(dateString)} onHandleSubmit={onHandleSubmit}/>
            <NavBarNewOrder page={"new"} date={dateString}/>
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