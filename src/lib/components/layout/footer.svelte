<script lang="ts">
	import Logo from '$lib/svgs/logo.svg?component';
	const currentYear = new Date().getFullYear();
	const generalLinks: Array<{ label: string; url: string }> = [
		{
			label: 'Blog',
			url: '/blog'
		},
		{
			label: 'Terms Of Services',
			url: '/'
		},
		{
			label: 'Payment Method',
			url: '/'
		},
		{
			label: 'Privacy Policy',
			url: '/'
		},
		{
			label: 'Contact Us',
			url: '/contact-us'
		}
	];

	const socialLinks: any[] = [
		{
			label: 'youtube',
			url: 'https://youtube.com'
		},
		{
			label: 'twitter',
			url: 'https://twitter.com'
		},
		{
			label: 'facebook',
			url: 'https://facebook.com'
		}
	];
</script>

<footer class="footer">
	<div class="footerContent">
		<nav class="footerLinks">
			<a href="/" aria-label="To home page"><Logo /></a>
			<span class="generalLinks">
				{#each generalLinks as { url, label } (label)}
					<a href={url} class="link body">{label}</a>
				{/each}
			</span>
			<span class="socials">
				{#each socialLinks as { url, label }, i (i)}
					<a href={url} class="social" rel="noopener noreferrer" target="_blank" aria-label={label}>
						<div class={`i-${label}`} />
					</a>
				{/each}
			</span>
		</nav>
		<p class="body body--small">
			PremiumBoosting.com isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of
			Riot Games or anyone officially involved in producing or managing League of Legends. League of
			Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of
			Legends © Riot Games, Inc.
		</p>
		<p class="body">{`© ${currentYear} PremiumBoosting — All Rights Reserved`}</p>
	</div>
</footer>

<style>
	.footer {
		padding: 8rem 0 6rem;
		color: var(--text-secondary);
		background: var(--accent-dark-secondary);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
	}

	.footerContent {
		display: grid;
		gap: 5rem;
		grid-template-rows: auto auto auto;
		text-align: center;
		margin: 0 var(--content-margin);
	}

	.footerContent p {
		font-family: 'Montserrat', 'sans-serif';
	}

	.footerLinks {
		display: grid;
		grid-template-columns: auto 1fr auto;
		place-items: center;
		width: 100%;
	}

	.generalLinks {
		display: flex;
		gap: 4rem;
	}

	/* var(--phone) */
	@media only screen and (max-width: 768px) {
		.generalLinks {
			flex-direction: column;
			gap: 3rem;
			align-items: center;
		}
	}

	.socials {
		display: flex;
		gap: 2rem;
	}

	.social > * {
		color: var(--text-primary);
		transition: color 0.3s ease;
	}

	.social:hover > *,
	.social:focus > * {
		color: var(--accent-primary);
	}

	/*var(--laptop)*/
	@media only screen and (max-width: 1440px) {
		.footerLinks {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto auto;
			row-gap: 4rem;
		}
	}

	/* var(--tablet-lg) */
	@media only screen and (max-width: 1024px) {
		.footer {
			width: 100%;
			padding-left: 4rem;
			padding-right: 4rem;
		}
	}
</style>
