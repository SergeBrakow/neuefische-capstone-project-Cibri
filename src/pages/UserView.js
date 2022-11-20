import { useContext } from "react";
import { useParams } from "react-router-dom";


import { StyledHead } from "../components/styles/StyledHead";
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