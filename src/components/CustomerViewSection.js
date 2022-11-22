import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ValueBox } from "./styles/ValueBox";
import { MainBox } from "./styles/MainBox";

export default function CustomerViewSection({customer, orderList}){
    const navigate = useNavigate();
  
    window.scrollTo(0, 0);     
    return (
        <MainBox>
            <div>
                <BoltP>Name: </BoltP>
                <ValueBox>
                    <StyledP>{customer.customer_name}</StyledP>
                </ValueBox>
                <BoltP>Anschrift: </BoltP>
                <ValueBox>
                    <StyledP>{customer.adress_street}</StyledP>
                    <StyledP>{customer.adress_code}</StyledP>
                    <StyledP>{customer.adress_city}</StyledP>
                </ValueBox>
                <BoltP >Notizen</BoltP>
                <ValueBox>
                    {customer.customer_note ===""?
                        <StyledP>-</StyledP> :  <StyledP>{customer.customer_note}</StyledP>
                    }
                </ValueBox>
                <BoltP>Ansprechpartner: </BoltP>
                <ValueBox>
                    <StyledP>{customer.contact_prson_name}</StyledP>
                    <StyledP>{customer.contact_prson_tel}</StyledP>
                    <StyledP>{customer.contact_prson_email}</StyledP>
                    <StyledP>{customer.contact_prson_note}</StyledP>
                    <BoltP >Notizen</BoltP>
                    {customer.contact_prson_note ===""?
                        <StyledP>-</StyledP> :  <StyledP>{customer.contact_prson_note}</StyledP>
                    }
                </ValueBox>
            </div>
        </MainBox>
    );
}

const BoltP = styled.p`
    font-weight: bold; 
`

const StyledP=styled.p`
    margin-top: -10px;
    padding: 5px 15px;
    background-color: lightgray;
    border-radius: 15px;
`




