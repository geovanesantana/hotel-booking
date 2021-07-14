<template>
	<div id="app-wrapper">
		<Header />
		<Nuxt />
	</div>
</template>

<script>
export default {
	// async asyncData({ $axios }) {
	// 	console.log('iniciou axios all')
	// 	$axios.$all([
	// 		$axios.$get('https://api.github.com/users/MaksymRudnyi'),
	// 		$axios.$get('https://api.github.com/users/taylorotwell')
	// 	])
	// 	.then($axios.$spread((obj1, obj2) => {
	// 		// Both requests are now complete
	// 		console.log(obj1.data.login + ' has ' + obj1.data.public_repos + ' public repos on GitHub');
	// 		console.log(obj2.data.login + ' has ' + obj2.data.public_repos + ' public repos on GitHub');
	// 	}));
	// }
	// nuxtServerInit ({dispatch, commit}, {app}) {
	// 	return new Promise((resolve, reject) => {
	// 		const cookies = cparse.parse(context.req.headers.cookie || '')
	// 		if (cookies.hasOwnProperty('x-access-token')) {
	// 			app.$axios.setToken(cookies['x-access-token'], 'Bearer')
	// 			console.log('teste')
	// 			api.auth.me2()
	// 				.then(result => {
	// 					commit('setUser', result.data.user)
	// 					resolve(true)
	// 				})
	// 				.catch(error => {
	// 					commit('resetUser')
	// 					resetAuthToken()
	// 					resolve(false)
	// 				})
	// 		} else {
	// 			resetAuthToken()
	// 			resolve(false)
	// 		}
	// 	})
	// }
}
</script>

<style>
</style>
