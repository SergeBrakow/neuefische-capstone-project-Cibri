import styled from "styled-components";

import CreateCustomerForm from "../components/CreateCustomerForm";
import NavBarNewOrder from "../components/NavBarNewOrder";

export default function CreateCustomer({customerList, setCustomerList, action}){

    function addCustomer(newCustomerId, newCustomer_name, newCustomer_street, newCustomer_code, newCustomer_city, newCustomer_note, 
                            newContact_prson_name, newContact_prson_tel, newContact_prson_email, newContact_prson_note){
        setCustomerList([
          {
            id: newCustomerId,
            customer_name: newCustomer_name,
            adress_street: newCustomer_street,
            adress_code: newCustomer_code,
            adress_city: newCustomer_city,
            customer_note: newCustomer_note, 
            contact_prson_name: newContact_prson_name,
            contact_prson_tel: newContact_prson_tel,
            contact_prson_email: newContact_prson_email,
            contact_prson_note: newContact_prson_note,
          },
          ...customerList,
        ])
      }

    return(
        <>
            <StyledHead>
                <p>erstelle neuen Kunden</p>
            </StyledHead> 
            {action  === "create" ? (
                <CreateCustomerForm  onHandleSubmit={addCustomer}/>
                ) : (
                    ""
                )
            }
            <NavBarNewOrder page={"new"}/>
        </>
    )
}

export const StyledHead = styled.div`
    border-bottom: 1px solid;
    background-color: white;
    position: fixed;
    width: 100%;
    height: 70px;
    top: 0;
    layer: 10; 
    margin-bottom: 10px;  
`