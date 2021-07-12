export const store = {
	state: {
		access_token: '',
	},
	getters: {
    GET_ACCESS_TOKEN: (state) => state.access_token,
	},
	mutations: {
		SET_ACCESS_TOKEN(state, payload) {
			state.access_token = payload
		}
	},
	actions: {
		SAVE_ACCESS_TOKEN: ({ commit }, param) => {
      if (!param) return;
      commit('SET_ACCESS_TOKEN', param);
    },
	}
}
