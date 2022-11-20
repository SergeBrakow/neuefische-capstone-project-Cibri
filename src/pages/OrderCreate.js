import { useContext } from "react";
import { useParams } from "react-router-dom"; 

import NavBarNewOrder from "../components/NavBarFooter";
import CreateOrderForm from "../components/OrderCreateForm";
import { StyledHead } from "../components/styles/StyledHead";
import { getDateFromString, getDateString } from "../utils/getDate";
import { UserContext } from "../utils/UserContext";

export default function OrderCreate(){
    let {dateString} = useParams();
    if(dateString === undefined || dateString.length !== 10) {
        dateString = getDateString(new Date());
    }

    const { user, userList, orderList, setOrderList } = useContext(UserContext);

    function addOrder(orderId, order_type, order_name, orderDateFull, note, linkedUSerIdList){
    setOrderList([
      {
        id: orderId,
        type: order_type,
        name: order_name,
        date: orderDateFull,
        owner: user.name,
        note: note,
        linkedUser: linkedUSerIdList,
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
                date={getDateFromString(dateString)} 
                onHandleSubmit={addOrder}/>
            <NavBarNewOrder page={"new"} date={dateString}/>
        </>
    );
}
