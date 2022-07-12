const API_URL = 'https://api.tvmaze.com';

export async function apiGet(queryString) {
  const response = await fetch(`${API_URL}${queryString}`).then(res =>
    res.json()
  );
  return response;
}
