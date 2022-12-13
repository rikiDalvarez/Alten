const BASE_URL = 'http://localhost:3001/products'

export default {
	getData: () => {
		return fetchRequest();
	},
};

const fetchRequest = () => {
	return fetch(`${BASE_URL}`)
		.then(res => res.status <= 400 ? res : Promise.reject(res))
		.then(res => res.json())
		.catch((err) => {
			console.log(`${err.message} while fetching `)
		});
};