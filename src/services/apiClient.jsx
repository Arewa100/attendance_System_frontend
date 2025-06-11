import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://attendance-system-1-lp41.onrender.com/api/v1', // Replace with your backend URL
    headers: {
      'Content-Type': 'application/json',
    },
  });


export default apiClient;