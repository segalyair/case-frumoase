<script lang="ts">
	import Picture from '$lib/components/ui/picture.svelte';
	import slide0 from '@images/slides/slide0.jpg?w=1280;1024&webp&quality=100&srcset&imagetools';
	import slide1 from '@images/slides/slide1.jpg?w=1280;1024&webp&quality=100&srcset&imagetools';
	import slide2 from '@images/slides/slide2.jpg?w=1280;1024&webp&quality=100&srcset&imagetools';
	import { onMount } from 'svelte';
	import Siema from 'siema';
	// /** @type {import('./$types').PageData} */
	// export let data: any = {};

	function goToSlide(index: number) {
		siema?.goTo(index);
	}

	let siema: any;
	let currentSlide = 0;

	onMount(() => {
		siema = new Siema({
			selector: '.siema',
			duration: 600,
			easing: 'ease-out',
			draggable: true,
			multipleDrag: false,
			threshold: 100,
			loop: true,
			rtl: false,
			onInit: () => {},
			onChange: () => {
				currentSlide = siema.currentSlide;
			}
		});
	});
</script>

<main>
	<div class="carousel">
		<div class="siema">
			<Picture srcset={slide0} alt="Background" sizes="(max-width: 768px) 1024px, 1280px" />
			<Picture srcset={slide1} alt="Background" sizes="(max-width: 768px) 1024px, 1280px" />
			<Picture srcset={slide2} alt="Background" sizes="(max-width: 768px) 1024px, 1280px" />
		</div>
		<div class="pagination">
			<button
				on:click={() => goToSlide(0)}
				class="pageButton"
				class:active={currentSlide === 0}
				aria-label={`Go to slide number 1`}
			/>
			<button
				on:click={() => goToSlide(1)}
				class="pageButton"
				class:active={currentSlide === 1}
				aria-label={`Go to slide number 2`}
			/>
			<button
				on:click={() => goToSlide(2)}
				class="pageButton"
				class:active={currentSlide === 2}
				aria-label={`Go to slide number 3`}
			/>
		</div>
		<div class="caption">
			<h1 class="h3">Case în stil neoromânesc</h1>
			<p class="body body--large">Realizăm proiecte de case în stil românesc!</p>
		</div>
	</div>
</main>

<style>
	main {
		overflow: hidden;
		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
		gap: 2rem;
		margin-top: 4rem;
		border-radius: 12px;
	}

	.pagination {
		position: absolute;
		bottom: 4rem;
		left: 4rem;
		display: flex;
		gap: 2rem;
		background: rgba(255, 255, 255, 0.7);
		padding: 1rem;
		border-radius: 30px;
	}

	.pageButton {
		position: relative;
		width: 1.5rem;
		height: 1.5rem;
		background: rgba(0, 0, 0, 0.3);
		border-radius: 50%;
		margin: 0;
		transition: background 200ms;
	}
	.pageButton:not(.active):hover {
		background: rgba(0, 0, 0, 0.6);
	}
	.pageButton.active {
		background: black;
	}
	.pageButton:before {
		content: '';
		position: absolute;
		top: -1.25rem;
		left: -0.75rem;
		width: 3rem;
		height: 4rem;
	}
	.carousel {
		position: relative;
		/* same size as image width */
	}
	.pagination {
		margin: auto;
	}
	.caption {
		position: absolute;
		top: 4rem;
		left: 4rem;
		padding: 2rem;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
