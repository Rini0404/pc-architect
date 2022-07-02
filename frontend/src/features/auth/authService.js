import axios from 'axios';

const API_URL = '/api/users/';

//  register user with
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// logout
const logout = async () => {
  localStorage.removeItem('user')
}



const authService = {
  register,
  logout,
}

export default authService;