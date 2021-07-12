import { ref } from '@nuxtjs/composition-api'
import { useToggle } from '@vueuse/core'

export default function useShowMenu() {
	const showMenu = ref(false)
	const toggleMenu = useToggle(showMenu)

	return { showMenu, toggleMenu }
}
