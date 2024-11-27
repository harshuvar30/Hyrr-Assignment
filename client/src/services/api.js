import axios from "axios";

const API_BASE_URL = "http://localhost:8000"; // Replace with your backend URL

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/api/v1/users/register`, userData);
  return response.data;
};
