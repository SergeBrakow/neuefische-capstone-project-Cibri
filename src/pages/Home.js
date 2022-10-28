import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const user = localStorage.getItem(`user`);

  return(
    <> 
      <h1>home</h1>
      <h5>not ready</h5>
      <StyledSection>
        <h3>{user}</h3>
      </StyledSection>
    </>
  );
}

export const StyledSection = styled.section`
-webkit-box-shadow:inset 1px 1px 10px 1px #8CFF40;
box-shadow:inset 1px 1px 10px 1px #BEBEBE;

display: grid;
column-gap: 50px;
grid-template-columns: auto auto auto;

position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
padding: 10px;
`
