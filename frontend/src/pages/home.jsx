import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
  };

  return (
    <div>
      <button onClick={onLogout} className="btn btn-warning">
        Logout
      </button>
      <h1>Home TODO</h1>
    </div>
  );
}

export default Home;
