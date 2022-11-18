import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { fromLocalStorage, toLocalStorage } from "../utils/localStorage";

export default function Login({setUser}) {
  const navigate = useNavigate();

  function loginAs(loginName){
    const userList = fromLocalStorage("userList");
    let user = userList.find((item) =>{return item.name === loginName});
    
    if(user === undefined) { 
      navigate("/");
      alert("Your login data could not be found!");
    } else {
      toLocalStorage("loggedUser", user);
      setUser(user);
      navigate("/home");
    }
  }

  return(
    <> 
      <StyledWelcomeName>
        <h1>Cibri</h1>
        <p>your service app</p>
      </StyledWelcomeName>
      <StyledSection>
        <h2>login as</h2>
        <button onClick={()=> { loginAs("Peter") }}>Peter</button>
        <button onClick={()=> { loginAs("Nicole Schmidt") }}>Nicole Schmidt</button>
      </StyledSection>
    </>
  );
}

export const StyledWelcomeName = styled.div`
  margin-bottom: 100px;
`

export const StyledSection = styled.section`
  border-top: 1px solid;
  max-width: 25em;
  min-height: 25em;
  margin: auto;
  padding: 10px;
`