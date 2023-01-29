import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: 'https://api.didimoon.com/v1/app',
    headers: { 'X-Api-Key': "Eqcb7gs_jA5aRmsZh0l2fDt1JhIQOPmCW2uk9QjMEnSkEFdZHALACKAohuLM" },
  });