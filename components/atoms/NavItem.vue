<template>
	<li class="nav__item">
		<a :href="link" class="nav__link">
			<slot></slot>
		</a>
	</li>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
	name: 'NavItem',

	props: ['link']
})
</script>

<style>
</style>
