import axios from "axios";

export const sendEmail = async (formData) => {
  try {
    const data = axios.post("/api/form", formData);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
