<template>
	<section class="home" id="home">
		<img src="~/assets/img/hotel-tui-banner.jpg" alt="Explore The Best Beautiful Hotels" class="home__img" />

		<div class="home__container container grid">
			<div class="home__data">
				<span class="home__data-subtitle">Discover your Hotel</span>
				<h1 class="home__data-title">
					Explore The <br />
					Best
					<b>
						Beautiful <br />
						Hotels
					</b>
				</h1>
			</div>

			<div class="home__social">
				<SocialLink link="https://www.facebook.com/TUIBrasil/" icon="Facebook" />
				<SocialLink link="https://www.instagram.com/tuiuk/" icon="Instagram" />
				<SocialLink link="https://twitter.com/TUIGroup" icon="Twitter" />
			</div>

			<div class="home__info">
				<div>
					<span class="home__info-title">Discover the best hotels</span>
					<a href="#discover" class="button button--flex button--link home__info-button">
						See More <iconArrowLong/>
					</a>
				</div>

				<div class="home__info-overlay">
					<img src="~/assets/img/home-featured.jpg" alt="Home" class="home__info-img" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import iconArrowLong from '@/assets/img/svg/icon-arrow-long.svg?inline'

export default {
	name: 'Banner',

	components: {
    iconArrowLong
	}
}
</script>

<style>
</style>
