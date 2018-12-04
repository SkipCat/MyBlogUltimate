const host = 'localhost';
const port = 5000;
const baseUrl = `http://${host}:${port}`;

export const postRequest = (route, data) => {
  return fetch(`${baseUrl}${route}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json());
};
