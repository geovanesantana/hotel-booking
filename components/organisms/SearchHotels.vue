<template>
	<div class="search" id="hotels">
		<div class="container">
			<div class="search__wrapper">
				<h2 class="search-form__title">Find your perfect hotel</h2>
				<p>Because you would not want to stay in same place, every day, every hour, and every second.</p>

				<form class="search__form">
					<input
						class="search-input"
						placeholder="Search by hotel name"
						type="text"
						v-model="nameHotel">

					<select v-model="location" class="select select--location ">
						<option v-for="(option, i) in locations" :key="i" :value="option.value">
							{{ option.text }}
						</option>
					</select>

					<div>
						<label for="vol">Price: ${{ range | formatMoney }}</label><br>
						<input type="range" v-model="range" min="0" max="1000" step="50"/>
					</div>
				</form>
			</div>

			<CardsBooking :cards="filteredHotels"/>

			<div v-if="filteredHotels.length === 0">
				<h3>No hotels found</h3>
			</div>
		</div>
	</div>
</template>

<script>
import iconArrowLong from '@/assets/img/svg/icon-arrow-long.svg?inline'

export default {
	name: 'SearchForm',

	components: {
		iconArrowLong
	},

	props: {
		hotelList: {
			type: Array,
			required: true
		}
	},

	filters: {
    formatMoney(money) {
      const moneyArr = String(money).split('.')
      const moneyIntFormatted = moneyArr[0].replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      let cents = moneyArr[1] ? moneyArr[1].slice(0,2) : '00'
      cents = cents.length === 1 ? `${cents}0` : cents;

      return moneyIntFormatted + ',' + cents
    },
  },

	data() {
		return {
			nameHotel: '',
			location: '',
			range: 1000,
			locations: [
				{ text: 'Select a location:', value: ''},
			  { text: 'Brazil', value: 'brazil' },
        { text: 'Italy', value: 'italy' },
        { text: 'Portugal', value: 'portugal' },
        { text: 'Spain', value: 'spain' },
			]
		}
	},

	computed: {
		filteredHotels() {
			return this.hotelList.filter(hotel => {
				const searchNameHotel = hotel.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(this.nameHotel.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
				const searchLocationHoel =  hotel.location.toLowerCase().includes(this.location.toLowerCase());
				const searchPriceHotel = hotel.price > 0 && hotel.price < this.range ? hotel.price : ''

				return searchNameHotel && searchLocationHoel && searchPriceHotel
			})
		}
	},
}
</script>

<style lang="scss">

</style>


