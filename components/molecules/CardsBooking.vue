<template>
	<div>
		<ul class="card-booking">
			<li class="card-booking__wrapper" v-for="(item, i) in cards" :key="i">
				<div class="card-booking__overlay">
					<NuxtLink :to="item.slug" >
						<img :src="require(`~/assets/img/${item.image_url}.jpg`)" :alt="item.title" class="card-booking__image" />
					</NuxtLink>
				</div>

				<div class="card-booking__body">
					<h2 class="card-booking__title">{{ item.title }}</h2>
					<Stars :stars-list="item.stars" />
					<Badge :label="item.label" :location="item.address"/>

					<div class="card-booking__price">
						<p class="card-booking__price-money">{{ item.price | formatMoney }} /night</p>

						<NuxtLink :to="item.slug" class="button button--impact">
							Book now
						</NuxtLink>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	name: 'CardsBooking',

	props: {
		cards: {
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
}
</script>

<style>
</style>
