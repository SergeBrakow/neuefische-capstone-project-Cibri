import { useContext } from "react";
import { useParams } from "react-router-dom"; 

import NavBarNewOrder from "../components/NavBarFooter";
import CreateOrderForm from "../components/OrderCreateForm";
import { StyledHead } from "../components/styles/StyledHead";
import { getDateFromString, getDateString } from "../utils/getDate";
import { UserContext } from "../utils/UserContext";

export default function OrderCreate(){
    // zeit und datum aus der url (11.11.2022-2) 
    let {dateString} = useParams();
    let createAtTime = new Date().getHours();
    if(dateString !== undefined && dateString.length >10) {
      const tempNumber = Number(dateString.slice(11, dateString.length));
      if(tempNumber >=0 || tempNumber<24) { createAtTime = tempNumber; }
      dateString = dateString.slice(0, 10);
    }
    if(dateString === undefined || dateString.length !== 10) {
      dateString = getDateString(new Date());
    } 

    const { user, userList, customerList, orderList, setOrderList } = useContext(UserContext);

    function addOrder(orderId, order_type, order_name, orderDateFull, note, linkedUSerIdList, linkedCustomerIdList){
    setOrderList([
      {
        id: orderId,
        type: order_type,
        name: order_name,
        date: orderDateFull,
        owner: user.name,
        note: note,
        linkedUser: linkedUSerIdList,
        linkedCustomer: linkedCustomerIdList,
      },
      ...orderList,
    ]);
  }

    return(
        <>
            <StyledHead>
                <p>erstelle neuen Eintrag </p>
            </StyledHead> 
            <CreateOrderForm 
                userList={userList}
                customerList={customerList}
                date={getDateFromString(dateString)} 
                time={createAtTime}
                onHandleSubmit={addOrder}/>
            <NavBarNewOrder page={"new"} date={dateString}/>
        </>
    );
}
