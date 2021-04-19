const axios = require('axios');
axios.post('https://sandbox.nellys-coin.ejaraapis.xyz/api/v1/auth/login', {
    "log": "Joelle",
    "password": "jolir25"

  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });