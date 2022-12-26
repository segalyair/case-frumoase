<script lang="ts">
	import architect from '@images/poza_arhitect.jpg?webp&imagetools';
	import Preload from '$lib/components/head/preload.svelte';
	import HouseCarousel from '$lib/components/ui/carousel/house-carousel.svelte';
	import ClientCarousel from '$lib/components/ui/carousel/client-carousel.svelte';
	export let data: {
		mainSlides: string[];
		articles: string[];
		specializations: any[];
		clientSlides: any[];
	};
	const { mainSlides, specializations, clientSlides } = data;
	const sizes = '(max-width: 480px) 100vw, (max-width: 1280px) 90vw, 1280px';
	let showContent = mainSlides?.length === 0;
</script>

<svelte:head>
	{#each mainSlides as slide}
		<Preload imagesrcset={slide} imagesizes={sizes} />
	{/each}
</svelte:head>

<main>
	{#if mainSlides?.length}
		<HouseCarousel {mainSlides} {sizes} onInit={() => (showContent = true)} />
	{/if}
	{#if showContent}
		<section class="intro">
			<h2 class="h3">Realizăm case frumoase</h2>
			<img src={architect} width={300} height={450} alt="Architect Adrian Paun" />
			<div class="content">
				<p class="body body--large">
					Bună ziua, sunt <strong>arhitect Adrian Păun</strong> şi vă propun o casă frumoasă pentru o
					viaţă frumoasă!
				</p>
				<p class="body body--large">
					Veţi găsi pe acest site proiectele mele
					<a class="button" href="/proiecte">Spre proiecte</a>
				</p>
				<p class="body body--large">
					Veți găsi articole cu multe imagini despre case interbelice
					<a class="button" href="/blog">Spre articole</a>
				</p>
			</div>
		</section>
		{#if specializations?.length}
			<section class="skills">
				<h2 class="h3">Specializări</h2>
				<div class="panels">
					{#each specializations as specialization}
						<div class="panel">
							<h3 class="h4">{specialization.title}</h3>
							<p class="body">
								{specialization.description}
							</p>
						</div>
					{/each}
				</div>
			</section>
		{/if}
		<section class="clients">
			<h2 class="h3">Ce spun clienții</h2>
			<ClientCarousel slides={clientSlides} onInit={() => (showContent = true)} />
		</section>
	{/if}
</main>

<style>
	:global(body) {
		overflow-y: scroll;
	}
	main {
		display: flex;
		flex-direction: column;
		margin: auto;
		--row-padding: 6rem;
	}
	.intro {
		display: grid;
		grid-template-columns: 42% 1fr;
		column-gap: 10rem;
		row-gap: 6rem;
		justify-items: end;
		padding: var(--row-padding) var(--content-padding);
		background: white;
		width: 100%;
	}
	.intro .content {
		align-self: center;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		margin-right: auto;
	}
	.intro h2 {
		justify-self: center;
		grid-column: 1/3;
		color: #8d5530;
	}
	.intro p {
		grid-column: 2;
		width: 50%;
		min-width: 30rem;
	}

	.intro p .button {
		margin-top: 1rem;
		display: block;
	}

	.skills {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--row-padding);
		padding: var(--row-padding) var(--content-padding);
	}
	.skills .panels {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-auto-rows: 1fr;
		gap: 2rem;
	}

	.skills .panel {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 40rem;
		padding: 2rem 4rem;
		background: rgba(255, 255, 255, 0.7);
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		border-radius: 4px;
	}
	.skills .panel h3 {
		text-align: center;
	}

	.clients {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--row-padding);
		background-color: white;
		padding: var(--row-padding) 0 calc(var(--row-padding) + 4rem);
	}
	.clients h2 {
		color: #8d5530;
		text-align: center;
	}
	@media only screen and (max-width: 1500px) {
		.skills .panels {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media only screen and (max-width: 900px) {
		.skills .panels {
			grid-template-columns: 1fr;
		}
	}
	@media only screen and (max-width: 768px) {
		.intro {
			column-gap: 3rem;
			row-gap: 2rem;
			padding: 3rem;
		}
		.intro p {
			min-width: 25rem;
		}
		.intro img {
			width: 15rem;
			height: 22.5rem;
		}
		.skills .panel {
			width: 100%;
			padding: 2rem;
		}
	}
	@media only screen and (max-width: 480px) {
		main {
			--row-padding: 4rem;
		}
		.intro {
			grid-template-columns: 1fr 1fr;
			column-gap: 1rem;
			padding: 2rem;
		}
		.intro .content {
			gap: 1rem;
		}
		.intro h2 {
			text-align: center;
		}
		.intro p {
			font-size: 1.4rem;
			min-width: 40vw;
		}
		.skills {
			gap: 4rem;
		}
	}
</style>
