<script>
	import Header from '$lib/components/layout/header.svelte';
</script>

<Header title={'Te ajutăm cu tot ce ai nevoie'}></Header>
<main>
	<iframe
		title="Locația mea"
		frameborder="0"
		scrolling="no"
		src="https://www.openstreetmap.org/export/embed.html?bbox=26.07213914394379%2C44.429183045330674%2C26.07567965984345%2C44.43100648622016&amp;layer=mapnik&amp;marker=44.43009477288641%2C26.073909401893616"
	/>
	<div class="contact">
		<span class="details">
			<h3 class="h3">Date contact</h3>
			<p class="body--large">T: 0742 081 533</p>
			<p class="body--large">E: adrianpaun@case-frumoase.ro</p>
			<br />
			<p class="body--large">Str. dr Mihail Mirinescu, nr 9, București</p>
			<span />
		</span>
		<form>
			<h3 class="h3">Contactează-ne</h3>
			<label class="body--large" for="nume"> Nume</label>
			<input id="nume" type="text" />
			<label class="body--large" for="email">Email</label>
			<input id="email" type="email" />
			<label class="body--large" for="subiect">Subiect</label>
			<input id="subiect" type="text" />
			<label class="body--large" for="subiect">Mesaj</label>
			<textarea id="Mesaj" />
			<label for="consent" class="body--large">
				<input id="consent" type="checkbox" />
				Prin utilizarea acestui formular sunteți de acord cu stocarea și manipularea datelor dvs. pe
				acest site web.
			</label>
			<button class="button button--dark"> Trimite </button>
		</form>
	</div>
</main>

<style>
	main {
		margin: 4rem var(--content-margins) 4rem ;
		display: flex;
		flex-direction: column;
	}

	main iframe {
		width: 100%;
		height: 50rem;
	}
	.contact {
		margin: 4rem 0;
		display: flex;
		justify-content: space-between;
	}

	.contact .details {
		display: inline-flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 1rem;
	}
	form {
		min-width: 40rem;
		display: inline-flex;
		flex-direction: column;
	}
	form > *:not(label) {
		margin-bottom: 2rem;
	}

	form label[for='consent'] {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	@media (max-width: 500px) {
		.contact {
			flex-direction: column;
		}

		form {
			min-width: unset;
		}
	}
</style>
