export const makeRequest = async (method, URL, body) => {
	let response;

	if (method === 'GET') {
		response = await fetch(URL);
	}
	else {
		response = await fetch(URL, {
			method: method,
			body: JSON.stringify(body),
			headers: {'Content-Type': 'application/json' }
		});
	}

	return response.json();
}