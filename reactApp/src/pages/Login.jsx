import React, { useState } from 'react';
import '../css/login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., API call)
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="login-box">
      <div className="login-header">
        <header>Login</header>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            autoComplete="off"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            autoComplete="off"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="forgot">
          <section>
            <input
              type="checkbox"
              id="check"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="check">Remember me</label>
          </section>
          <section>
            <a href="#">Forgot password</a>
          </section>
        </div>

        <div className="input-submit">
          <button className="submit-btn" id="submit" type="submit"></button>
          <label htmlFor="submit">Sign In</label>
        </div>
      </form>

      <div className="sign-up-link">
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;