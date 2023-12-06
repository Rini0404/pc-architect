import axios from 'axios';
import { setUserParts } from './authSlice';

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


const addPartToFavorites = (part) => (dispatch, getState) => {
  const { user } = getState().auth;
  if (user) {
    const updatedUser = {
      ...user,
      savedParts: [...user.savedParts, part],
    };
    dispatch(setUserParts(updatedUser)); // Now this is a valid function
  }
};

const removePartFromFavorites = (partId) => (dispatch, getState) => {
  const { user } = getState().auth;
  console.log("user", user)
  console.log("partId", partId)
  if (user) {
    const updatedUser = {
      ...user,
      savedParts: user.savedParts.filter(part => part._id !== partId),
    };
    console.log("updatedUser", updatedUser)
    dispatch(setUserParts(updatedUser));
  }

};


const getMe = async (token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + 'me', config);

  return response.data;

}

const removeSavedPart = async (partId, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.put(API_URL + 'removePart', { partId }, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const authService = {
  register,
  logout,
  login,
  savePart,
  getMe,
  addPartToFavorites,
  removeSavedPart,
  removePartFromFavorites,
}

export default authService;