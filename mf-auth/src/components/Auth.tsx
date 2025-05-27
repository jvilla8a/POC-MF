import { useState } from 'react'
import './Auth.css'

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate authentication
    if (username && password) {
      setIsLoggedIn(true)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
    setPassword('')
  }

  if (isLoggedIn) {
    return (
      <div className="auth-container">
        <h2>Welcome, {username}!</h2>
        <button onClick={handleLogout} className="auth-button">
          Logout
        </button>
      </div>
    )
  }

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="auth-input"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
        </div>
        <button type="submit" className="auth-button">
          Login
        </button>
      </form>
    </div>
  )
}

export default Auth 