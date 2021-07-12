<template>
	<div>
		<ul class="card">
			<li class="card__wrapper" v-for="(item, i) in cards" :key="i">
				<div class="card__overlay">
					<NuxtLink to="#">
						<img :src="require(`~/assets/img/${item.image_url}.jpg`)" :alt="item.title" class="card__image" />
					</NuxtLink>
				</div>

				<div class="card__body">
					<h2 class="card__title">{{ item.title }}</h2>
					<p class="card__description">{{ item.description }}</p>

					<NuxtLink to="#" class="card__link">
						Visit <iconArrowLong class="card__icon" />
					</NuxtLink>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import iconArrowLong from '@/assets/img/svg/icon-arrow-long.svg?inline'

export default ({
	name: 'Cards',

	props: {
		cards: {
			type: Array,
			required: true
		}
	},

	components: {
    iconArrowLong
  }
})
</script>

<style>
</style>
