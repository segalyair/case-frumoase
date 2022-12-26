<script>
	let cookiesAccepted = false;
</script>

{#if !cookiesAccepted}
	<div class="cookies">
		<div class="inner content">
			<span class="body body--large">Acest site web folosește cookie-uri pentru a îmbunătăți experiența utilizatorului. </span>
			<div class="actions">
				<button class="button button--alt" on:click={() => (cookiesAccepted = true)}
					>Accept cookie-uri</button
				>
				<button class="button button--alt">
					Mai multe informații
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.cookies {
		position: fixed;
		z-index: 2;
		bottom: 0;
		width: 100vw;
		padding: 2rem var(--content-padding);
		background: #8d5530;
		color: white;
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
