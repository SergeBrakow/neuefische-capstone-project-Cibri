import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { fromLocalStorage, toLocalStorage } from "../utils/localStorage";

export default function Login({setUser}) {
  const navigate = useNavigate();

  function loginAs(loginName){
    const userList = fromLocalStorage("users");
    // let user = userList.filter((item) => item.name === loginName);
    let user = userList.find((item) => item.name === setUser);
    user = user[0];
    
    toLocalStorage("loggedUser", user);
    setUser(user);
    navigate("/home");
  }

  return(
    <> 
      <StyledWelcomeName>
        <h1>Cibri</h1>
        <p>your service app</p>
      </StyledWelcomeName>
      <StyledSection>
        <h2>login as</h2>
        <button onClick={()=> { loginAs("User1") }}>user</button>
        <button onClick={()=> { loginAs("Admin1") }}>admin</button>
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