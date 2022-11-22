import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import NavBarFooter from "../components/NavBarFooter";
import OrderViewSection from "../components/OrderViewSection";
import { StyledHead } from "../components/styles/StyledHead";
import { UserContext } from "../utils/UserContext";

export default function OrderView(){
    const { userList, orderList, customerList} = useContext(UserContext);
    const navigate = useNavigate();
    
    let {id} = useParams();
    const order = orderList.find( (order) => order.id === id);

    if( order === undefined ) {
        alert("Dieser Eintrag kann nicht gefunden werden!");
        navigate("/home")
    }
    
    useEffect(() => {
        if (order === undefined){
            navigate("/home")   
            alert("Der Eintrag konnte nicht gefunden werden!");
        }
    },[])

    return(
        <>
        <StyledHead>
            <p>Detailansicht</p>
        </StyledHead> 
        {order !== undefined? 
            <>
                <OrderViewSection 
                    order={order} 
                    customerList={customerList} 
                    userList={userList}/>
                <NavBarFooter page={"back"}/>
            </> 
        :""}
        </>
    );
}