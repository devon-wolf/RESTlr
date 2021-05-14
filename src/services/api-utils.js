export const makeRequest = async ({ method, URL, body }) => {
	const response = await fetch(URL, {
		method: method,
		body: JSON.stringify(body),
		headers: {'Content-Type': 'application/json' }
	});

	return response.json();
}