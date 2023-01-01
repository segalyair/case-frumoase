<script lang="ts">
	import Play from '$lib/svgs/play.svg?component';

	export let data: { title: string; link: string };

	let opened = false;
	const id = data.link.split('/').at(-1);
	const thumbnail = `https://i.ytimg.com/vi/${id}/0.jpg`;
	function getEmbed(link: string) {
		return `<iframe
					width="560"
					height="315"
					src="${link}?autoplay=1"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>`;
	}
</script>

{#if opened}
	{@html getEmbed(data.link)}
{:else}
	<button
		type="button"
		on:click={() => (opened = true)}
		aria-label={`Click to play youtube video ${data.title}`}
	>
		<p class="body body--large">{data.title}</p>
		<span class="play-button">
			<Play color="white" />
		</span>
		<img width="560" height="315" src={thumbnail} alt="Youtube video thumbnail" loading="lazy" />
	</button>
{/if}

<style>
	button {
		display: grid;
		grid-template-rows: auto 1fr;
		align-items: center;
		position: relative;
	}
	img {
		border-radius: 4px;
		object-fit: cover;
	}
	p {
		position: absolute;
		top: 1rem;
		left: 1rem;
		padding: 0.5rem 1rem;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 2px;
	}
	.play-button {
		position: absolute;
		left: 50%;
		transform: translate(-50%);
		padding: 1.5rem 1.1rem 1.1rem 1.7rem;
		border-radius: 50%;
		background-color: #8d5530;
		box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
	}
	@media screen and (max-width: 580px) {
		img {
			width: 90vw;
			height: auto;
			aspect-ratio: 1.8;
		}
	}
</style>
