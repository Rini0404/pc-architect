import axios from 'axios';

const API_URL = '/api/users/';

const savePartUrl = '/api/users/savePart';


const savePart = async (partData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

      const response = await axios.post(savePartUrl, partData, config);
      
      return response.data;


  } catch (error) {
    throw error.response.data;
  }
};



//  register user with
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

//  login user with
const login = async (userData) => {
  
  const response = await axios.post(API_URL + 'login', userData)
  
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
  login,
  savePart,
}

export default authService;