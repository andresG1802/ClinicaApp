import { baseURL } from "./api";


export const getTreatmentsById = async (id) => {
  try {
    const response = await fetch(`${baseURL}/tratamientos/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};