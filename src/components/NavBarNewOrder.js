import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getDateString } from "../utils/getDate";
import { deleteFromLocalStorage, fromLocalStorage } from "../utils/localStorage";


export default function NavBarNewOrder (prop){
    const navigate = useNavigate();

    function logout(){
      deleteFromLocalStorage("loggedUser");
      navigate("/");
    }
    
    return(
      <div>
        {prop.page === "home" ?
          <StyledNavBar> 
              <NavBarElement>
                <button onClick={()=> logout()}>{prop.user.name} logout</button>
              </NavBarElement>
              <NavBarElement>
              <button onClick={()=> navigate(`/new/${getDateString(prop.date)}`)}>neuer Eintrag</button>
              </NavBarElement>   
          </StyledNavBar>
          : 
          <StyledNavBar>   
            <NavBarElement>
              <button onClick={()=> navigate("/home")}>zurück</button>
            </NavBarElement>
          </StyledNavBar>
        }
    </div>
    );
}


export const StyledNavBar = styled.section`
  border-top: 1px solid;
  background-color: white;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0px;
  layer: 10; 
`

export const NavBarElement = styled.div `
  width: 100%;
  display: grid;
  float: left;
  width: 33.33%;
  margin: 2px;
  button{
    border-radius:10px;
    border: 1px solid;
  }
`