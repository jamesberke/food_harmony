import axios from "axios";

/* 
	Expected info format for location based query for
	fetchFoods and fetchRestaurants:
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
export const fetchFoods = (info) => {
	return axios.post("/api/foods/find", info);
};

export const fetchRestaurants = (info) => {
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

export const createFood = (info) => {
	return axios.post("/api/foods/new", info);
};

export const loadImage = (url) => {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = function () {

			resolve({url: url, width: image.naturalWidth, height: image.naturalHeight});
		};
		image.onerror = function () {
			console.log(url)
			reject(url);
		};
		image.src = url
	});
};
