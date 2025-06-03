import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faGooglePlusG,faTwitter } from '@fortawesome/free-brands-svg-icons';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.access_token);
      alert("Login successful!");
      // Redirect or load protected content
    } catch (err) {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="LoginContainer" >
       <div className="BannerName"><h2 style={{color:"white"}}>Plantrix</h2></div> 
       <div className="LoginForm"> 
        <h3 style={{color:"black"}}>Login</h3>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
            
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            />
            <p style={{
                fontSize:15,
                color:"black",
                position:"relative",
                top:"-20px",
                left:"-100px",
                cursor:"pointer"

            }}>Forgot Password ?</p>
          
        </div>
        <button type="submit" style={{ padding: "10px 75px" }}>
          Login
        </button>
        <div>
            <p style={{
                fontSize:15,
                color:"black",
                marginTop:"50px"

            }}>Or Sign Up Using</p>
            <div style={{
             display:"flex",
             gap:"10px",
             justifyContent:"center",
             padding:"20px",
            }}>
                <FontAwesomeIcon icon={faFacebook} style={{backgroundColor:"white",cursor: "not-allowed",color:"blue",borderRadius:"100%"}}/>
                <FontAwesomeIcon icon={faGooglePlusG} style={{color:"red",cursor: "not-allowed",borderRadius:"100%"}}/>
                <FontAwesomeIcon icon={faTwitter} style={{color:" rgb(0, 183, 255)",border:"none",cursor: "not-allowed",borderRadius:"100%"}}/>
                

            </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      </div>
     
    </div>
  );
}

export default Login;
