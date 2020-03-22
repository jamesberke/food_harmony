import axios from "axios";

/* 
	Expected info format for fetchFoods and fetchRestaurants:
{
    "location": {
        "type": "Point",
        "coordinates": [
            -73.856077,
           40.848447
        ]
    },
    "distance": 10000
}
*/
export const fetchFoods = info => {
	// return axios.post("/api/users/register", userData);
	return axios.post("http://localhost:5000/api/foods/find", info);

};

export const fetchRestaurants = info => {
	return axios.get("/api/restaurants/find", info);
};

/* 
	Expected info format for fetchFoods and fetchRestaurants:
{
  description: "#pasta",
  price: 3.32,
  restaurantId: 55cba2476c522cafdb053add
  picture: <file upload>
}
*/

export const createFood = info => {
	return axios.post("/api/foods/new", info);
};
