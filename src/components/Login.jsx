import { useState } from "react";


function Login({ onLogin }) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function handleLogin() {
      onLogin(email, password);
    }
    return(
      <div>
        <input type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} />
         <input type="password"
         placeholder="Password"
         onChange={(e) => setPassword(e.target.value)} />
         <button onClick={handleLogin}>Login</button>
      </div>
    )
  }
export default Login;