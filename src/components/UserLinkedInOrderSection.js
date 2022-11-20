import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MainBox } from "./styles/MainBox";
import { OrderBox } from "./styles/OrderBox";
import { ValueBox } from "./styles/ValueBox";

export default function UserLinkedInOrderSection({user, orderList}){
    const navigate = useNavigate();
    
    const ordersTheUserIsLinked = [];
    {orderList.filter((order) =>
        order.linkedUser.find((linkedUser) => linkedUser === user.id) !== undefined? 
            ordersTheUserIsLinked.push(order): ""
        )
    }


    window.scrollTo(0, 0);     
    return (
        <MainBox>
            <div>
                <Name>{user.name} ist verlinkt in:</Name>
                <ValueBox>
                    { orderList.map((order) =>
                        <OrderBox 
                            key={order.id}
                            onClick={()=> navigate(`/orderView/${order.id}`)}
                            >
                            <p>{order.name}</p>
                            <p>{order.date.dateString} - {order.date.hour}:{order.date.minute}</p>
                        </OrderBox>
                         )
                    }
                </ValueBox>
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

