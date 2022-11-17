import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { getDateNext, getDatePrevious, getDateString, getDateStringNext, getDateStringPrevious, getDayNameLong, getDayNameShort } from "../utils/getDate";
import NavBarNewOrder from "../components/NavBarNewOrder";
import EntryCard from "../components/EntryCard";


export default function Home({user, entries}) {
  const navigate = useNavigate(); 
  const [showDatePicker, setShowDatePicker] = useState(false);

  let {dateString} = useParams();
  if(dateString === undefined || dateString.length !== 10) {
    dateString = [new Date().getDate(), (new Date().getMonth() +1), new Date().getFullYear()].join('.');
  }

  const showDate = new Date(Number(dateString.slice(6, 10)),
                            (Number((dateString.slice(3, 5)-1))), 
                              Number(dateString.slice(0, 2)));
          
                              
  const entriesToday = entries.filter( (entry) => entry.date.dateStamp === dateString);



  // in case somebody enter over the link /home without going over login
  if(user.name === undefined) {
    return ( <>
        <button onClick={()=> navigate("/")}>Sorry, but you need to login first!</button>
        </>);
  }

  return(
    <div> 
      <StyledHead>
        <p>{getDayNameLong(showDate)}</p>
          {showDatePicker ? (
            <HeadNavBar>
               <HeadNavBarMidleElement>
                <DatePicker
                  selected={showDate}
                  onChange={(date) => {setShowDatePicker ((previousShowDatePicker) => !previousShowDatePicker); navigate(`/home/${getDateString(date)}`)}}
                  dateFormat="dd.MM.yyyy"
                />
                </HeadNavBarMidleElement>
                <HeadNavBarElement>
                  <button onClick={() =>setShowDatePicker ((previousShowDatePicker) => !previousShowDatePicker)}>Abbrechen</button>
                </HeadNavBarElement>
              </HeadNavBar>
            ) : (
              <HeadNavBar>
                <HeadNavBarElement>
                  <button onClick={()=> navigate(`/home/${getDateStringPrevious(showDate)}`)}>{getDayNameShort(getDatePrevious(showDate))}</button>
                </HeadNavBarElement>
                <HeadNavBarMidleElement>
                  <button onClick={() =>setShowDatePicker ((previousShowDatePicker) => !previousShowDatePicker)}>{dateString}</button>
                </HeadNavBarMidleElement>
                <HeadNavBarElement>
                  <button onClick={()=> navigate(`/home/${getDateStringNext(showDate)}`)}>{getDayNameShort(getDateNext(showDate))}</button>
                </HeadNavBarElement>
              </HeadNavBar>
            )
          }
      </StyledHead>
      <StyledTimeLine>
        {[...Array(25)] 
          .map((element, index) => ( 
            <StyledEntry key={index}>
              <StyledTimeText>{index.toString().padStart(2, '0')}:00</StyledTimeText>
                <EntryRow>
                  {entriesToday
                    .map((entry) => entry.date.hour === index ? (
                      <EntryCard key={entry.id} entry={entry} />
                            ) : ("")
                    ).sort((a, b) => 
                      a.props?.entry?.date?.minute - b.props?.entry?.date?.minute
                      )
                  }
                </EntryRow> 
              </StyledEntry> 
            )
          )
        }
      </StyledTimeLine>
      <NavBarNewOrder user={user} page={"home"} date={showDate}/>
    </div>
  );
}


export const StyledHead = styled.div`
  border-bottom: 1px solid;
  background-color: white;
  position: fixed;
  width: 100%;
  height: 95px;
  top: 0;
  layer: 10; 
`

export const HeadNavBar =styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 40px;
  button{
    background-color: white;
    border: 1px solid;
    border-radius: 8px;
    cursor: pointer;
    &:hover  {
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
  }
`

export const HeadNavBarMidleElement = styled.div`
  width: 100%;
  display: grid;
  width: 60%;
  margin: 2px;
`

export const HeadNavBarElement = styled.div`
  width: 100%;
  display: grid;
  width: 20%;
  margin: 2px;
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