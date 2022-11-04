import { useNavigate } from "react-router-dom";

export default function Customer(){
    const navigate = useNavigate();
    return(
        <>
            <p>neue Einträge für Kunden, können aktuell nicht erstellt werden!</p>
            <button onClick={()=> navigate("/new")}>zurück</button>
        </>
    );
}