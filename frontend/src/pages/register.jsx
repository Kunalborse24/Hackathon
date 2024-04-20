import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../services/user";
import { toast } from "react-toastify";

function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const onRegister = async () => {
    if (name.length === 0) {
      toast.warning("enter name");
    } else if (email.length === 0) {
      toast.warning("enter email");
    } else if (password.length === 0) {
      toast.warning("enter password");
    } else if (phone.length === 0) {
      toast.warning("enter phone");
    } else {
      const result = await register(name, email, password, phone);
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
              <h1 >Registration Form</h1>
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

                  <label htmlFor="Phone">Phone-Number:</label>
                  <input
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="tel"
                    id="Phone"
                    name="phone"
                    placeholder="number"
                  />
                  <br />
                  <br />

                  <button
                    className="btn btn-success"
                    onClick={onRegister}
                    style={{ marginInline: "5%" }}
                  >
                    Register
                  </button>
                  <button
                    className="btn btn-warning"
                    style={{ marginInline: "1%" }}
                  >
                    Clear
                  </button>
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
