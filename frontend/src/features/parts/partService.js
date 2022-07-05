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


const partService = {
  createPart,
};

export default partService;