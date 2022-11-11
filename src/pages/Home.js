import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import getDate from "../utils/getDate";
import NavBarNewOrder from "../components/NavBarNewOrder";
import EntryCard from "../components/EntryCard";


export default function Home({user, entries}) {
  const navigate = useNavigate(); 
  
  // in case somebody enter over the link /home without going over login
  if(user.name === undefined) {
    return ( <>
        <button onClick={()=> navigate("/")}>Sorry, but you need to login first!</button>
        </>);
  }
  
  return(
    <div> 
      <StyledHead>
        <p>{getDate("dayName")}</p>
        <p>{getDate("day")}</p>
      </StyledHead>
      <StyledTimeLine>
            {[...Array(25)].map((element, index) => ( 
              <StyledEntry key={index}>
                <StyledTimeText>{index <10 ? "0" + index : index}:00</StyledTimeText>
                <EntryRow>
                  {entries.map((entry) => entry.hour === index ? 
                    <EntryCard 
                      key={entry.id} 
                      entry={entry} />
                    : "")}
                </EntryRow> 
              </StyledEntry> 
            ))}
      </StyledTimeLine>
      <NavBarNewOrder user={user} page={"home"}/>
    </div>
  );
}


export const StyledHead = styled.div`
  border-bottom: 1px solid;
  background-color: white;
  position: fixed;
  width: 100%;
  height: 120px;
  top: 0;
  layer: 10; 
`

export const StyledTimeLine = styled.div`
  margin: 119px 0 49px 0; 
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