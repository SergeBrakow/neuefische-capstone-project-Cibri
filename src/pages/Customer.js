import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import CreateCustomerForm from "../components/CustomerCreateForm";
import NavBarNewOrder from "../components/NavBarFooter";
import { StyledHead } from "../components/styles/StyledHead";

export default function CreateCustomer({ action }){

  const { customerList, setCustomerList } = useContext(UserContext);

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
            {action  === "create" ? (
                <>
                <StyledHead>
                    <p>erstelle neuen Kunden</p>
                </StyledHead> 
                <CreateCustomerForm  onHandleSubmit={addCustomer}/>
                </>
                ) : (
                    ""
                )
            }
            <NavBarNewOrder page={"new"}/>
        </>
    )
}
