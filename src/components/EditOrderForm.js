import { useNavigate} from "react-router-dom"; 
import { useState } from "react";
import styled from "styled-components";
import { getDateFromString, getDateString, getTimeAsString } from "../utils/getDate";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function EditOrderForm({onHandleSubmit, order}){
    const navigate = useNavigate(); 
    const [orderType, setOrderType] = useState(order.type);
    const [orderDate, setOrderDate] = useState(getDateFromString(order.date.dateString));
    const [orderName, setOrderName] = useState(order.name);
    const [orderTime, setOrderTime] = useState(getTimeAsString(order.date.hour, order.date.minute));

    const orderId= order.id;
    function submitOrder(event) {
        event.preventDefault();       
        const formData = new FormData(event.target);
        const { order_titel, order_time, note} = Object.fromEntries(formData);
        const orderDateString = getDateString(orderDate);
        
        const orderDateFull= {
            dateString: orderDateString,
            hour:   Number(order_time.slice(0, 2)),
            minute: Number(order_time.slice(3, 5)),
        }
        onHandleSubmit(orderId, orderType, order_titel, orderDateFull, note);
        navigate(`/home/${getDateString(orderDate)}`);
   }

    function slotSet(e){
        setOrderType(e.target.value);
    }

    return (
        <Section>
        <form onSubmit={submitOrder}>
            <fieldset>
                <label htmlFor="type">Typ:</label>
                <select name="order_type" id="order_type" onChange={slotSet} required>
                    <option >Eingang</option>
                    <option >Termin</option>
                    <option >Deadline</option>
                </select>
                <label htmlFor="titel">Titel: </label>
                <input
                    type="order_titel"
                    name="order_titel"
                    id="order_titel"
                    value={orderName}
                    onChange={event => setOrderName(event.target.value)}
                    required
                ></input>
                <label htmlFor="time">Zeit</label>
                <input
                    type="time"
                    name="order_time"
                    id="order_time"
                    value={orderTime}
                    onChange={event => setOrderTime(event.target.value)}
                    required
                    />
                <label htmlFor="date">Datum</label>
                <DatePicker
                    selected={orderDate}
                    onChange={(date)=>setOrderDate (date)}
                    dateFormat="dd.MM.yyyy"
                />
                <label htmlFor="note">Notizen</label>
                <textarea
                    name="note"
                    id="note"
                    rows="7"
                    maxLength="150"
                    defaultValue={order.note}
                ></textarea>
                <button type="submit">Speichern</button>
                </fieldset>
            </form>
    </Section>
    );
}

const Section = styled.section`
    display: flex;
    justify-content: center;
    margin: auto;
    margin-bottom: 60px;
    text-align: left;
    fieldset {
        display: flex;
        flex-direction: column;
        
        width: 300px;
        gap: 10px;
        button {
            height: 40px;
            margin-top: 70px;
        }
    }
`;
