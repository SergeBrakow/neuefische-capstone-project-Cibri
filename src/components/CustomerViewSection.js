import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { OrderBox } from "./styles/OrderBox";
import { ValueBox } from "./styles/ValueBox";
import { MainBox } from "./styles/MainBox";

export default function CustomerViewSection({customer, orderList}){
    const navigate = useNavigate();
    const ordersTheCustomerIsLinked = [];

    {orderList.filter((order) =>
        order.linkedCustomer.find((linkedCustomer) => linkedCustomer === customer.id) !== undefined? 
            ordersTheCustomerIsLinked.push(order): ""
        )}
        
    window.scrollTo(0, 0);     
    return (
        <MainBox>
            <div>
                <Name>Name: </Name>
                <ValueBox>
                    <P>{customer.customer_name}</P>
                </ValueBox>
                <Name>Anschrift: </Name>
                <ValueBox>
                    <P>{customer.adress_street}</P>
                    <P>{customer.adress_code}</P>
                    <P>{customer.adress_city}</P>
                </ValueBox>
                <Name >Notizen</Name>
                <ValueBox>
                    {customer.customer_note ===""?
                        <P>-</P> :  <P>{customer.customer_note}</P>
                    }
                </ValueBox>
                <Name>Ansprechpartner: </Name>
                <ValueBox>
                    <P>{customer.contact_prson_name}</P>
                    <P>{customer.contact_prson_tel}</P>
                    <P>{customer.contact_prson_email}</P>
                    <P>{customer.contact_prson_note}</P>
                    <Name >Notizen</Name>
                    {customer.contact_prson_note ===""?
                        <P>-</P> :  <P>{customer.contact_prson_note}</P>
                    }
                </ValueBox>
                {/* <ValueBox>
                    {customer.rights.map((right) => 
                        <p key={right.id} >
                            <input
                                type="checkbox"
                                checked={right.value === true ? true: false}
                                readOnly
                            /> {right.name}
                        </p>
                    )}
                </ValueBox>
                <Name >verlinkte Termine</Name>
                <ValueBox>
                    {ordersTheCustomerIsLinked.map((order) =>
                        <OrderBox 
                        key={order.id}
                        onClick={()=> navigate(`/orderEdit/${order.id}`)}
                        >
                            <p>{order.name}</p>
                            <p>{order.date.dateString} - {order.date.hour}:{order.date.minute}</p>
                        </OrderBox>
                    )}

                </ValueBox> */}
            </div>
        </MainBox>
    );
}

export const Name = styled.p`
    font-weight: bold; 
`

export const P=styled.p`
    margin-top: -10px;
    padding: 5px 15px;
    background-color: lightgray;
    border-radius: 15px;
`




