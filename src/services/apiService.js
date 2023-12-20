class ApiService {
	baseURL = 'https://aviasales-test-api.kata.academy'

	getSearchID() {
		return fetch(this.baseURL + '/search')
			.then((res) => res.json())
			.catch(console.error)
	}

	getTickets(searchID) {
		return fetch(`${this.baseURL}/tickets?searchId=${searchID}`, {
			headers: {
				Accept: 'application/json',
			},
		})
		// .then((res) => res.json())
		// .catch((err) => {})
	}
}

const apiService = new ApiService()
export default apiService
