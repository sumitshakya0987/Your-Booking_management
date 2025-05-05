const API_URL = 'http://localhost:5000/api'

export const fetchRooms = async (searchData) => {
  try {
    const response = await fetch(`${API_URL}/rooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchData),
    })
    return await response.json()
  } catch (error) {
    console.error('Error fetching rooms:', error)
  }
}
