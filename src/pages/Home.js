import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import getDate from "../utils/getDate";
import EntryCard from "../components/EntryCard";



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
      <StyledHead>
        <h1>{getDate("dayName")}</h1>
        <p>{getDate("day")}</p>
      </StyledHead>
      <StyledTimeLine>
            {[...Array(25)].map((element, index) => ( 
              <StyledEntry key={index}>
                <StyledTimeText>{index <10 ? "0" + index : index}:00</StyledTimeText>
                <EntryRow>
                  <p>no entry</p>
                </EntryRow> 
              </StyledEntry> 
            ))}
      </StyledTimeLine>
      <StyledNavBar>
        <NavBarElement>
          <button onClick={()=> logout()}>{user} logout</button>
        </NavBarElement>
      </StyledNavBar>
    </div>
  );
}


export const StyledHead = styled.div`
  border-bottom: 1px solid;
  background-color: white;
  position: fixed;
  width: 100vw;
  height: 120px;
  top: 0;
  layer: 10; 
`

export const StyledTimeLine = styled.div`
  margin: 119px 0 50px 0; 
`

export const StyledEntry = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 10px 10px 0;
  border-bottom: solid 1px;
`

export const StyledTimeText = styled.p`
    padding: 0px 10px 0px 10px ;
    margin: 5px;
    border-right: solid 1px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    max-width: 60px;
`

export const EntryRow=styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`

export const StyledNavBar = styled.section`
  border-top: 1px solid;
  background-color: white;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  height: 50px;
  bottom: 0;
  layer: 10; 
`

export const NavBarElement = styled.div `
  border: 0.1 px solid;
  width: 100%;
  display: grid;
  float: left;
  width: 33.33%;
`