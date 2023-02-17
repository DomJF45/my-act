import axios from 'axios';

interface iUser {
  name: string,
  email: string,
  password: string
}

const API_URL: string = '/api/api/users';

const register = async (userData: iUser): Promise<iUser> => {
  const response = await axios.post(`${API_URL}/register`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;

}

const logOut = (): void => {
  localStorage.removeItem('user');
}

const authService = {
  register,
  logOut
}

export default authService;