<script lang="ts">
	import Carousel from './carousel.svelte';
	import ClientDefault from '$lib/svgs/client-default.svg?component';
	export let slides: any[],
		sizes: string | undefined = undefined,
		onInit: (() => void) | undefined = undefined;
</script>

<div class="carousel-container">
	<Carousel
		options={{ loop: true, align: 'center', draggable: true, speed: 10 }}
		autoplayOptions={{
			delay: 4000,
			stopOnMouseEnter: true
		}}
		slideCount={slides.length}
		on:init={onInit}
	>
		<div slot="slides" class="embla__container">
			{#each slides as slide, i}
				<div class="embla__slide">
					<div class="embla__slide__content">
						{#if slide.image?.url}
							<img
								class="embla__slide__img"
								alt="Client"
								width={100}
								height={100}
								src={slide.image.url}
								{sizes}
								loading="lazy"
							/>
						{:else}
							<ClientDefault width={100} height={100} />
						{/if}
						<span class="quotation">“</span>
						<div class="text-container">
							<p class="message body body--large">
								{slide.message}
							</p>
							<div class="separator" />
							<div class="client">
								<p class="name body body--vlarge"><strong>{slide.name}</strong></p>
								<p class="body body--large">
									{#if slide.role}{slide.role}{:else}&#8205;{/if}
								</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</Carousel>
</div>

<style>
	.carousel-container {
		width: 100%;
		padding-bottom: 2rem;
	}
	.embla__container {
		display: flex;
		flex-direction: row;
		height: auto;
		padding-bottom: 1rem;
	}
	.embla__slide {
		flex: 0 0 90vw;
		min-width: 0;
		max-width: 70rem;
		position: relative;
		background: #edebe5;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 4px;
		margin-left: 5rem;
	}

	.embla__slide__content {
		height: 100%;
		max-height: 54rem;
		padding: 8rem 4rem 4rem;
		display: grid;
		grid-template-columns: auto auto 1fr;
		column-gap: 1rem;
	}

	.quotation {
		font-family: 'Inter', 'sans-serif';
		font-size: 15rem;
		font-weight: 700;
		line-height: 0.3;
	}

	.embla__slide__content img {
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
		border-radius: 50%;
	}

	.text-container {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: baseline;
		justify-content: start;
	}
	.message {
		flex-grow: 1;
	}

	@media screen and (max-width: 768px) {
		.embla__slide__content {
			grid-template-columns: 1fr;
			grid-auto-rows: min-content;
			justify-items: center;
			row-gap: 2rem;
			padding: 2rem;
		}
		.text-container {
			flex-direction: column-reverse;
		}
		.client {
			width: 100%;
			text-align: center;
			margin-bottom: 2rem;
		}
		.quotation,
		.separator {
			display: none;
		}
	}
</style>
