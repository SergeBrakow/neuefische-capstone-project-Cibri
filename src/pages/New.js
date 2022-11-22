import styled from "styled-components";
import { useNavigate, useParams} from "react-router-dom"; 
import NavBarFooter from "../components/NavBarFooter";
import { MainBox } from "../components/styles/MainBox";


export default function New(){
    const navigate = useNavigate(); 
    let {dateString} = useParams();
    return(
        <>
        <MainBox>
            <NewEntry>
                <button onClick={() => {navigate(`/orderCreate/${dateString}`)}}>neuer Eintrag</button>
                <button onClick={() => {navigate("/customerCreate")}}>neuer Kunde</button>
            </NewEntry>
        </MainBox>
        <NavBarFooter page={"back"}/>
        </>
    );
}

const NewEntry=styled.div`
    height: 200px;
    margin: 40% 20%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    button{
        height: 40px;
        margin: 2px;
        background-color: #f4f9f4;
        border-radius:10px;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.43); 
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.43);
        &: hover {
            background-color: white;
            border: none;
            -webkit-box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38); 
            box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38);
        }   
    }
`