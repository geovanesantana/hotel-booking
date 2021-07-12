<template>
	<a :href="link" target="_blank" class="home__social-link">
		<component :is="icon" class="home__social-link-icon"></component>
	</a>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

import Facebook from '@/assets/img/svg/social-icon-facebook.svg?inline'
import Instagram from '@/assets/img/svg/social-icon-instagram.svg?inline'
import Twitter from '@/assets/img/svg/social-icon-twitter.svg?inline'

export default defineComponent({
	name: 'SocialLink',

	components: { Facebook, Instagram, Twitter },

	props: ['icon', 'link']
})
</script>

<style>
</style>
