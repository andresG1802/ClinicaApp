import api from './api';

export const login = async (username, password) => {
  try {
    const response = await api.post('/login', { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
