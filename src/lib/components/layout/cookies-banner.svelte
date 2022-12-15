<script>
	let cookiesAccepted = false;
</script>

{#if !cookiesAccepted}
	<div class="cookies">
		<div class="inner content">
			<span class="body">We use cookies to ensure you get the best experience on our website.</span>
			<div class="actions">
				<button class="button button--primary" on:click={() => (cookiesAccepted = true)}
					>Accept</button
				>
				<button class="button button--arrow">
					Learn more
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.cookies {
		position: fixed;
		z-index: 1;
		bottom: 0;
		width: 100%;
		padding: 2rem 0;
		background: var(--background-floating-content);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
	}

	.inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		border: none;
	}

	.actions button {
		padding: 2rem 4rem;
	}

	.actions {
		display: flex;
	}

	/*var(--tablet-lg)*/
	@media only screen and (max-width: 1024px) {
		.inner {
			justify-content: center;
			align-items: center;
			gap: 2rem;
		}
	}
</style>
