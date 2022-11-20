import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NeedLoginMessage(){
  const navigate = useNavigate();
  return(
  <div>
    <StyledWelcomeName>
      <h1>Cibri</h1>
      <p>your service app</p>
    </StyledWelcomeName>
    <LoginDiv>
      <fieldset>
        <button onClick={()=> navigate("/")}>Sorry, but you need to login first!</button>
      </fieldset>
    </LoginDiv>
  
  </div>
  );
}

export const StyledWelcomeName = styled.div`
  height: 100px;
  margin-bottom: 100px;
  border-bottom: solid;
  border-color: #74b49b;
  border-radius: 10px;
`

export const LoginDiv = styled.section`
  border-bottom: solid;
  border-color: #74b49b;
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
  }

  button {
    margin-top: 40px;
    padding: 10px;
    item-align: right; 
    border: 1px solid;
    border-radius: 5px;
    // width: 200px;
    // height: 30px;
  }
`
