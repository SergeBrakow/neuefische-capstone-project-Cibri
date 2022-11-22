import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


import { StyledHead } from "../components/styles/StyledHead";
import NavBarFooter from "../components/NavBarFooter";
import UserViewSection from "../components/UserViewSection";
import { UserContext } from "../utils/UserContext";

export default function UserView(){
    const { userList, orderList} = useContext(UserContext);
    const navigate = useNavigate();
    const {id} = useParams();
    const user = userList.find( (item) => item.id === id);

    
    useEffect(() => {
        if (user === undefined){
            navigate("/home")   
            alert("Der Eintrag konnte nicht gefunden werden!");
        }
    },[])

    return(
        <>
        <StyledHead>
            <p>Detailansicht</p>
        </StyledHead> 
        {user !== undefined?
            <>
                <UserViewSection
                    user={user}
                    orderList={orderList}/>
                <NavBarFooter page={"back"}/>
            </>
        :""}
        </>
    );
}