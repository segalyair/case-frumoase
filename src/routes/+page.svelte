<script lang="ts">
	import house from '$lib/images/dochita.jpg?webp&imagetools';
	import RecentProjects from '$lib/components/ui/recent-projects.svelte';
	import OurTeam from '$lib/components/ui/our-team.svelte';
	export let data: {
		mainSlides: MainSlides;
		articles: string[];
		specializations: any[];
		clientSlides: any[];
		youtubeLinks: { title: string; link: string }[];
		projects: any[];
		teamMembers: any[];
	};
	const { mainSlides, specializations, clientSlides, youtubeLinks, projects, teamMembers } = data;
	console.log(teamMembers);
</script>

<header class="header">
	<img class="landingImage" src={house} alt="House" />
	<div class="caption">
		<h1 class="h1">Realizăm case în stil neoromânesc</h1>
		<a href="/" class="button caps" type="button">Vezi proiecte</a>
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
</main>

<style>
	.landingImage {
		display: block;
		width: 100vw;
		height: auto;
		max-height: 100vh;
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
		max-width: 75rem;
		height: 100%;
		position: absolute;
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		justify-content: center;
		gap: 4rem;
		color: var(--text-light-color);
	}
	.header img {
		filter: brightness(80%);
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
