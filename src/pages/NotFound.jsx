// TODO: Add NotFound page
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>NotFound</h1>
      <button className="cursor-pointer border" onClick={() => navigate("/")}>
        Go home
      </button>
    </div>
  );
};

export default NotFound;
