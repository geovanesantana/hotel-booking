<template>
	<section class="section">
		<div class="container hotel">
			<div class="hotel__wrapper">
				<div class="hotel__banner" v-for="(img, i) in getHotel.hotel.media" :key="i">
					<img :src="img.uri" :alt="getHotel.name" />
				</div>

				<div class="hotel__detail">
					<h2 class="hotel__detail-name">{{getHotel.hotel.name}} 	<Stars :stars-list="getHotel.hotel.rating" /></h2>
					<p class="hotel__detail-description">{{getHotel.hotel.description.text}}</p>
					<div class="hotel__detail-amenities">
						<span v-for="(item, i) in getHotel.hotel.amenities" :key="i">
							<iconCheck class="hotel__detail-icon" />

							{{item}}
						</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import iconCheck from '@/assets/img/svg/icon-badge-check.svg?inline'
import axios from 'axios'

export default {
	name: 'Hotel',

	components: {
		iconCheck
	},

	async asyncData({ $axios, params, app  }) {
		const getHotel = await $axios.$get(`${process.env.AMADEUS_API_URL}/by-hotel?hotelId=${params.slug}`)
			.then(response => {
				return response.data
			})

		return { getHotel }
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
        { rel: 'canonical', href: 'https://hotel-booking-inky.vercel.app/hotel' }
      ]
    }
  }
}
</script>

<style>
</style>
