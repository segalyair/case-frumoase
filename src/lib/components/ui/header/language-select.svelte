<script lang="ts">
	import ChevronDown from '$lib/svgs/chevron-down.svg?component';
	export let color: string = 'white';
	export let alignDropdown: string = '-13rem';

	const languages: Language[] = [
		{ locale: 'United Kingdom', value: 'English', code: 'en' },
		{ locale: 'France', value: 'Français', code: 'fr' },
		{ locale: 'Spain', value: 'Español', code: 'es' },
		{ locale: 'Germany', value: 'Deutsch', code: 'de' },
		{ locale: 'Russian', value: 'Русский язык', code: 'ru' }
	];

	let selectedLanguage: Language = languages[0];
	let open = false;
</script>

<details bind:open>
	<summary class="body">{selectedLanguage.code} <ChevronDown {color} /></summary>
	<div class="options" style={`left: ${alignDropdown};`}>
		{#each languages as { locale, value, code } (code)}
			<a href="/" class="option" on:click={() => (open = false)}>
				<p class="body">{locale}</p>
				<p class="body body--small">{value}</p>
			</a>
		{/each}
	</div>
</details>

<style>
	details {
		position: relative;
	}
	details summary {
		display: flex;
		place-items: center;
		gap: 1rem;
		text-transform: uppercase;
	}
	.options {
		height: 30rem;
		overflow-y: auto;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		position: absolute;
		background-color: var(--background-floating-content);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		padding: 2rem;
		margin-top: 1rem;
	}
	.option {
		text-align: left;
		width: 13rem;
	}
	.option > p:last-child {
		color: var(--text-secondary);
	}
</style>
