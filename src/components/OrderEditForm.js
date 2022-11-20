import { useNavigate} from "react-router-dom"; 
import { useEffect, useState } from "react";
import { getDateFromString, getDateString, getTimeAsString } from "../utils/getDate";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DeleteBtn, LeftUserBtn, LinkedUserBtn, SaveBtn, Section, ShowUserLeftBtn } from "./styles/OrderFormStyles";


export default function OrderEditForm({onHandleSubmit, order, userList, setIdPosInHome}){
    const navigate = useNavigate(); 
    // for time and date setting
    const [orderType, setOrderType] = useState(order.type);
    const [orderDate, setOrderDate] = useState(getDateFromString(order.date.dateString));
    // for autofill
    const [orderName, setOrderName] = useState(order.name);
    const [orderTime, setOrderTime] = useState(getTimeAsString(order.date.hour, order.date.minute));

    // for linking user
    const [linkedUserList, setLinkedUserList] = useState([]);   // user ids
    const [leftUserList, setLeftUserList] = useState([]); // user objects
    const [showUserLeft, setShowUserLeft ] = useState(false);
    
    // hollt verbliebene user (die nicht gelinked sind) aus der user liste in die leftUserList
    useEffect(() => {
        let fullUserList = userList;
        order.linkedUser.forEach(id => {
            if(linkedUserList.find((user) => user.id === id)) {
                fullUserList = fullUserList.filter((user) => user.id !== id)
            } else {
                linkedUserList.push(userList.find((user) => user.id === id));
            }
        })
        setLeftUserList(fullUserList)
    },[]);

    const orderId= order.id;

    function editOrder(event) {
        event.preventDefault();       
        const formData = new FormData(event.target);
        const { order_titel, order_time, note} = Object.fromEntries(formData);
        const orderDateString = getDateString(orderDate);
        
        const orderDateFull= {
            dateString: orderDateString,
            hour:   Number(order_time.slice(0, 2)),
            minute: Number(order_time.slice(3, 5)),
        }
        const linkedUSerIdList =[];
        linkedUserList.forEach((user) => linkedUSerIdList.push(user.id));
        onHandleSubmit(orderId, orderType, order_titel, orderDateFull, note, linkedUSerIdList);
        setIdPosInHome(orderDateFull.hour)
        navigate(`/home/${getDateString(orderDate)}`);
   }

    function deleteOrder(event){
        event.preventDefault(); 
        onHandleSubmit(orderId, "", "", "", "");
        navigate(`/home/${getDateString(orderDate)}`);
    }

    function slotSet(event){
        setOrderType(event.target.value);
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

   
    return (
        <Section>
        <form onSubmit={editOrder}>
            <fieldset>
                <label htmlFor="type">Typ:</label>
                <select name="order_type" id="order_type" onChange={slotSet} required>
                    <option value={order.type} hidden>{order.type}</option>
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
                <label htmlFor="time">Zeit:</label>
                <input
                    type="time"
                    name="order_time"
                    id="order_time"
                    value={orderTime}
                    onChange={event => setOrderTime(event.target.value)}
                    required
                    />
                <label htmlFor="date">Datum:</label>
                <DatePicker
                    selected={orderDate}
                    onChange={(date)=>setOrderDate (date)}
                    dateFormat="dd.MM.yyyy"
                    layer={0} 
                />
                <label htmlFor="note">Notizen:</label>
                <textarea
                    name="note"
                    id="note"
                    rows="7"
                    maxLength="250"
                    defaultValue={order.note}
                ></textarea>
                <label>Nutzer markieren:</label>
                <fieldset>
                    {linkedUserList.map((user) => 
                        <LinkedUserBtn key={user.id} value={user.id} onClick={(e) => unLinkUser(e) }>{user.name}</LinkedUserBtn>
                    )}
                    <ShowUserLeftBtn onClick={(e)=>openUserLeftList(e)}>{showUserLeft? "blende weite Nutzer aus" : "zeige weitere Nutzer an"}</ShowUserLeftBtn>
                    {showUserLeft? (
                        leftUserList.map((user) => 
                            <LeftUserBtn key={user.id} value={user.id} onClick={(e) => linkUser(e) }>{user.name}</LeftUserBtn>)
                        ):""
                    }
                </fieldset>
                <SaveBtn type="submit">speichern</SaveBtn>
                <DeleteBtn onClick={(e)=>deleteOrder(e)}>löschen</DeleteBtn>
            </fieldset>
        </form>
    </Section>
    );
}

