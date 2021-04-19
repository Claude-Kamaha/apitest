const axios = require('axios');
axios.post('https://sandbox.nellys-coin.ejaraapis.xyz/api/v1/auth/signup', {
    "username": "clara",
"email_address": "kclaudejoel20@gmail.com",
"password": "jolie2000",
"phone_number": "+237695867144",
"phone_id": "3664",
"language": "fr",
"country_code":"cm"
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });