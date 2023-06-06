POST

const url = 'https://api.example.com/endpoint'; // Replace with your API endpoint URL
const data = {
  name: 'John Doe',
  email: 'john.doe@example.com'
}; // Replace with the data you want to send in the POST request

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
};

fetch(url, options)
  .then(response => response.json())
  .then(data => {
    console.log('Response:', data);
    // Do something with the response data
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle any errors that occurred during the request
  });




GET

const url = 'https://api.example.com/endpoint'; // Replace with your API endpoint URL

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('Response:', data);
    // Do something with the response data
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle any errors that occurred during the request
  });
