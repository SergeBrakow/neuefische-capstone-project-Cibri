import { useNavigate } from "react-router-dom"; 
import { nanoid } from "nanoid";
import { useState } from "react";

import { getDateString, getTimeAsString } from "../utils/getDate";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LeftUserBtn, LinkedUserBtn, SaveBtn, Section, ShowUserLeftBtn } from "./styles/OrderFormStyles";


export default function OrderCreateForm({userList, customerList, date, time, onHandleSubmit}){
    const navigate = useNavigate(); 
    // for time and date setting
    const [orderType, setOrderType] = useState("Eintrag");
    const [orderDate, setOrderDate] = useState(date);

    // for linking user
    const [linkedUserList, setLinkedUserList] = useState([]);   // user objects
    const [leftUserList, setLeftUserList] = useState(userList); // user objects
    const [showUserLeft, setShowUserLeft ] = useState(false);

    // for linking customers
    const [linkedCustomerList, setLinkedCustomerList] = useState([]);   // user objects
    const [leftCustomerList, setLeftCustomerList] = useState(customerList); // user objects
    const [showCustomerLeft, setShowCustomerLeft ] = useState(false);
    

    const orderId= nanoid();

    function createOrder(event) {
        event.preventDefault();       
        const formData = new FormData(event.target);
        const { order_titel, order_time, note} = Object.fromEntries(formData);
        const orderDateString = getDateString(orderDate);
        
        const orderDateFull= {
            dateString: orderDateString,
            hour:   Number(order_time.slice(0, 2)),
            minute: Number(order_time.slice(3, 5)),
        }
        const linkedUserIdList = [];
        const linkedCustomerIdList = [];
        linkedUserList.forEach((user) => linkedUserIdList.push(user.id));
        linkedCustomerList.forEach((customer) => linkedCustomerIdList.push(customer.id));
        onHandleSubmit(orderId, orderType, order_titel, orderDateFull, note, linkedUserIdList, linkedCustomerIdList);
        navigate(`/home/${getDateString(orderDate)}`);
   }

    function slotSet(e){
        setOrderType(e.target.value);
    }

    // for link / unlink user
    function openUserLeftList(event){
        event.preventDefault();
        setShowUserLeft((previous) => !previous);
    }

    function linkUser(event) {
        event.preventDefault();
        const selectedUserId = event.target.value;
        setLinkedUserList([ leftUserList.find((user) => user.id === selectedUserId), ...linkedUserList])
        setLeftUserList(leftUserList.filter((user) => user.id !== selectedUserId));
    }
    
    function unLinkUser(event) {
        event.preventDefault();
        const selectedUserId = event.target.value;
        setLeftUserList([linkedUserList.find((user) => user.id === selectedUserId), ...leftUserList]);
        setLinkedUserList(linkedUserList.filter((user) => user.id !== selectedUserId));
    }

    // for link / unlink Customer
    function openCustomerLeftList(event){
        event.preventDefault();
        setShowCustomerLeft((previous) => !previous);
    }

    function linkCustomer(event) {
        event.preventDefault();
        const selectedCustomerId = event.target.value;
        setLinkedCustomerList([ leftCustomerList.find((Customer) => Customer.id === selectedCustomerId), ...linkedCustomerList])
        setLeftCustomerList(leftCustomerList.filter((Customer) => Customer.id !== selectedCustomerId));

    }
    
    function unLinkCustomer(event) {
        event.preventDefault();
        const selectedCustomerId = event.target.value;
        setLeftCustomerList([linkedCustomerList.find((Customer) => Customer.id === selectedCustomerId), ...leftCustomerList]);
        setLinkedCustomerList(linkedCustomerList.filter((Customer) => Customer.id !== selectedCustomerId));

    }
    
    return (
        <Section>
        <form onSubmit={createOrder} id={0}>
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
                    defaultValue= {getTimeAsString(time, 0)}
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
                <label>Nutzer markieren</label>
                <fieldset>
                    {linkedUserList.map((user) => 
                        <LinkedUserBtn key={user.id} value={user.id} onClick={(e) => unLinkUser(e) }>{user.name}</LinkedUserBtn>
                        )}
                    <ShowUserLeftBtn id={1} onClick={(e)=>openUserLeftList(e)}>{showUserLeft? "blende weite Nutzer aus" : "zeige weitere Nutzer an"}</ShowUserLeftBtn>
                    {showUserLeft? (
                        leftUserList.map((user) => 
                        <LeftUserBtn key={user.id} value={user.id} onClick={(e) => linkUser(e) }>{user.name}</LeftUserBtn>)
                        ):""
                    }
                </fieldset>   
                <label>Kunden markieren</label>
                <fieldset>
                    {linkedCustomerList.map((Customer) => 
                        <LinkedUserBtn key={Customer.id} value={Customer.id} onClick={(e) => unLinkCustomer(e) }>{Customer.customer_name}</LinkedUserBtn>
                    )}
                    <ShowUserLeftBtn id={1} onClick={(e)=>openCustomerLeftList(e)}>{showCustomerLeft? "blende weite Kunden aus" : "zeige weitere Kunden an"}</ShowUserLeftBtn>
                    {showCustomerLeft? (
                        leftCustomerList.map((Customer) => 
                            <LeftUserBtn key={Customer.id} value={Customer.id} onClick={(e) => linkCustomer(e) }>{Customer.customer_name}</LeftUserBtn>)
                        ):""
                    }
                </fieldset> 
                <SaveBtn type="submit">Speichern</SaveBtn>
            </fieldset>
        </form>
    </Section>
    );
}
