import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getTimeAsString } from "../utils/getDate";
import { MainBox } from "./styles/MainBox";

export default function OrderViewSection({customerList, userList, order}){
    const navigate = useNavigate();
    
    window.scrollTo(0, 0);     
    return (
        <MainBox>
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
                {order.note ===""?
                    <P>-</P> :  <P>{order.note}</P>
                }
                <Name >verlinkte Nutzer</Name>
                {order.linkedUser.length === 0? (
                    <P>-</P> 
                    ) : (
                        order.linkedUser.map((linkedUserId) => 
                            <ABtn key={linkedUserId}
                                onClick={() =>{ navigate(`/userView/${linkedUserId}`)}}
                                >{userList.find((user) => user.id === linkedUserId).name}</ABtn>
                        )
                    )
                }
                <Name >verlinkte Kunden</Name>
                {order.linkedCustomer.length === 0? (
                    <P>-</P> 
                    ) : (
                        order.linkedCustomer.map((linkedCustomerId) => 
                            <ABtn key={linkedCustomerId}
                                onClick={() =>{ navigate(`/customerView/${linkedCustomerId}`)}}
                                >{customerList.find((customer) => customer.id === linkedCustomerId).customer_name}</ABtn>
                        )
                    )
                }
            </div>
            <Button onClick={()=> navigate(`/orderEdit/${order.id}`)}>bearbeiten</Button>
        </MainBox>
    );
}

const Name = styled.p`
    font-weight: bold; 
`

const P=styled.p`
    margin-top: -10px;
    padding: 5px 15px;
    background-color: #ececed;
    border-radius: 15px;
`
const ABtn=styled.a`
    margin: 5px;
    margin-top: -10px;
    padding: 5px 15px;
    border: 1px solid;
    border-radius: 15px;
    background-color: #f4f9f4;
    min-width: 45px;
    height: 25px;
    cursor: pointer;
    &: hover {
        background-color: white;
        border: none;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.85); 
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.85);
    }
`
const Button= styled.button`
    height: 40px;
    width: 90px;
    margin-top: 20px;
    background-color: #f4f9f4;
    border: 1px solid;
    border-radius:10px;
    &: hover {
        background-color: white;
        border: none;
        -webkit-box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38); 
        box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38);
    }   
`