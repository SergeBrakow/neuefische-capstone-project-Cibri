import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getTimeAsString } from "../utils/getDate";
import { UserContext } from "../utils/UserContext";

export default function OrderCard({order, setIdPosInHome}){
    const [showNote, setShowNote] = useState();
    const navigate = useNavigate();
    const { userList } = useContext(UserContext);
    

    return(
        <StyledCard >
            <div>
                <CardSection>
                        <StyledPTitel>{order.name}</StyledPTitel>
                        <p>{getTimeAsString(order.date.hour, order.date.minute)}</p>
                </CardSection>
                <ButtonContainer>
                    <button onClick={()=> { setIdPosInHome(order.date.hour); navigate(`/orderView/${order.id}`)}}>view</button>
                    <button onClick={()=> { setIdPosInHome(order.date.hour); navigate(`/orderEdit/${order.id}`)}}>edit</button>
                </ButtonContainer>
            </div>
                {showNote && <NoteDiv>
                        <div>
                            {order.note === "" ? "": 
                            <>
                                <PBoltInShow>Notizen</PBoltInShow>
                                <p>{order.note}</p>
                            </>
                            }
                            <PBoltInShow>verlinkte User</PBoltInShow>
                             {order.linkedUser.length === 0? (
                                <p>-</p>
                            ) : (
                                order.linkedUser.map((linkedUserId) => 
                                    <button key={linkedUserId} onClick={() =>{ setIdPosInHome(order.date.hour); navigate(`/userView/${linkedUserId}`)}}>{userList.find((user) => user.id === linkedUserId).name}</button>
                                    )
                            )} 
                        </div>
                    </NoteDiv>}
            <button onClick={() =>setShowNote ((previousShowNote) => !previousShowNote)}>Notizen</button>
        </StyledCard>
    );
}

export const StyledCard = styled.article` 
    background-color: #f4f9f4;
    border-radius: 10px;
    margin: 5px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.43); 
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.43);
    div{
        display: flex;
    } 
    button{
        background-color: #f4f9f4;
        margin: 5px;
        min-width: 45px;
        height: 25px;
        border: 1px solid;
        border-radius: 8px;
        &: hover {
            background-color: white;
            border: none;
            -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.85); 
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.85);
          }
    }
`

export const CardSection=styled.section`
    flex: 9;
    padding-left: 15px;
    text-align: left;
`
    
export const NoteDiv=styled.div`
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-radius: 10px;
    margin: 0 10px 0 10px;
    div{
        flex-direction: column;
        flex-basis: 100%;
        p{
            margin: 0px;
            }
        }
`

export const StyledPTitel=styled.p`
    font-weight: bold;
`
export const PBoltInShow=styled.p`
    font-weight: bold;
    padding-top: 10px;
`

export const ButtonContainer = styled.div`
    flex-direction: column;
`
    
export const CardSideElements = styled.div`
    position: absolute;
    right: 1em;
    top: 1em;
`
