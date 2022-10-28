import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <h4>404 Page Not Found</h4>
      <button onClick={() => navigate("/login")}>to login</button>
    </>
  );
}


