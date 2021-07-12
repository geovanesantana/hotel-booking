<template>
</template>

<script>
export default {
	name: 'Hotel',
  // async asyncData({ $axios }) {},

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
        { rel: 'canonical', href: '/' }
      ]
    }
  }
}
</script>

<style>
</style>
