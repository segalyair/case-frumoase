<script lang="ts">
	import captionbg from '$lib/images/orange-bg.png?webp&imagetools';
	import RecentProjects from '$lib/components/section/recent-projects.svelte';
	import OurTeam from '$lib/components/section/our-team.svelte';
	import PictureBuilder from '$lib/components/ui/picture-builder.svelte';
	import RecentBlog from '$lib/components/section/recent-blog.svelte';
	import type { BlogArticle } from '../types/blogArticle';
	import type { Picture } from '@customTypes/picture';
	import { onMount } from 'svelte';

	export let data: {
		landingPictures: Picture[];
		projects: any[];
		teamMembers: any[];
		blogPosts: BlogArticle[];
	};
	const { landingPictures, projects, teamMembers, blogPosts } = data;
	let randomLandingImageIndex = -1;
	onMount(() => {
		randomLandingImageIndex = Math.floor(Math.random() * landingPictures.length);
	});
</script>

<header class="header">
	{#each landingPictures as pic, i}
		<div
			style:display={randomLandingImageIndex !== -1 && i === randomLandingImageIndex
				? 'initial'
				: 'none'}
		>
			<PictureBuilder
				class="landingImage"
				picture={pic}
				loading={i === randomLandingImageIndex ? undefined : 'lazy'}
			/>
		</div>
		{#if randomLandingImageIndex === -1}
			<div class="landingImage" />
		{/if}
	{/each}
	<div class="caption" style={`background-image: url('${captionbg}')`}>
		<h1 class="h2">Realizăm case <br /> în stil neoromânesc</h1>
		<a href="/proiecte" class="button caps">Vezi proiecte</a>
	</div>
</header>
<main>
	<article class="pageSection">
		<h2 class="h2">
			Suntem specialiști în arhitectură clasică și tradițională, din România și alte zone Europene.
		</h2>
	</article>
	<RecentProjects {projects} />
	<OurTeam members={teamMembers} />
	<RecentBlog articles={blogPosts} />
</main>

<style>
	header :global(.landingImage) {
		display: block;
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}
	article {
		max-width: 70%;
		text-align: center;
		margin: auto;
		padding-bottom: 0;
	}
	.header {
		display: flex;
		justify-content: center;
		position: relative;
	}
	.caption {
		width: 122rem;
		height: 350px;
		padding-left: 10rem;
		position: absolute;
		bottom: 0;
		left: 0;
		gap: 2rem;
		color: var(--text-light-color);
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	main {
		display: flex;
		flex-direction: column;
		margin: auto;
		--row-padding: 6rem;
	}

	@media only screen and (max-width: 1024px) {
		.caption {
			padding-left: 4rem;
			width: 79rem;
			height: 300px;
		}
	}

	@media only screen and (max-height: 800px), (max-width: 800px) {
		.caption {
			width: 100%;
			height: unset;
			gap: 1rem;
			align-items: center;
			justify-content: space-between;
			text-align: center;
			background-image: none !important;
			background-color: #f68c5d;
			padding: 1rem;
		}
		.caption h1 br {
			display: none;
		}
	}

	@media only screen and (max-height: 800px){
		.caption h1{
			font: var(--font-h3);
		}
	}

	@media only screen and (max-width: 480px) {
		main {
			--row-padding: 4rem;
		}
	}
</style>
