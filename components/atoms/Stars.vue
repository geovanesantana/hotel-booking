<template>
  <div class="stars">
    <StarsIcon
      v-for="(star, i) in starsList"
      :key="i"
    />
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
      type: Number,
      default: 0,
    },
  }
}
</script>

<style>
</style>
