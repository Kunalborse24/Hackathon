import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../services/user";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();

  const onRegister = async () => {
    if (name.length === 0) {
      toast.warning("enter name");
    } else if (email.length === 0) {
      toast.warning("enter email");
    } else if (password.length === 0) {
      toast.warning("enter password");
    }  else {
      const result = await register(name, email, password);
      if (result["status"] === "success") {
        const { token, name } = result["data"];
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("name", name);
        toast.success("Registered in successfully");
        navigate("/login");
      } else {
        toast.error(result["error"]);
      }
    }
  };

  return (
    <div>
      <div
        className="App"
        
      >
        <div
          className="container"
          
        >
          <div
            
          >
            <div >
              <br />
              <br />
              <h1 >New user</h1>
            </div>
            <br />
            <div
              
            >
              <div>
                <div>
                  <label htmlFor="Name">Name:</label>
                  <input
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    id="Name"
                    name="name"
                    placeholder="Name"
                  />
                  <br />
                  <br />

                  <label htmlFor="Email">Email:</label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    id="Email"
                    placeholder="abc@gmail.com"
                  />
                  <br />
                  <br />

                  <label htmlFor="Password">Password:</label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    name="password"
                    id="Password"
                    placeholder="**********"
                  />
                  <br />
                  <br />

                  
                  <br />
                  <br />

                  <button
                    className="btn-btn"
                    onClick={onRegister}
                    style={{ marginInline: "5%" }}
                  >
                   Sign up
                  </button>
                 <Link>Sign in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
