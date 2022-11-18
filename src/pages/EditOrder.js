import { useParams} from "react-router-dom";
import styled from "styled-components";

import NavBarNewOrder from "../components/NavBarNewOrder";
import EditOrderForm from "../components/EditOrderForm";

export default function EditOrder({entries, onHandleSubmit}){

    let {id} = useParams();
    const order = entries.find( (entry) => entry.id === id);
    return(
        <>
            <StyledHead>
                <p>Eintrag bearbeiten</p>
            </StyledHead> 
            <EditOrderForm order={order} onHandleSubmit={onHandleSubmit}/>
            <NavBarNewOrder page={"new"} dateString={order.date.dateString}/>
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