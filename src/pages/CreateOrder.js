import { useParams } from "react-router-dom"; 
import styled from "styled-components";

import NavBarNewOrder from "../components/NavBarNewOrder";
import CreateOrderForm from "../components/CreateOrderForm";
import { getDateString } from "../utils/getDate";

export default function CreateOrder({onHandleSubmit}){
    let {dateString} = useParams();
    if(dateString === undefined || dateString.length !== 10) {
        dateString = getDateString(new Date());
    }
    
    const showDate = new Date(Number(dateString.slice(6, 10)),
                              (Number((dateString.slice(3, 5)-1))), 
                                Number(dateString.slice(0, 2)));

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