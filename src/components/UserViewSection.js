import styled from "styled-components";
import { OrderBox } from "./styles/OrderBox";
import { ValueBox } from "./styles/ValueBox";

export default function UserViewSection({user, orderList}){
    
    const ordersTheUserIsLinked = [];
    {orderList.filter((order) =>
        order.linkedUser.find((linkedUser) => linkedUser === user.id) !== undefined? 
            ordersTheUserIsLinked.push(order): ""
        )}

    window.scrollTo(0, 0);     
    return (
        <Article>
            <div>
                <Name>Name: </Name>
                <ValueBox>
                    <P>{user.name}</P>
                    <P>Role: {user.role}</P>
                </ValueBox>
                <Name >Rechte</Name>
                <ValueBox>
                    {user.rights.map((right) => 
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
                    {ordersTheUserIsLinked.map((order) =>
                        <OrderBox key={order.id}>
                            <p>{order.name}</p>
                            <p>{order.date.dateString} - {order.date.hour}:{order.date.minute}</p>
                        </OrderBox>
                    )}

                </ValueBox>
            </div>
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




