import styled from "styled-components";
import { useNavigate} from "react-router-dom"; 
import NavBarNewOrder from "../components/NavBarNewOrder";


export default function New(){
    const navigate = useNavigate(); 
    return(
        <>
        <NewEntry>
            <button onClick={() => {navigate("/newOrder")}}>neuer Eintrag</button>
            <button onClick={() => {navigate("/newCustomer")}}>neuer Kunde</button>
        </NewEntry>
        <NavBarNewOrder page={"new"}/>
        </>
    );
}

export const NewEntry=styled.div`
    height: 200px;
    margin: 40% 20%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    button{
        margin: 10px;
        flex: auto;
        border-radius:10px;
        border: 1px solid;
    }
`