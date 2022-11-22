import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";

import NavBarNewOrder from "../components/NavBarFooter";
import EditOrderForm from "../components/OrderEditForm";
import { StyledHead } from "../components/styles/StyledHead";
import { UserContext } from "../utils/UserContext";

export default function OrderEdit(){
    const { user, userList, customerList, orderList, setOrderList, setIdPosInHome } = useContext(UserContext);
    const navigate = useNavigate();

    let {id} = useParams();
    const order = (orderList.find( (order) => order.id === id));

    function editOrder(orderId, order_type, order_name, orderDateFull, note, linkedUserIdList, linkedCustomerIdList){
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
                linkedUser: linkedUserIdList,
                linkedCustomer: linkedCustomerIdList,
                } : 
                order
            )
            );
        }
    }
    
    function deleteOrder(id){
        setOrderList(orderList.filter((order) => order.id !== id));
    }

    useEffect(() => {
        if (order === undefined){
            navigate("/home")   
            alert("Der Eintrag konnte nicht gefunden werden!");
        }
    },[])

    window.scrollTo(0, 0);
    return(
        <div>
            <StyledHead>
                <p>Eintrag bearbeiten</p>
            </StyledHead>     
            {order !== undefined?    
            <>
                <EditOrderForm 
                    order={order} 
                    userList={userList}
                    setIdPosInHome={setIdPosInHome}
                    customerList={customerList}
                    onHandleSubmit={editOrder}/>      
                <NavBarNewOrder page={"new"} dateString={order.date.dateString}/>
            </>
            :""}
        </div>
    );
}