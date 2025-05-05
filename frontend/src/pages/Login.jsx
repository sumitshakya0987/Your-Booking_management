import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/auth'
import Button from '../components/Button'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const data = await login(email, password)
      console.log('Logged in successfully:', data)
      navigate('/profile')  // Redirect to the Profile page after successful login
    } catch (error) {
      setError('Failed to log in. Please check your credentials.')
    }
  }

  return (
    <div className="container mt-5">
      <h3 className="text-center">Login</h3>
      <div className="col-md-6 offset-md-3">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        {error && <p className="text-danger mt-3">{error}</p>}
        <div className="mt-4">
          <Button text="Login" type="primary" onClick={handleLogin} />
        </div>
      </div>
    </div>
  )
}

export default Login
