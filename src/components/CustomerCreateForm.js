import { useNavigate } from "react-router-dom"; 
import { nanoid } from "nanoid";
import { useState } from "react";
import styled from "styled-components";
import { getDateString } from "../utils/getDate";
import { LeftUserBtn, LinkedUserBtn, SaveBtn, Section, ShowUserLeftBtn } from "./styles/OrderFormStyles";



export default function CustomerCreateForm({onHandleSubmit}){
    const navigate = useNavigate(); 
    const [adressCode, setAdressCode] = useState('');
    const customerId= nanoid();
    
    function createCustomer(event) {
        event.preventDefault();       
        const formData = new FormData(event.target);
        const { customer_name, adress_street, adress_code, adress_city, customer_note, 
                    contact_prson_name, contact_prson_tel, contact_prson_email, contact_prson_note } = Object.fromEntries(formData);
        
        onHandleSubmit(customerId, customer_name, adress_street, adress_code, adress_city, customer_note, 
            contact_prson_name, contact_prson_tel, contact_prson_email, contact_prson_note);
        navigate(`/home/${getDateString(new Date())}`);
    }    

    const handleAdressCodeChange = event => {
        const limit = 5;
        setAdressCode(event.target.value.slice(0, limit));
    };
 
   return (
    <Section>
        <form onSubmit={createCustomer}>
            <fieldset>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="customer_name"
                    id="customer_name"
                    placeholder="Name"
                    required
                ></input>
                <fieldset>
                    <legend>Anschrift</legend>
                        <input
                            type="text"
                            name="adress_street"
                            id="adress_street"
                            placeholder="Straße"
                        ></input>
                        <input
                            type="number"
                            name="adress_code"
                            id="adress_code"
                            value={adressCode}
                            onChange={handleAdressCodeChange}
                            placeholder="PLZ"
                        ></input>
                        <input
                            type="text"
                            name="adress_city"
                            id="adress_city"
                            placeholder="Stadt"
                        ></input>
                </fieldset>
                <label htmlFor="note">Notizen:</label>
                <textarea
                    name="customer_note"
                    id="note"
                    rows="7"
                    maxLength="150"
                ></textarea>
                <fieldset>
                    <legend>Ansprechpartner</legend>
                        <input
                            type="text"
                            name="contact_prson_name"
                            id="contact_prson_name"
                            placeholder="Name"
                            required
                        ></input>
                        <input
                            type="number"
                            name="contact_prson_tel"
                            id="contact_prson_tel"
                            placeholder="Tel."
                        ></input>
                        <input
                            type="email"
                            name="contact_prson_email"
                            id="contact_prson_email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            placeholder="Email"
                        ></input>
                        <label htmlFor="note">Notizen:</label>
                            <textarea
                                name="contact_prson_note"
                                id="contact_prson_note"
                                rows="7"
                                maxLength="150"
                            ></textarea>
                </fieldset>
                <SaveBtn type="submit">Speichern</SaveBtn>
            </fieldset>
        </form>
    </Section>
   );
}
