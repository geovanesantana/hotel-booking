const axios = require('axios');
const qs = require('qs');
import Cookies from 'js-cookie'

export const state = () => ({
  access_token: '',
})

export const mutations = {
	SET_ACCESS_TOKEN(state, payload) {
		state.access_token = payload
	}
}

export const actions = {
  async nuxtServerInit ({ commit }, { $axios, app }) {
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

		const getAccessToken = await axios(config)
			.then(function (response) {
				return response.data.access_token
			})
			.catch(function (error) {
				console.log(error);
			});

		commit('SET_ACCESS_TOKEN', getAccessToken)
		$axios.setToken(getAccessToken, 'Bearer')
  },
}
