<template>
	<main>
		<Banner />
		<SearchHotels :hotel-list="listHotels"/>
		<DiscoverPlaces :discover-places="listDiscoverPlaces"/>
		<ScrollUp />
	</main>
</template>

<script>
import discoverPlaces from '@/assets/json/discoverPlaces'
import hotels from '@/assets/json/listHotels'

export default {
  name: 'HotelBooking',

	// async asyncData ({ $axios }) {
  //   let { response } = await $axios.$get('dataURL', {}, { headers: {"Authorization" : `Bearer ${token}`} })

  //   return { response }
  // },

  data() {
    return {
			listDiscoverPlaces: discoverPlaces,
			listHotels: hotels
		};
  },

  head() {
    return {
      title: 'Hotel Booking | Find deals on hotels',
      meta: [
        { property:'og:site_name', content: 'Hotel Booking | Find deals on hotels' },
        { name:'og:site_name', hid:'og:site_name', content: 'Hotel Booking | Find deals on hotels' },
        { property:'og:title', content: 'Hotel Booking | Find deals on hotels' },
        { name:'og:title', hid:'og:title', content: 'Hotel Booking | Find deals on hotels' },
        { property:'og:description', content: 'Great savings on hotels in destinations to Portugal, Spain, Italy and Brazil. Find the best price guaranteed on hotels for all budgets.' },
        { name:'og:description', hid:'og:description', content: 'Great savings on hotels in destinations to Portugal, Spain, Italy and Brazil. Find the best price guaranteed on hotels for all budgets.' },
        { name: 'description', hid:'description', content: 'Great savings on hotels in destinations to Portugal, Spain, Italy and Brazil. Find the best price guaranteed on hotels for all budgets.' },
        { hid: 'robots', name: 'robots', content: 'noindex, nofollow' },
      ],
      link: [
        { rel: 'canonical', href: '/' }
      ]
    }
  }
}
</script>
