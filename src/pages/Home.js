
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate(); 
  const user = localStorage.getItem(`user`);

  // in case somebody enter over the link /home without going over login
  if(user === null) {
    return ( <>
        <button onClick={()=> navigate("/login")}>Sorry, but you need to login first!</button>
        </>);
  }

  function logout(){
    localStorage.removeItem(`user`);
    navigate("/login");
  }
  
  return(
    <div> 
      <h1>home</h1>
      <h5>not ready</h5>
      <StyledNavBar>
        <NavBarElement>
          <button onClick={()=> logout()}>{user} logout</button>
        </NavBarElement>
      </StyledNavBar>
    </div>
  );
}

export const NavBarElement = styled.div `
border: 0.1 px solid;
width: 100%;
display: grid;
float: left;
width: 33.33%;
`
export const StyledNavBar = styled.section`
  border-top: 1px solid;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  height: 45px;
  bottom: 0;
`