<script lang="ts">
	import logo from '$lib/images/logo.png';
	import { NAV_LINKS } from '$lib/scripts/constants';
	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<a href="/" aria-label="Spre pagina principala">
		<img width="139" src={logo} alt="Logo case frumoase" />
	</a>
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
	.footer p {
		text-align: center;
	}
	nav {
		display: flex;
		align-items: center;
		gap: 3rem;
	}
</style>
