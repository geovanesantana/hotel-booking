<template>
  <div class="badge">
		<span class="badge__label">{{ label }}</span>
		<p class="badge__location">{{ location }}</p>
  </div>
</template>

<script>
export default {
  name: 'Badge',

	props: {
    label: {
      type: String,
      default: 'Hotel'
    },
		location: {
      type: String
    },
  },
}
</script>

<style>
</style>
