<template>
	<main>
		<Banner />
		<SearchHotels :hotel-list="listAllHotels"/>
		<DiscoverPlaces :discover-places="listDiscoverPlaces"/>
		<ScrollUp />
	</main>
</template>

<script>
import discoverPlaces from '@/assets/json/discoverPlaces'

export default {
  name: 'HotelBooking',

	async asyncData({ $axios }) {
		const [brazil, italy, portugal, spain] = await Promise.all([
			$axios.$get('https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=GRU&radius=300').then(response => { return response.data }),
			$axios.$get('https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=MIL&radius=300').then(response => { return response.data }),
			$axios.$get('https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=OPO&radius=300').then(response => { return response.data }),
			$axios.$get('https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=MAD&radius=300').then(response => { return response.data })
		])

		let getListHotels = [
			...brazil,
			...italy,
			...portugal,
			...spain
		]

		let listAllHotels = getListHotels.map(item => {
			return {
				slug: item.hotel.hotelId,
				name: item.hotel.name,
				label: item.hotel.type,
				address: `${item.hotel.address.cityName}, ${item.hotel.address.countryCode}`,
				country: item.hotel.address.countryCode,
				price: item.offers,
				stars: item.hotel.rating,
				image: item.hotel.media
			}
		});

		return { listAllHotels }
  },

  data() {
    return {
			name: 'HotelBooking',
			listDiscoverPlaces: discoverPlaces,
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
        { rel: 'canonical', href: 'https://hotel-booking-inky.vercel.app/' }
      ]
    }
  }
}
</script>
