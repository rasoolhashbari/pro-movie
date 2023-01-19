import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: 'https://api.didimoon.com/v1/app',
    headers: { 'X-Api-Key': "CvgyJ2H9Lzo-vv5psqqCU91osT48fjkH5Ge98qwZ-YqQDItWHMGY2US5tngw" }
  });