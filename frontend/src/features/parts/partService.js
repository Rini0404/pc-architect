import axios from "axios";

const API_URL = '/api/parts/';

// create new part

const createPart = async (partData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, partData, config);

  return response.data;
};


const getParts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};


const searchByTypeAndKeyService = async (type, keyword, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_URL}${type}/${keyword}`, config);

    return response.data.parts;

  } catch (error) {
    console.log('error in searchByTypeAndKey Service', error)
  }
}

const savePart = async (partData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  if (partData.id) {
    // Assuming partData.id exists for existing parts
    const response = await axios.put(`${API_URL}${partData.id}`, partData, config);
    return response.data;
  } 
};



const partService = {
  savePart,
  createPart,
  getParts,
  searchByTypeAndKeyService,
};

export default partService;