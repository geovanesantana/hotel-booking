<template>
	<a
		href="#"
		class="scrollup"
		:style="{
			bottom: hasScrolled ? '5rem' : '-20%'
		}"
	>
		<iconChevron class="scrollup__icon"/>
	</a>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

import iconChevron from '@/assets/img/svg/icon-chevron.svg?inline'
import useHandleScroll from '~/composables/useHandleScroll'

export default defineComponent({
	name: 'ScrollUp',

	components: { iconChevron },

	setup() {
		const { hasScrolled } = useHandleScroll(200)

		return { hasScrolled }
	}
})
</script>

<style>
</style>
