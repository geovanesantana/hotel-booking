// const axios = require('axios');
// const qs = require('qs');
// import cookies from 'js-cookie'

// const data = qs.stringify({
// 	client_id: process.env.AMADEUS_API_KEY,
// 	client_secret: process.env.AMADEUS_API_SECRET,
// 	grant_type: process.env.AMADEUS_GRANT_TYPE
// });

// const config = {
//   method: 'post',
//   url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   // console.log('{{{{ access_token }}}}', JSON.stringify(response.data.access_token));
// 	// axios.setToken(cookies['x-access-token'], 'Bearer')
// })
// .catch(function (error) {
//   console.log(error);
// });

// export default () => ({ app, res, query }) {
// 	console.log('teste')
//   // app.$cookies.set('lang', query.lang)
// }

// console.log('teste')


// export default function (context) {
//   context.app.$axios
//     .get('https://api.nuxtjs.dev/mountains')
//     .then((res) => {
//       console.log('middl',res);
//     })
//     .catch((e) => {
//       console.log('error midd',e);
//     });
// }

// function nuxtServerInit ({commit}, {req, route, app, store}) {
// 	// let cookies = new Cookies(req)
// 	// let token = cookies.get('access-token')

// 	// if (!token) return

// 	// commit('setToken', token)
// 	// app.$axios.setToken(token, 'Bearer')

// 	console.log('nuxtServerInit')
// }
