import { useContext } from "react";
import { useParams } from "react-router-dom";

import NavBarFooter from "../components/NavBarFooter";
import { StyledHead } from "../components/styles/StyledHead";
import UserLinkedInOrderSection from "../components/UserLinkedInOrderSection";
import { UserContext } from "../utils/UserContext";

export default function UserLinkedOrderView(){
    const { user, userList, orderList} = useContext(UserContext);
    
    const {id} = useParams();
    let userToShow = userList.find( (item) => item.id === id);

    if(userToShow === undefined) {
        userToShow = user;
    }

    return(
        <>
        <StyledHead>
            <p>Verlinkte Termine</p>
        </StyledHead> 
            <UserLinkedInOrderSection
                user={userToShow}
                orderList={orderList}/>
        <NavBarFooter page={"back"}/>
        </>
    );
}
