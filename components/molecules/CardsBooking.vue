<template>
	<div>
		<ul class="card-booking">
			<li class="card-booking__wrapper" v-for="(item, i) in cards" :key="i">
				<div class="card-booking__overlay">
					<a :href="`/hotel/${item.slug}`">
						<div v-for="(img, i) in item.image" :key="i">
							<img :src="img.uri" :alt="item.name" class="card-booking__image" />
						</div>
					</a>
				</div>

				<div class="card-booking__body">
					<a :href="`/hotel/${item.slug}`">
						<h2 class="card-booking__title">{{ item.name }}</h2>
					</a>

					<Stars :stars-list="item.stars" />
					<Badge :label="item.label" :location="item.address" />

					<div class="card-booking__price">
						<p
							class="card-booking__price-money"
							v-for="(offer, i) in item.price" :key="i">
								{{ offer.price.total }} /night
						</p>

						<a :href="`/hotel/${item.slug}`" class="button button--impact">
							Book now
						</a>
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
    }
  },
}
</script>

<style>
</style>
