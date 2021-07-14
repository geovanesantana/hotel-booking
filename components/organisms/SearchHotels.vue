<template>
	<div class="search" id="hotels">
		<div class="container">
			<div class="search__wrapper">
				<h2 class="search-form__title">Find your perfect hotel</h2>
				<p>Because you would not want to stay in same place, every day, every hour, and every second.</p>

				<form class="search__form">
					<input
						class="search-input"
						placeholder="Search by hotel name:"
						type="text"
						v-model="nameHotel">

					<select v-model="location" class="select select--location ">
						<option v-for="(option, i) in locationOptions" :key="i" :value="option.value">
							{{ option.text }}
						</option>
					</select>

					<select v-model="sort" class="select select--price ">
						<option v-for="(option, i) in sortOptions" :key="i" :value="option.value">
							{{ option.text }}
						</option>
					</select>
				</form>
			</div>

			<CardsBooking :cards="filteredHotels" />

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
			sort: '',
			locationOptions: [
				{ text: 'Select a location:', value: ''},
			  { text: 'Brazil', value: 'BR' },
        { text: 'Italy', value: 'IT' },
        { text: 'Portugal', value: 'PT' },
        { text: 'Spain', value: 'ES' },
			],
			sortOptions: [
				{ text: 'Sort by', value: ''},
			  { text: 'Price: Low to High', value: 'low' },
        { text: 'Price: High to Low', value: 'high' },
			]
		}
	},

	computed: {
		filteredHotels() {
			return this.hotelList.filter(hotel => {
				const sortByhNameHotel = hotel.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(this.nameHotel.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
				const sortByhLocationHoel =  hotel.country.toLowerCase().includes(this.location.toLowerCase());
				const sortByPrice =  this.sort === 'low' ? this.hotelList.sort((a, b) => a > b ? 1: -1) : this.hotelList.sort((a, b) => a < b ? 1: -1)

				return sortByhNameHotel && sortByhLocationHoel && sortByPrice
			})
		}
	}
}
</script>

<style>
</style>


