import axios from 'axios'

export const createRestaurant = info => {
  return axios.post("/api/restaurant/new", info);
};

