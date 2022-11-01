import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  localStorage.removeItem(`user`);
  
  function loginAs(role){
    localStorage.setItem('user', role);
  }

  return(
    <> 
      <StyledWelcomeName>Cibri</StyledWelcomeName>
      <StyledSection>
        <h3>login as</h3>
        <button onClick={()=> { loginAs("user");  navigate("/home");}}>user</button>
        <button onClick={()=> { loginAs("admin"); navigate("/home");}}>admin</button>
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
