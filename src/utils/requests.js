const baseUrl = `http://${window.location.hostname}:${5000}`;

export const postRequest = (route, data) => {
  return fetch(`${baseUrl}${route}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json());
};
