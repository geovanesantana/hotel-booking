<template>
  <div class="stars">
    <StarsIcon v-for="(star, i) in getStarsInNumber" :key="i" />
  </div>
</template>

<script>
import StarsIcon from '@/assets/img/svg/icon-star-rating.svg?inline'

export default {
	name: 'Stars',

	components: {
		StarsIcon
	},

  props: {
    starsList: {
      type: String,
      default: '0',
    },
  },

	computed: {
		getStarsInNumber() {
			return parseInt(this.starsList)
		}
	}
}
</script>

<style>
</style>
