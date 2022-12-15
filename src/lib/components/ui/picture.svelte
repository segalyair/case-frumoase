<script>
	// @ts-nocheck
	export let className = undefined,
		srcset,
		sizes,
		width = undefined,
		height = undefined,
		alt,
		preload = false,
		loading = undefined,
		borderRadius = '0';
	const [, fallback] = srcset.split(',').at(-1).split(' ');
</script>

<svelte:head>
	{#if preload}
		<link rel="preload" as="image" href={fallback} imagesrcset={srcset} imagesizes={sizes} />
	{/if}
</svelte:head>

<img
	class={className}
	{alt}
	src={fallback}
	{width}
	{height}
	{srcset}
	{sizes}
	{loading}
	style={`border-radius: ${borderRadius}`}
/>

<style>
	img {
		height: auto;
	}
</style>
