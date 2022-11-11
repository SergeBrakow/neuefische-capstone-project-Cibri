import { useNavigate } from "react-router-dom";

export default function EditOrder(){
    const navigate = useNavigate();
    return(
        <>
            <p>Einträge können aktuell noch nicht bearbeitet/angeschaut werden!</p>
            <button onClick={()=> navigate("/home")}>zurück</button>
        </>
    );
}