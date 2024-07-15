<script>
	import { onMount } from 'svelte';

	let cookiesAccepted = true;
	const LS_KEY = 'cf-cookies-accepted';

	function setCookiesAccepted() {
		try {
			localStorage?.setItem(LS_KEY, 'true');
		} catch (err) {
			console.error(err);
		} finally {
			cookiesAccepted = true;
		}
	}
	onMount(() => {
		try {
			cookiesAccepted = localStorage?.getItem(LS_KEY) === 'true';
		} catch (err) {
			cookiesAccepted = false;
			console.error(err);
		}
	});
</script>

{#if !cookiesAccepted}
	<div class="cookies">
		<div class="inner content">
			<span class="body body--vlarge">
				Acest site web folosește cookie-uri pentru a îmbunătăți experiența utilizatorului.
			</span>
			<div class="actions">
				<button class="button button--alt" on:click={() => setCookiesAccepted()}>
					Accept cookie-uri
				</button>
				<button class="button button--alt"> Mai multe informații </button>
			</div>
		</div>
	</div>
{/if}

<style>
	.cookies {
		box-shadow: 0px -4px 4px rgb(0 0 0 / 25%);
		position: fixed;
		z-index: 2;
		bottom: 0;
		width: 100vw;
		padding: 2rem var(--content-margins);
		background: var(--text-dark-color);
		color: var(--text-light-color);
	}

	.inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		border: none;
	}

	.actions {
		display: flex;
		gap: 2rem;
	}

	/*var(--tablet-lg)*/
	@media only screen and (max-width: 1500px) {
		.inner {
			justify-content: center;
			align-items: center;
			text-align: center;
			gap: 2rem;
		}
	}
</style>
