import { baseURL } from "./api";


export const getTreatments = async () => {
  try {
    const response = await fetch(`${baseURL}/tratamientos`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};