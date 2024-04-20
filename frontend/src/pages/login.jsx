import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../services/user";

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onLogin = async () => {
    if (email.length === 0) {
      toast.warning("Please enter your email");
    } else if (password.length === 0) {
      toast.warning("Please enter your password");
    } else {
      const result = await login(email, password);
      if (result["result"] === "success") {
        const { token, name } = result["data"];
        sessionStorage.getItem("token", token);
        sessionStorage.getItem("name", name);
        toast.success("login success");
        navigate("/home");
      } else {
        toast.error(result["login error"]);
      }
    }
  };
  return (
    <div
      className="App"
    
    >
      <div
        className="container"
        
      >
        <div
          
        >
          <div className="row" >
            <div  >
              <br />
              <br />
              <h1>Log in</h1>
            </div>
            <br />
            <div
             
            >
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="abc@gmail.com"
                />
              </div>
              
              <div >
                <label htmlFor="password">Password:</label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="**********"
                />
                
              </div>
              <div >
                <button className="btn btn-success" onClick={onLogin} style={{ marginInline: "5%" }}>
                  Login
                </button>
                <button className="btn btn-primary" style={{ marginInline: "1%" }}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
