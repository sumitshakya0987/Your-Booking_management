const API_URL = 'http://localhost:5000/api/auth'  // Change to your backend API URL

// Function to handle user login
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json()

    if (data.token) {
      localStorage.setItem('token', data.token)  // Store JWT token in localStorage
      return data
    } else {
      throw new Error('Invalid credentials')
    }
  } catch (error) {
    console.error('Error logging in:', error)
    throw error
  }
}

// Function to handle user signup
export const signup = async (email, password, name) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    })
    return await response.json()
  } catch (error) {
    console.error('Error signing up:', error)
    throw error
  }
}

// Function to check if the user is logged in (by checking for a token)
export const isAuthenticated = () => {
  return !!localStorage.getItem('token')
}

// Function to log out the user
export const logout = () => {
  localStorage.removeItem('token')
}
