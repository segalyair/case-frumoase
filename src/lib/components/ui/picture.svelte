<script lang="ts">
	import type { Picture } from 'src/types/picture';

	export let sizes: string;
	export let picture: Picture;
	export let loading: undefined | 'lazy' = undefined;
</script>

<picture>
	{#each picture.sources as source}
		<source srcset={source.srcset} {sizes} type={source.type} />
	{/each}
	<img class={$$props.class} src={picture.fallback} alt={picture.alt} {loading} />
</picture>

<style>
</style>
