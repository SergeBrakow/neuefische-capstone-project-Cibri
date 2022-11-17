import { useParams} from "react-router-dom";
import styled from "styled-components";

import NavBarNewOrder from "../components/NavBarNewOrder";
import EditOrderForm from "../components/EditOrderForm";

export default function CreateOrder({user, entries, onHandleSubmit}){

    let {id} = useParams();
    const order = entries.find( (entry) => entry.id === id);
    return(
        <>
            <StyledHead>
                <p>Eintrag bearbeiten</p>
            </StyledHead> 
            <EditOrderForm order={order} onHandleSubmit={onHandleSubmit}/>
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