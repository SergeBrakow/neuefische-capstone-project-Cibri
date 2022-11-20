import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import NavBarFooter from "../components/NavBarFooter";
import UserViewSection from "../components/UserViewSection";
import { UserContext } from "../utils/UserContext";

export default function UserView(){
    const { userList, orderList} = useContext(UserContext);
    
    const {id} = useParams();
    const user = userList.find( (item) => item.id === id);

    return(
        <>
        <StyledHead>
            <p>Detailansicht</p>
        </StyledHead> 
            <UserViewSection
                user={user}
                orderList={orderList}/>
        <NavBarFooter page={"back"}/>
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