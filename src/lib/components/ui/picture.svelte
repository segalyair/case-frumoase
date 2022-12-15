<script>
	// @ts-nocheck
	export let className = undefined,
		srcset,
		sizes,
		width = undefined,
		height = undefined,
		alt,
		loading = undefined,
		borderRadius = '0';
	const [, fallback] = srcset.split(',').at(-1).split(' ');
</script>

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
