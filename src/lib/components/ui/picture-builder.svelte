<script lang="ts">
	import type { Picture } from '@customTypes/picture';

	export let picture: Picture,
		loading: undefined | 'lazy' = undefined;
</script>

<picture>
	{#each picture.sources as source}
		<source srcset={source.srcset} sizes={picture.sizes} type={source.type} />
	{/each}
	<img class={$$props.class} src={picture.fallback} alt={picture.alt} {loading} />
</picture>

<style>
</style>
