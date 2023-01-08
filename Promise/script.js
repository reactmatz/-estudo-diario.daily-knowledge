const fetchData = new Promise((resolve, reject) => {
  fetch('https://my-api.com/endpoint')
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(error => reject(error));
});

