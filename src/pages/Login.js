import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { setUser, userList } = useContext(UserContext);

  function loginAs(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const { name } = Object.fromEntries(formData);

    let user = userList.find((user) => user.name === name);
    
    if(user === undefined) { 
      navigate("/");
      alert("Your login data could not be found!");
    } else {
      setUser(user);
      navigate("/home");
    }
  }

  window.scrollTo(0, 0);
  return(
    <div>
      <StyledWelcomeName>
          <h1>Cibri</h1>
          <p>your service app</p>
        </StyledWelcomeName>
        
      <LoginDiv>
        <form onSubmit={loginAs}>
            <fieldset>
              <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
              ></input>
              <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="******"
              ></input>
              <button type="submit">Login</button>
            </fieldset>
        </form>
      </LoginDiv>
      <FooterDiv>
        <p>a neue Fische Capstone project by S.B. </p>
      </FooterDiv>
    </div>
  );
}

export const StyledWelcomeName = styled.div`
background-color: #74b49b ; 
  margin-bottom: 100px;
  border-bottom: solid;
  border-bottom-color: gray;
  border-radius: 10px;
`

export const LoginDiv = styled.section`
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
    height: 30px;
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