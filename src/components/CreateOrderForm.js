import { useNavigate } from "react-router-dom"; 
import { nanoid } from "nanoid";
import { useState } from "react";
import styled from "styled-components";
import { getDateString, getTimeNowString } from "../utils/getDate";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function EditOrderForm({date, onHandleSubmit}){
    const navigate = useNavigate(); 
    const [orderType, setOrderType] = useState("Eintrag");
    const [orderDate, setOrderDate] = useState(date);

    const orderId= nanoid();
    
    function createOrder(event) {
        event.preventDefault();       
        const formData = new FormData(event.target);
        const { order_titel, order_time, note} = Object.fromEntries(formData);
        const orderDateString = getDateString(orderDate);
        
        const orderDateFull= {
            dateStamp: orderDateString,
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
        <form onSubmit={createOrder}>
            <fieldset>
                <label htmlFor="type">Typ:</label>
                <select name="order_type" id="order_type" onChange={slotSet} required>
                    <option >Eingang</option>
                    <option value="Termin">Termin</option>
                    <option >Deadline</option>
                </select>
                <label htmlFor="titel">Titel: </label>
                <input
                    type="order_titel"
                    name="order_titel"
                    id="order_titel"
                    placeholder="Titel"
                    required
                ></input>
                <label htmlFor="time">Zeit</label>
                <input
                    type="time"
                    name="order_time"
                    id="order_time"
                    defaultValue= {getTimeNowString()}
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
