import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../services/user";
import { Link } from "react-router-dom";


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
      if (result["status"] === "success") {
        const { token, name } = result["data"];
        sessionStorage.getItem("token", token);
        sessionStorage.getItem("name", name);
        toast.success("login success");
        navigate("/home");
      } else if(result["status"]==="error"){
        toast.error("Enter valid password");
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
              <br />
              
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

              <br /><br />
              <div >
                <button className="btn-btn" onClick={onLogin} style={{ marginInline: "2%" }}>
                  Sign in
                </button>
                <Link to="/register">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
