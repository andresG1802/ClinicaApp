
import { baseURL } from './api';

export const login = async (dni, password) => {
  try {
    const response = await fetch(`${baseURL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dni, password })
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const usuario = await response.json();
    
    return usuario;
  } catch (error) {
    throw new Error(error.message);
  }
};

