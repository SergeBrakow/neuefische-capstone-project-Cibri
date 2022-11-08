import { useNavigate} from "react-router-dom"; 
import { useId, useState } from "react";
import styled from "styled-components";

import getDate from "../utils/getDate";


export default function NewOrder({onHandleSubmit}){
    const navigate = useNavigate(); 
    const [orderType, setOrderType] = useState("Eintrag");
    
    const orderId= useId();
    function createOrder(event) {
        event.preventDefault();       
        const formData = new FormData(event.target);
        const { order_name, order_time, note} = Object.fromEntries(formData);

        let orderDate = new Date();
        orderDate.setHours(order_time.slice(0, 2));
        orderDate.setMinutes(order_time.slice(0, 2));

        onHandleSubmit(orderId, order_name, orderDate, note);
        navigate("/home");
   }
   
   function slotSet(e){
        setOrderType(e.target.value);
   }
    return(
        <>
            <StyledHead>
                <p>erstelle {orderType}</p>
                <p>{getDate("day")}</p>
            </StyledHead> 
            <BorderedDiv>
                <StyledForm onSubmit={createOrder}>
                    <select name="slots" id="slots" onChange={slotSet} required>
                        <option value="" hidden>
                            Choose Slot
                        </option>
                        <option value="Eingang">Eingang</option>
                        <option value="Termin">Termin</option>
                        <option value="Deadline">Deadline</option>
                    </select>
                    <div>
                        <label htmlFor="name">Auftrag Name </label>
                    </div>
                        <input
                            type="text"
                            name="order_name"
                            id="order_name"
                            defaultValue = ""
                            required
                            />
                    <label htmlFor="time">Zeit</label>
                    <div>
                        <input
                            type="time"
                            name="order_time"
                            id="order_time"
                            defaultValue={getDate("timeNow")}
                            required
                            />
                    </div>
                    <label htmlFor="note">Notizen</label>
                    <textarea
                        name="note"
                        id="note"
                        rows="7"
                        maxLength="150"
                    ></textarea>
                    <button className="form__submit-button" type="submit">
                        Speichern
                    </button>
                </StyledForm>
                <button onClick={()=> navigate("/home")}>
                    Abbrechen
                </button>
            </BorderedDiv>
        </>
    );
}

export const StyledHead = styled.div`
    border-bottom: 1px solid;
    width: 100%;
    height: 70px;
    margin-bottom: 10px; 
`
export const BorderedDiv = styled.div`
    border: 1px solid;
    border-radius: 15px;
    max-width: 25em;
    margin: 0 auto;
    padding-bottom: 20px;
    margin-bottom: 30px;
`

export const StyledForm= styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    max-width: 90%;
    margin: 0 auto;
    padding: 20px;
    gap: 0.5em;
    text-align: left;
    input {
        margin-left: 20px;
    }
    textarea {
        margin-left: 20px;   
        min-width: 200px; 
        min-height: 200px; 
        max-width: 300px; 
    }
    button {
        align-self: center;
        margin-top: 1.5em;
      }
`