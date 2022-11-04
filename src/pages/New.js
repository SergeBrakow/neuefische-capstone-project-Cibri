import styled from "styled-components";
import { useNavigate} from "react-router-dom"; 
export default function New(){
    const navigate = useNavigate(); 
    return(
        <NewEntry>
            <button onClick={() => {navigate("/newOrder")}}>neuer Eintrag</button>
            <button onClick={() => {navigate("/newCustomer")}}>neuer Kunde</button>
        </NewEntry>
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
    }
`