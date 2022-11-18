import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getTimeAsString } from "../utils/getDate";

export default function ViewOrderSection({order}){
    const navigate = useNavigate();
    return (
        <Article>
            <div>
                <Name>Typ:</Name>
                <P>{order.type}</P>
                <Name>Titel: </Name>
                <P>{order.name}</P>
                <Name >Zeit</Name>
                <P>{getTimeAsString(order.date.hour, order.date.minute)}</P>
                <Name >Datum</Name>
                <P>{order.date.dateString}</P>
                <Name >Notizen</Name>
                <P>{order.note}</P>
            </div>
            <button onClick={()=> navigate(`/editOrder/${order.id}`)}>bearbeiten</button>
        </Article>
    );
}


export const Article= styled.article`
border: 0.5px solid;
border-radius: 10px;
border-color: gray;
margin: 80px 10px 60px 10px;
padding: 10px;
    div{
        text-align: left; 
    }
    button {
        item-align: right; 
    }
`

export const Name = styled.p`
    font-weight: bold; 
`

export const P=styled.p`
    margin-top: -10px;
    padding: 5px 15px;
    background-color: lightgray;
    border-radius: 15px;
    
`