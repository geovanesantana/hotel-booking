<template>
	<div v-show="isActive" class="tabs__details-content">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'Tab',

	props: {
		location: { required: true },
		selected: { default: false}
	},

	data() {
		return {
			isActive: false
		};
	},

	computed: {
		href() {
			return '#' + this.location.toLowerCase().replace(/ /g, '-');
		}
	},

	mounted() {
		this.isActive = this.selected;
	}
}
</script>

<style>
</style>
