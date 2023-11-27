<script lang="ts">
	import { onMount } from 'svelte';
	export let title = '',
		description = '';

	let url = ``;
	onMount(() => (url = window.location.origin));
</script>

<title>Proiecte Arhitectură Case Frumoase București Stil Neoromânesc</title>
<meta name="description" content={description} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content="//www.case-frumoase.ro/wp-content/uploads/2019/03/AAA.jpg" />
<meta property="og:site_name" content="Case-Frumoase" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="ro_RO" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={url} />
