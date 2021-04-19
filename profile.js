
const axios = require('axios');
axios.post('https://sandbox.nellys-coin.ejaraapis.xyz/api/v1/customer/edit-profile', {
    "firstName": "Claude",
    "lastName":"joelle",
    "date_of_birth": "2000-05-24" // format -> "YYYY-MM-DD"

  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });