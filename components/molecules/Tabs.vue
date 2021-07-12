<template>
	<div>
		<div class="tabs">
			<ul class="tabs__list">
				<li v-for="(tab, i) in tabs" :key="i" :class="{ 'is-active': tab.isActive }">
						<a :href="tab.href" @click="selectTab(tab)">{{ tab.location }}</a>
				</li>
			</ul>
		</div>

		<div class="tabs__details">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Tabs',

 data() {
		return {tabs: [] };
	},

	created() {
		this.tabs = this.$children;
	},

	methods: {
		selectTab(selectedTab) {
			this.tabs.forEach(tab => {
				tab.isActive = (tab.location == selectedTab.location);
			});
		}
	}
}
</script>

<style>

</style>
