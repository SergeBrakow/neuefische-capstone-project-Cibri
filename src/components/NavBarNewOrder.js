import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function NavBarNewOrder (prop){
    const navigate = useNavigate();

    function logout(){
        localStorage.removeItem(`user`);
        navigate("/login");
    }
    
    return(
        <StyledNavBar>
        {prop.page === "home" ?
                <>
                <NavBarElement>
                <button onClick={()=> logout()}>{prop.user} logout</button>
                </NavBarElement>
                <NavBarElement>
                <button onClick={()=> navigate("/new")}>neuer Eintrag</button>
                </NavBarElement>
                </>
        :   
        <>
                <NavBarElement>
                <button onClick={()=> navigate("/home")}>zurück</button>
                </NavBarElement>
                </>
         }
        </StyledNavBar>
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
  bottom: 0;
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