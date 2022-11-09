import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { fromLocalStorage, toLocalStorage } from "../utils/localStorage";

export default function Login({setUser}) {
  const navigate = useNavigate();

  function loginAs(loginName){
    const userList = fromLocalStorage("users");
    let user = userList.filter((item) => item.name === loginName);
    user = user[0];
    
    toLocalStorage("loggedUser", user);
    setUser(user);
    navigate("/home");
  }

  return(
    <> 
      <StyledWelcomeName>Cibri</StyledWelcomeName>
      <StyledSection>
        <h3>login as</h3>
        <button onClick={()=> { loginAs("User1") }}>user</button>
        <button onClick={()=> { loginAs("Admin1") }}>admin</button>
      </StyledSection>
    </>
  );
}

export const StyledWelcomeName = styled.h1`
margin-bottom: 100px;
`

export const StyledSection = styled.section`
-webkit-box-shadow:inset 1px 1px 10px 1px #8CFF40;
box-shadow:inset 1px 1px 10px 1px #BEBEBE;

padding: 10px;
`
