import { useContext, useEffect } from "react";
import { UserContext } from "../utils/UserContext";
import CustomerCreateForm from "../components/CustomerCreateForm";
import CustomerViewSection from "../components/CustomerViewSection";
import NavBarNewOrder from "../components/NavBarFooter";
import { StyledHead } from "../components/styles/StyledHead";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateCustomer({ action }){
  const { orderList, customerList, setCustomerList } = useContext(UserContext);
  const {id} = useParams();
  const customer = customerList.find( (item) => item.id === id);
  const navigate = useNavigate();

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

  useEffect(() => {
      if (customer === undefined){
          navigate("/home")   
          alert("Der Eintrag konnte nicht gefunden werden!");
      }
  },[])

  return(
    <>
      {customer !== undefined? 
        <>
          {action  === "create" ? (
              <>
              <StyledHead>
                  <p>erstelle neuen Kunden</p>
              </StyledHead> 
              <CustomerCreateForm  onHandleSubmit={addCustomer}/>
              </>
              ) : ""
          }
          {action  === "view" ? (
              <>
              <StyledHead>
                  <p>Detailansicht Kunde</p>
              </StyledHead> 
              <CustomerViewSection 
                customer={customer}
                orderList={orderList}/>
              </>
              ) : ""
          }
          <NavBarNewOrder page={"new"}/>
        </>
      :""}
    </>
  )
}
