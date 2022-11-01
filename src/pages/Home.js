
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [buttonBox1, setButtonBox1] = useState(false);
  const [buttonBox2, setButtonBox2] = useState(false);
  const [buttonBox3, setButtonBox3] = useState(false);
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
  
  return(
    <div> 
      <h1>home</h1>
      <h5>not ready</h5>
      <StyledNavBar>
        <Div1>
          <StyledButton isActive={buttonBox1} onClick={()=> {setButtonBox2(false); setButtonBox3(false); setButtonBox1(buttonBox1? false: true)}}>{user}</StyledButton>
          { buttonBox1 ? 
              <StyledDiv3>
                <button onClick={()=> logout()}>logout</button>
              </StyledDiv3> : null}
        </Div1>
        <Div1>

        </Div1>
        <Div1>

        </Div1>
      </StyledNavBar>
    </div>
  );
}

export const Styldiv = styled.div`
border: 0.1 px solid;;
`
export const StyledButton = styled.button`
  background-color: ${props => props.isActive ? `lightgrey`: ``};
  border-top:;
`
export const Div1 = styled.div `
border: 0.1 px solid;
width: 100%;
display: grid;
`
export const StyledNavBar = styled.section`
  border-top: 1px solid;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  height: 45px;
  bottom: 0;
  layer: 22;  
`

export const StyledDiv3 = styled.div`
  border-style: solid solid none solid;
  border-width: 1px;
  background-color: lightgrey;
  display: grid; 
  grid-gap: 10px;
  padding: 10px 5px;
  width: 33.33%;
  height: 150px;
  bottom: 0;
  position: absolute;
  top: -150px;
`