const api = new Api({
  address: 'https://nomoreparties.co/v1/web_es_cohort_04',
  token: `61c6f68c-f2f6-410f-a75d-8fc57629e184`,
});

function returnFetch(address, token) {
	return fetch(`${api.address}, ${token}`)
		.then((res) => res.json())
		.catch((res) => Promise.reject(`Error: ${res.status}`));
}

function getUserInfo() {
	const requestOptions = {
		method: "GET",
		headers: ("Authorization", api.token ),
    					("Content-Type", "application/json"),
	};
	return this.returnFetch("users/me", requestOptions);
}