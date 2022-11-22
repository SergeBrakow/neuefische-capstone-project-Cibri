import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <StyledWelcomeName>
        <h1>Cibri</h1>
        <p>your service app</p>
      </StyledWelcomeName>
      <LoginDiv>
        <fieldset>
          <p>error 404 page not found</p>
          <button onClick={()=> navigate("/")}>to login</button>
        </fieldset>
      </LoginDiv>
      <FooterDiv>
        <p>a neue Fische Capstone project by S.B. </p>
      </FooterDiv>
    </>
  );
}

const StyledWelcomeName = styled.div`
  background-color: #74b49b ; 
  margin-bottom: 100px;
  border-bottom: solid;
  border-bottom-color: gray;
  border-radius: 10px;
`

const LoginDiv = styled.section`
  border-bottom: solid;
  border-color: gray;
  border-radius: 10px;
  margin: 20px;
  background-color: #f4f9f4 ; 

  padding: 40px;
  fieldset{
    background-color: #74b49b ; 
    border: 3px solid;
    border-color: #74b49b;
    border-radius: 10px;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.55); 
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.55);
    input{
      height: 30px;
      border-radius: 10px;
      margin-top: 10px;
      padding-left: 10px;
    }
  }

  button {
    margin-top: 40px;
    item-align: right; 
    border: 1px solid;
    border-radius: 5px;
    width: 70px;
    height: 35px;
    background-color: #f4f9f4;
    &: hover {
      background-color: white;
      border: none;
      -webkit-box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38); 
      box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38);; 
    }
  }
`
const FooterDiv = styled.div`
  background-color: #74b49b ; 
  border-bottom: solid;
  border-bottom-color: gray;
  border-radius: 10px;
  position: fixed;
  width: 100%;
  bottom: 10px;
  p{
    font-size: small;
  }
`