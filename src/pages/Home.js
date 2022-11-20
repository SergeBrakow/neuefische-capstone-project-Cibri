import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

import "react-datepicker/dist/react-datepicker.css";

import { getDateFromString, getDateNext, getDatePrevious, getDateString, getDateStringNext,
         getDateStringPrevious, getDayNameLong, getDayNameShort } from "../utils/getDate";
import NavBarNewOrder from "../components/NavBarFooter";
import OrderCard from "../components/OrderCard";
import NeedLoginMessage from "../components/NeedLoginMessage";


export default function Home() {
  const navigate = useNavigate(); 
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { user, userList, orderList, setOrderList, idPosInHome, setIdPosInHome} = useContext(UserContext);

  // current day to show ("11.11.2022")
  let {dateString} = useParams();
  if(dateString === undefined || dateString.length !== 10) {
    dateString = getDateString(new Date());
  }

  // current day to show (Timestamp)
  const showDate = getDateFromString(dateString);
  const entriesToday = orderList.filter( (order) => order.date.dateString === dateString);

  const { pathname } = useLocation();
  useEffect(() => {
      
      setTimeout(() => {
        let lowestNumber = 24;
        if(idPosInHome === 0) {
          entriesToday.forEach(element => {
            if(element.date.hour <lowestNumber) lowestNumber =element.date.hour;
          });
          // the fisrt 2 entries can be hidden behind the head bar
          if(lowestNumber === 24){
            lowestNumber = 8;
          } else {
            lowestNumber = lowestNumber -2;
          }
        } else {
          lowestNumber = idPosInHome-2;
          if(lowestNumber <0) {lowestNumber = 0}
        }
        const element = document.getElementById(lowestNumber);
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
  }, [pathname]); // do this on route change  


  // in case somebody enter over the link /home without going over login
  if(user === null) {
    return ( 
      <NeedLoginMessage/>
      );
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
                  onChange={(date) => {
                    setShowDatePicker ((previousShowDatePicker) => !previousShowDatePicker); 
                    setIdPosInHome(0); 
                    navigate(`/home/${getDateString(date)}`)
                  }}
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
                  <button onClick={()=> {
                    setIdPosInHome(0); 
                    navigate(`/home/${getDateStringPrevious(showDate)}`)}
                    }>{getDayNameShort(getDatePrevious(showDate))}</button>
                </HeadNavBarElement>
                <HeadNavBarMidleElement>
                  <button onClick={() => setShowDatePicker ((previousShowDatePicker) => !previousShowDatePicker)}>{dateString}</button>
                </HeadNavBarMidleElement>
                <HeadNavBarElement>
                  <button onClick={()=> {
                    setIdPosInHome(0); 
                    navigate(`/home/${getDateStringNext(showDate)}`)}
                    }>{getDayNameShort(getDateNext(showDate))}</button>
                </HeadNavBarElement>
              </HeadNavBar>
            )
          }
      </StyledHead>
      <StyledTimeLine>
        {[...Array(25)] 
          .map((element, index) => ( 
            <StyledOrder key={index} id={index}>
              <StyledTimeText 
                onClick={()=> {
                  setIdPosInHome(index); 
                  navigate(`/orderCreate/${showDate}#${index}`)
                  }}>{index.toString().padStart(2, '0')}:00</StyledTimeText>
                <OrderRow>
                  {entriesToday
                    .map((order) => order.date.hour === index ? (
                      <OrderCard 
                        key={order.id} 
                        order={order} 
                        setIdPosInHome={setIdPosInHome}/>
                            ) : ("")
                    ).sort((a, b) => 
                      a.props?.order?.date?.minute - b.props?.order?.date?.minute
                      )
                  }
                </OrderRow> 
              </StyledOrder> 
            )
          )
        }
      </StyledTimeLine>
      <NavBarNewOrder user={user} page={"home"} date={showDate}/>
    </div>
  );
}


export const StyledHead = styled.div`
  background-color: #74b49b ; 
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  position: fixed;
  width: 100%;
  height: 95px;
  top: 0;
  layer: 10; 
`

export const HeadNavBar =styled.div`
  border-bottom: 2px solid;
  border-color: gray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 40px;
  button{
    background-color: #f4f9f4;
    border: 1px solid;
    border-radius: 8px;
    cursor: pointer;
    &:hover  {
      background-color: white;
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
  margin: 95px 0 49px 0; 
`

export const StyledOrder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 10px 10px 0;
  border-bottom: solid 1px;
`

export const StyledTimeText = styled.a`
    padding: 0px 10px 0px 10px ;
    margin: 5px;
    border-right: solid 1px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    max-width: 60px;
    cursor: pointer;
    &:hover  {
      background-color: #f4f9f4;
      border: none;
      -webkit-box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38); 
      box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.38);
    }
`

export const OrderRow=styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`