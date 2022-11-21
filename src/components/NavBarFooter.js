import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getDateString } from "../utils/getDate";
import { deleteFromLocalStorage } from "../utils/localStorage";


export default function NavBarFooter (prop){
    const navigate = useNavigate();

    function logout(){
      deleteFromLocalStorage("loggedUser");
      navigate("/");
    }
    
    return(
      <div>
        {prop.page === "home" ?
          (
            <StyledNavBar> 
                <NavBarElement>
                  <button onClick={()=> logout()}>{prop.user.name} logout</button>
                </NavBarElement>
                <NavBarElement>
                  <button onClick={()=> navigate(`/userLinked/`)}>meine Termine</button>
                </NavBarElement>
                <NavBarElement>
                <button onClick={()=> navigate(`/new/${getDateString(prop.date)}`)}>neuer Eintrag</button>
                </NavBarElement>   
            </StyledNavBar>
          ) : (
            <StyledNavBar>   
              <NavBarElement>
                <button onClick={() => navigate(-1)}>zurück</button>
              </NavBarElement>
              <NavBarElement>
                <button onClick={() => navigate(`/home/`)}>Home</button>
              </NavBarElement>
            </StyledNavBar>
          )
        }
    </div>
    );
}


const StyledNavBar = styled.section`
  border-top: 2px solid;
  background-color: #74b49b ; 
  border-color: gray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0px;
  layer: 10; 
`

const NavBarElement = styled.div `
  width: 100%;
  display: grid;
  float: left;
  width: 33.33%;
  margin: 2px;
  button{
    background-color: #f4f9f4;
    border-radius:10px;
    border: 1px solid;  
    &: hover {
      background-color: white;
      border: none;
      -webkit-box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38); 
      box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38);; 
    }
`