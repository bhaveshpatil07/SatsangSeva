import React, { useState } from "react";
import '../Csss/AdminLogin.css'
const AdminLogin = ({setAdmin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Static admin credentials for simplicity
    const adminEmail = process.env.REACT_APP_ADMIN;
    const adminPassword = process.env.REACT_APP_ADMIN_KEY;

    if (email === adminEmail && password === adminPassword) {
      alert('Login Successful')
      setAdmin(adminPassword);
      // navigate("/admin/adminpage"); // Redirect to the admin dashboard
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleLogin}>
        <h2 className="text-center"><span className="text-tomato"> Admin </span>Login</h2>
        <div>
          <label className="form-label" htmlFor="email">Email:</label>
          <input
            className="form-control"
            id="email"
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="password">Password:</label>
          <input
            className="form-control"
            id="password"
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
