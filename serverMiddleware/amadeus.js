const axios = require('axios');
const qs = require('qs');

const data = qs.stringify({
	client_id: process.env.AMADEUS_API_KEY,
	client_secret: process.env.AMADEUS_API_SECRET,
	grant_type: process.env.AMADEUS_GRANT_TYPE
});

const config = {
  method: 'post',
  url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
  // console.log('{{{{ access_token }}}}', JSON.stringify(response.data.access_token));
})
.catch(function (error) {
  console.log(error);
});
