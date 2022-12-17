<script lang="ts">
	import slide0 from '@images/slides/slide0.jpg?w=1280;1024;480&webp&quality=100&srcset&imagetools';
	import slide1 from '@images/slides/slide1.jpg?w=1280;1024;480&webp&quality=100&srcset&imagetools';
	import slide2 from '@images/slides/slide2.jpg?w=1280;1024;480&webp&quality=100&srcset&imagetools';
	import architect from '@images/poza_arhitect.jpg?w=300&webp&quality=100&srcset&imagetools';
	import Carousel from '$lib/components/ui/carousel/carousel.svelte';
	import Preload from '$lib/components/head/preload.svelte';
	import { onMount } from 'svelte';
	import Picture from '$lib/components/ui/picture.svelte';
	// /** @type {import('./$types').PageData} */
	// export let data: any = {};
	// let width = 480,
	// 	height = 270;
	// const sizes = [
	// 	{ maxWidth: '1280px', width: 1280, height: 720 },
	// 	{ maxWidth: '768px', width: 1024, height: 576 },
	// 	{ maxWidth: '480px', width: 480, height: 270 }
	// ];
	// onMount(() => {
	// 	for (let size of sizes) {
	// 		if (window.matchMedia(`(max-width: ${size.maxWidth})`).matches) {
	// 			width = size.width;
	// 			height = size.height;
	// 			return;
	// 		}
	// 	}
	// 	width = sizes[0].width;
	// 	height = sizes[0].height;
	// });
</script>

<svelte:head>
	<Preload
		imagesrcset={slide0}
		imagesizes={'(max-width: 480px) 480px, (max-width: 768px) 1024px, 1280px'}
	/>
	<Preload
		imagesrcset={slide1}
		imagesizes={'(max-width: 480px) 480px, (max-width: 768px) 1024px, 1280px'}
	/>
	<Preload
		imagesrcset={slide2}
		imagesizes={'(max-width: 480px) 480px, (max-width: 768px) 1024px, 1280px'}
	/>
</svelte:head>

<main>
	<Carousel
		images={[slide0, slide1, slide2]}
		sizes={'(max-width: 480px) 480px, (max-width: 768px) 1024px, 1280px'}
		width={480}
		height={270}
	/>
	<section class="intro">
		<h2 class="h3">Realizăm case frumoase</h2>
		<Picture
			srcset={architect}
			sizes={'300px'}
			width="300"
			height="450"
			alt="Architect Adrian Paun"
			loading="lazy"
		/>
		<div class="content">
			<p class="body body--large">
				Bună ziua, sunt <strong>arhitect Adrian Păun</strong> şi vă propun o casă frumoasă pentru o viaţă
				frumoasă!
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
					Avand in vedere ca se primeste un termen limita pentru executia lucrarii este estential sa
					aveti un consultant care se asigura ...
				</p>
			</div>
			<div class="panel">
				<h3 class="h4">Urmărire șantier</h3>
				<p class="body">
					Avand in vedere ca se primeste un termen limita pentru executia lucrarii este estential sa
					aveti un consultant care se asigura ...
				</p>
			</div>
			<div class="panel">
				<h3 class="h4">Urmărire șantier</h3>
				<p class="body">
					Avand in vedere ca se primeste un termen limita pentru executia lucrarii este estential sa
					aveti un consultant care se asigura ...
				</p>
			</div>
		</div>
	</section>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
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
</style>
