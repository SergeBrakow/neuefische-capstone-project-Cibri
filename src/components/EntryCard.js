import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function EntryCard({entry}){
    const [showNote, setShowNote] = useState();
    const navigate = useNavigate();
    
    return(
        <StyledCard >
            <div>
                <CardSection>
                        <StyledPTitel>{entry.name}</StyledPTitel>
                        <p>{entry.date.hour.toString().padStart(2, '0')}:{entry.date.minute.toString().padStart(2, '0')}</p>
                </CardSection>
                <ButtonContainer>
                    <button onClick={()=> navigate("/viewOrder")}>view</button>
                    <button onClick={()=> navigate("/editOrder")}>edit</button>
                </ButtonContainer>
            </div>
                {showNote && <NoteDiv>
                        <div>
                            {entry.note === "" ? "": 
                            <>
                                <PBoltInShow>Notizen</PBoltInShow>
                                <p>{entry.note}</p>
                            </>
                            }
                            <PBoltInShow>verlinkte User</PBoltInShow>
                            <p>{entry.owner}</p>
                        </div>
                    </NoteDiv>}
            <button onClick={() =>setShowNote ((previousShowNote) => !previousShowNote)}>show</button>
        </StyledCard>
    );
}

export const StyledCard = styled.article` 
    border: solid 1px;
    border-radius: 10px;
    margin: 5px;
    div{
        display: flex;
    } 
    button{
        margin: 5px;
        width: 45px;
        height: 25px;
        border: 1px solid;
        border-radius: 8px;
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
