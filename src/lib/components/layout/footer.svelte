<script lang="ts">
	import logo from '$lib/images/logo.png';
	import { NAV_LINKS } from '$lib/scripts/constants';
	const currentYear = new Date().getFullYear();
	export let articles: Article[] = [];
</script>

<footer class="footer">
	<img width="139" src={logo} alt="Logo case frumoase" />
	<nav>
		{#each NAV_LINKS as link, i}
			<a class="link" href={link.href}>
				{link.label}
			</a>
		{/each}
	</nav>
	<p class="body--large">Str. dr Mihail Mirinescu, nr 9, București</p>
	<p class="body">
		{`Copyright © ${currentYear} Case Frumoase - Toate drepturile rezervate`}
	</p>
</footer>

<style>
	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4rem;
		padding: 8rem;
		padding-bottom: 4rem;
		background: var(--text-dark-color);
		color: var(--text-light-color);
	}
	nav {
		display: flex;
		align-items: center;
		gap: 3rem;
	}
</style>
