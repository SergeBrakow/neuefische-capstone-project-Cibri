import styled from "styled-components";
import { useNavigate, useParams} from "react-router-dom"; 
import NavBarNewOrder from "../components/NavBarNewOrder";


export default function New(){
    const navigate = useNavigate(); 
    let {dateString} = useParams();
    return(
        <>
        <NewEntry>
            <button onClick={() => {navigate(`/createOrder/${dateString}`)}}>neuer Eintrag</button>
            <button onClick={() => {navigate("/createCustomer")}}>neuer Kunde</button>
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