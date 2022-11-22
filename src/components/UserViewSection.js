import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { OrderBox } from "./styles/OrderBox";
import { ValueBox } from "./styles/ValueBox";
import { MainBox } from "./styles/MainBox";

export default function UserViewSection({user, orderList}){
    const navigate = useNavigate();
    const ordersTheUserIsLinked = [];
    {orderList.filter((order) =>
        order.linkedUser.find((linkedUser) => linkedUser === user.id) !== undefined? 
            ordersTheUserIsLinked.push(order): ""
        )}

    window.scrollTo(0, 0);     
    return (
        <MainBox>
            <div>
                <BoltNameP>Name: </BoltNameP>
                <ValueBox>
                    <BoltP>{user.name}</BoltP>
                    <BoltP>Role: {user.role}</BoltP>
                </ValueBox>
                <BoltNameP >Rechte</BoltNameP>
                <ValueBox>
                    {user.rights.map((right) => 
                        <p key={right.id} >
                            <input
                                type="checkbox"
                                checked={right.value? true: false}
                                readOnly
                            /> {right.name}
                        </p>
                    )}
                </ValueBox>
                <BoltNameP >verlinkte Termine</BoltNameP>
                <ValueBox>
                    {ordersTheUserIsLinked.map((order) =>
                        <OrderBox 
                        key={order.id}
                        onClick={()=> navigate(`/orderEdit/${order.id}`)}
                        >
                            <p>{order.name}</p>
                            <p>{order.date.dateString} - {order.date.hour}:{order.date.minute}</p>
                        </OrderBox>
                    )}

                </ValueBox>
            </div>
        </MainBox>
    );
}

const BoltNameP = styled.p`
    font-weight: bold; 
`

const BoltP=styled.p`
    margin-top: -10px;
    padding: 5px 15px;
    background-color: lightgray;
    border-radius: 15px;
`




