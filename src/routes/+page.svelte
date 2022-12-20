<script lang="ts">
	import architect from '@images/poza_arhitect.jpg?webp&imagetools';
	import Carousel from '$lib/components/ui/carousel/carousel.svelte';
	import Preload from '$lib/components/head/preload.svelte';
	export let data: { slides: string[] };
	const sizes = '(max-width: 480px) 100vw, (max-width: 1280px) 90vw, 1280px';
	let showContent = false;
</script>

<svelte:head>
	{#each data.slides as slide}
		<Preload imagesrcset={slide} imagesizes={sizes} />
	{/each}
</svelte:head>

<main>
	<Carousel
		images={data.slides}
		width={640}
		height={360}
		{sizes}
		on:init={() => (showContent = true)}
	/>
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
		<section class="skills">
			<h2 class="h3">Specializări</h2>
			<div class="panels">
				<div class="panel">
					<h3 class="h4">Urmărire șantier</h3>
					<p class="body">
						Avand in vedere ca se primeste un termen limita pentru executia lucrarii este estential
						sa aveti un consultant care se asigura ...
					</p>
				</div>
				<div class="panel">
					<h3 class="h4">Urmărire șantier</h3>
					<p class="body">
						Avand in vedere ca se primeste un termen limita pentru executia lucrarii este estential
						sa aveti un consultant care se asigura ...
					</p>
				</div>
				<div class="panel">
					<h3 class="h4">Urmărire șantier</h3>
					<p class="body">
						Avand in vedere ca se primeste un termen limita pentru executia lucrarii este estential
						sa aveti un consultant care se asigura ...
					</p>
				</div>
			</div>
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
		gap: 6rem;
		padding: var(--row-padding) var(--content-padding);
	}
	.skills .panels {
		display: flex;
		flex-wrap: wrap;
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
			min-width: 17.5rem;
		}
		.skills {
			gap: 4rem;
		}
	}
</style>
