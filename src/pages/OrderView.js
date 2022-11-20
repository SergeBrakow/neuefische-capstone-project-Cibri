import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import NavBarFooter from "../components/NavBarFooter";
import OrderViewSection from "../components/OrderViewSection";
import { StyledHead } from "../components/styles/StyledHead";
import { UserContext } from "../utils/UserContext";

export default function OrderView(){
    const { userList, orderList } = useContext(UserContext);
    
    let {id} = useParams();
    const order = orderList.find( (order) => order.id === id);

    return(
        <>
        <StyledHead>
            <p>Detailansicht</p>
        </StyledHead> 
        <OrderViewSection 
            order={order} 
            userList={userList}/>
        <NavBarFooter page={"back"}/>
        </>
    );
}