import { onMounted, onUnmounted, ref } from '@nuxtjs/composition-api'
import { set } from '@vueuse/core'

export default function useHandleScroll(amount: number) {
	const hasScrolled = ref(false)

	const handleScroll = () => {
		if (window.scrollY >= amount) set(hasScrolled, true)
		else set(hasScrolled, false)
	}

	onMounted(() => {
		window.addEventListener('scroll', handleScroll)
	})
	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll)
	})

	return { hasScrolled }
}
