<script>
	import FacebookRound from '$lib/svgs/facebook-round.svg?component';
	import GoogleRound from '$lib/svgs/google-round.svg?component';
	import DiscordRound from '$lib/svgs/discord-round.svg?component';
</script>

<div class="socialLogins">
	<button type="button" aria-label="facebook login"><FacebookRound /></button>
	<button type="button" aria-label="google login"><GoogleRound /></button>
	<button type="button" aria-label="discord login"><DiscordRound /></button>
</div>

<style>
	.socialLogins {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
	}

	.socialLogins > * {
		padding: 1.5rem 3.5rem;
		background-color: var(--background-dark);
	}

	/*var(--phone-sm)*/
	@media only screen and (max-width: 576px) {
		.socialLogins > * {
			padding: 1.5rem 2rem;
		}
	}
</style>
