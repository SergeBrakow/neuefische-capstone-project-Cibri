import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getTimeAsString } from "../utils/getDate";
import { MainBox } from "./styles/MainBox";
import { OrderBox } from "./styles/OrderBox";
import { ValueBox } from "./styles/ValueBox";

export default function UserLinkedInOrderSection({user, orderList}){
    const navigate = useNavigate();

    window.scrollTo(0, 0);     
    return (
        <MainBox>
            <div>
                <Name>{user.name} ist verlinkt in:</Name>
                <ValueBox>
                    {orderList.filter((orderFromOrderList) =>
                        orderFromOrderList.linkedUser.find((linkedUser) => linkedUser === user.id) !== undefined
                        ).map((order) => 
                            <OrderBox 
                                key={order.id}
                                onClick={()=> navigate(`/orderView/${order.id}`)}
                                >
                                <p>{order.name}</p>
                                <p>{order.date.dateString} - {getTimeAsString(order.date.hour, order.date.minute)}</p>
                            </OrderBox>)
                    }
                </ValueBox>
            </div>
        </MainBox>
    );
}

const Name = styled.p`
    font-weight: bold; 
`