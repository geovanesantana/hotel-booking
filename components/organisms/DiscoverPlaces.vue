<template>
	<div class="discover-places container" id="discover">
		<h2 class="discover-places__title">The best hotels awarded by customers</h2>
		<p class="discover-places__description">Choose one of the destinations and discover the most rated hotels.</p>

		<Tabs>
			<Tab location="Brazil" :selected="true">
				<Cards :cards="discoverPlaces.brazil"/>
			</Tab>
			<Tab location="Italy">
				<Cards :cards="discoverPlaces.italy"/>
			</Tab>
			<Tab location="Portugal">
				<Cards :cards="discoverPlaces.portugal"/>
			</Tab>
			<Tab location="Spain">
				<Cards :cards="discoverPlaces.spain"/>
			</Tab>
		</Tabs>
	</div>
</template>

<script>

export default {
	name: 'DiscoverPlaces',

	props: {
		discoverPlaces: {
      type: Object,
			required: true
    }
	},

	computed: {
    hotelsListFiltered() {
      return this.hotelsList.filter(location => {
				const locations = ['aconcagua', 'denali']
        const normalizeLocation = location.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
        const searchLocations = locations.some(location => normalizeLocation.includes(location))

        return searchLocations
      })
    },
	}
}
</script>

<style>
</style>
