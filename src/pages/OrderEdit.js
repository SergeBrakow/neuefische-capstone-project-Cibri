import { useContext } from "react";
import { useParams} from "react-router-dom";
import styled from "styled-components";

import NavBarNewOrder from "../components/NavBarFooter";
import EditOrderForm from "../components/OrderEditForm";
import { StyledHead } from "../components/styles/StyledHead";
import { UserContext } from "../utils/UserContext";

export default function OrderEdit(){
    const { user, userList, orderList, setOrderList, setIdPosInHome } = useContext(UserContext);

    let {id} = useParams();
    const order = orderList.find( (order) => order.id === id);

    function editOrder(orderId, order_type, order_name, orderDateFull, note, linkedUSerIdList){
        setIdPosInHome(order.date.hour);
        if(order_name === "") {
            deleteOrder(orderId);
        } else {
            setOrderList(
            orderList.map ((order) =>
                order.id === orderId ? {
                ...order,
                type: order_type,
                name: order_name,
                date: orderDateFull,
                owner: user.name,
                note: note,
                linkedUser: linkedUSerIdList,
                } : 
                order
            )
            );
        }
    }
    
    function deleteOrder(id){
        setOrderList(orderList.filter((order) => order.id !== id));
    }

    window.scrollTo(0, 0);
    return(
        <div>
            <StyledHead>
                <p>Eintrag bearbeiten</p>
            </StyledHead> 
            <EditOrderForm 
                order={order} 
                userList={userList}
                setIdPosInHome={setIdPosInHome}
                onHandleSubmit={editOrder}/>
            <NavBarNewOrder page={"new"} dateString={order.date.dateString}/>
        </div>
    );
}