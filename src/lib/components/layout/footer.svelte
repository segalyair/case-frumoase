<script lang="ts">
	const currentYear = new Date().getFullYear();
	export let articles: Article[] = [];
</script>

<footer class="footer">
	<div class="content">
		<div class="main-row">
			<span class="description">
				<a href="/" class="logo">Case Frumoase</a>
				<p class="body body--large">
					Suntem o echipă de arhitecți specializați în design neoromânesc și nu numai.
				</p>
				<p class="body body--large">
					Realizăm de peste 14 ani proiecte de case și design interior.
				</p>
			</span>
			<span class="recent-articles">
				<h3 class="h4">Articole recente</h3>
				{#each articles as article}
					<a class="body body--large" href={`/blog/${article.slug}`}>{article.title}</a>
				{/each}
			</span>
			<span class="contact">
				<h3 class="h4">Contact</h3>
				<form>
					<input name="name" type="text" placeholder="Nume" />
					<input name="email" type="email" placeholder="Email" />
					<textarea name="message" placeholder="Mesaj" />
					<label>
						<input name="consent" type="checkbox" checked={true} />
						Prin utilizarea acestui formular sunteți de acord cu stocarea și manipularea datelor dvs.
						pe acest site web.
					</label>
					<button class="button" on:click|preventDefault={() => {}}>Trimite</button>
				</form>
			</span>
		</div>
		<div class="separator" />
		<div class="bottom-row">
			<p class="body">
				{`Copyright © ${currentYear} Case Frumoase - Toate drepturile rezervate`}
			</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		padding: 4rem var(--content-padding) 2rem;
		color: var(--text-secondary);
		background: var(--khaki-web);
	}
	.content {
		max-width: var(--content-max-width);
		margin: auto;
	}
	.main-row {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 2rem;
	}
	.contact,
	.recent-articles,
	.description {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding-top: 3rem;
	}
	.description {
		padding-top: 0;
	}
	.recent-articles {
		gap: 1.5rem;
	}
	.contact form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.contact form label,
	.contact form textarea,
	.contact form button {
		grid-column: 1/3;
	}

	.contact form label {
		display: grid;
		column-gap: 1rem;
		grid-template-columns: 1fr auto;
		align-items: center;
	}

	.contact form button {
		justify-self: center;
	}

	@media screen and (max-width: 1440px) {
		.main-row {
			grid-template-columns: 1fr 1fr;
		}
		.contact {
			grid-column: 1/3;
			justify-self: center;
			max-width: 50rem;
		}
	}

	@media screen and (max-width: 1024px) {
		.main-row {
			max-width: 50rem;
			width: 90vw;
			grid-template-columns: 1fr;
			margin: auto;
		}
		.contact {
			grid-column: 1;
		}
	}

	@media screen and (max-width: 600px) {
		.contact form {
			grid-template-columns: 1fr;
		}

		.contact form label,
		.contact form textarea,
		.contact form button {
			grid-column: 1;
		}

		.bottom-row {
			text-align: center;
		}
	}
</style>
