import { useNavigate} from "react-router-dom"; 

export default function Order(){
    const navigate = useNavigate(); 
    return(
        <>
        <p>neue Einträge können aktuell nicht erstellt werden!</p>
        <button onClick={()=> navigate("/new")}>zurück</button>
    </>
    );
}