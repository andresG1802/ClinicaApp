import { baseURL } from "./api";


export const getTreatments = async (idPaciente) => {
  try {
    const response = await fetch(`${baseURL}/services/${idPaciente}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const { tratamientos } = data;
    // const [primerTratamiento] = tratamientos;
    return tratamientos;
  } 
  catch (error) 
  {
    throw new Error(error.message);
  }
};
