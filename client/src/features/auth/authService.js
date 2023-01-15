import axios from 'axios';

const API_URL = '/api//api/users'

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;

}

const logOut = () => {
  localStorage.removeItem('user');
}

const authService = {
  register,
  logOut
}

export default authService;