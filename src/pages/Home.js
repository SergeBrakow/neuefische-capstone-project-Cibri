
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const user = localStorage.getItem(`user`);

  if(user === null) {
    return ( <>
        <button onClick={()=> navigate("/login")}>Sorry, but you need to login first!</button>
        </>);
  }

  function logout(){
    localStorage.removeItem(`user`);
    navigate("/login");
  }

  console.log(user);
  return(
    <> 
      <h1>home</h1>
      <h5>not ready</h5>
      <StyledSection>
        <h3>{user}</h3>
        <StyledDiv>
          <p>test</p>
          <button onClick={()=> {logout();}}>logout</button>
        </StyledDiv>
      </StyledSection>
    </>
  );
}

export const StyledSection = styled.section`
  border-top: solid;
  border-width: 1px;
  display: grid;
  column-gap: 50px;
  grid-template-columns: auto auto auto;
  
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  padding: 10px;
`

export const StyledDiv = styled.div`
  border: 1px solid;
  background-color: lightgrey;

  position: absolute;
  top: -100px;
  left: 50px;
  fill: #828a95;
`