<script lang="ts">
	import captionbg from '$lib/images/orange-bg.png?webp&imagetools';
	import RecentProjects from '$lib/components/section/recent-projects.svelte';
	import OurTeam from '$lib/components/section/our-team.svelte';
	import PictureBuilder from '$lib/components/ui/picture-builder.svelte';
	import RecentBlog from '$lib/components/section/recent-blog.svelte';
	import type { BlogArticle } from '../types/blogArticle';
	import type { Picture } from '@customTypes/picture';

	export let data: {
		landingPictures: Picture[];
		projects: any[];
		teamMembers: any[];
		blogPosts: BlogArticle[];
	};
	const { landingPictures, projects, teamMembers, blogPosts } = data,
		randomLandingImageIndex = Math.floor(Math.random() * landingPictures.length);
</script>

<header class="header">
	{#each landingPictures as pic, i}
		<div style:display={i === randomLandingImageIndex ? 'initial' : 'none'}>
			<PictureBuilder
				class="landingImage"
				picture={pic}
				loading={i === randomLandingImageIndex ? undefined : 'lazy'}
			/>
		</div>
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
	<RecentBlog posts={blogPosts} />
</main>

<style>
	header :global(.landingImage) {
		display: block;
		width: 100vw;
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
		width: 45vw;
		aspect-ratio: 429 / 226;
		padding: 4rem;
		position: absolute;
		bottom: 0;
		left: 0;
		gap: 4rem;
		color: var(--text-light-color);
		background-repeat: no-repeat;
		background-size: contain;
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
	@media only screen and (max-width: 480px) {
		main {
			--row-padding: 4rem;
		}
	}
</style>
