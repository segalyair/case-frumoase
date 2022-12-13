<script>
	import Picture from '$lib/components/ui/picture.svelte';
	import PolygonShield from '$lib/svgs/polygon-shield.svg?component';
	import ArrowLeft from '$lib/svgs/arrow-left.svg?component';
	import ArrowRight from '$lib/svgs/arrow-right.svg?component';
	import slideImage from '$lib/images/slider.png?w=520;336&webp&quality=100&srcset&imagetools';
</script>

<section class="slider content" aria-labelledby="sliderHeading">
	<h2 id="sliderHeading" class="h2">Why choose us</h2>
	<span class="body body--vlarge intro">The most satisfying in-game service</span>
	<Picture
		className="sliderImage"
		srcset={slideImage}
		alt="Slide thumbnail"
		sizes="(max-width: 576px) 320px, 520px"
		loading="lazy"
	/>
	<div class="slide">
		<span class="icon">
			<PolygonShield />
		</span>
		<h3 class="h4">Safety and Confidentiality</h3>
		<p class="body">
			The use of VPNs while working on your order makes our service undetectable. We also use
			encryption measures to make sure your information stay private. All the data that comes from
			you, stays with us
		</p>
	</div>
	<div class="actions">
		<button type="button" aria-label="Move to the previous slide"
			><ArrowLeft color="var(--text-primary)" /></button
		>
		<button type="button" class="button button--primary" aria-label="Move to the next slide"
			><ArrowRight color="var(--text-primary)" /></button
		>
	</div>
</section>

<style>
	.slider {
		display: grid;
		grid-template-columns: auto auto auto;
		grid-template-rows: auto auto auto;
		row-gap: 8rem;
		padding: 15rem 0;
	}

	.intro {
		color: var(--text-secondary);
		word-break: break-word;
		margin-right: 2rem;
	}

	.slider :global(.sliderImage) {
		width: clamp(33.5rem, 27vw, 52rem);
		grid-row: 1/4;
		grid-column: 3;
	}

	.slide {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto auto;
		column-gap: 3rem;
		row-gap: 1.4rem;
		background-color: var(--accent-dark-secondary);
		padding: 5rem;
		padding-right: 8rem;
		grid-column: 1/3;
	}

	.slide .icon {
		grid-row: 1/3;
	}

	button {
		padding: 2.3rem;
	}
	button:first-of-type {
		background-color: var(--accent-dark-secondary);
	}

	/*var(--laptop)*/
	@media only screen and (max-width: 1440px) {
		.slider :global(.sliderImage) {
			display: none;
		}
		.actions {
			grid-column: 1;
		}
	}
	/*var(--phone-sm)*/
	@media only screen and (max-width: 576px) {
		.slider {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0;
		}
		.intro {
			margin-top: 1rem;
			margin-bottom: 4rem;
		}
		.slider :global(.sliderImage) {
			display: initial;
		}
		.slide {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 3rem;
		}
		.actions {
			margin-top: 4rem;
		}
	}
</style>
