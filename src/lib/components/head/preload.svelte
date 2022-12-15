<script lang="ts">
	export let imagesrcset: string, imagesizes: string;
	const href = imagesrcset.split(',').at(-1)?.split(' ')[1];
</script>

<svelte:head>
	<link rel="preload" as="image" {href} {imagesrcset} {imagesizes} />
</svelte:head>
