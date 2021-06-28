export const makeRequest = async (method, URL, body) => {
	let response;

	if (method === 'GET') {
		response = await fetch(URL);
	}
	else {
		response = await fetch(URL, {
			method: method,
			body,
			headers: {'Content-Type': 'application/json' }
		});
	}

	return response.json();
}

/*
// used my Buffy API, http://localhost:7890/api/v1/characters, all available routes working (no patch available)

// Required format for the JSON body requests:

{"name": "Anya Jenkins", "image":"https://static.wikia.nocookie.net/buffy/images/8/84/B6_Anya_02.jpg/revision/latest?cb=20170717214459", "creature_type": "human", "special_role": "vengeance demon (former)", "group_affiliation": "Scooby Gang"}

*/