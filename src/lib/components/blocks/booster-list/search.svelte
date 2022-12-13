<script>
	import Search from '$lib/svgs/search.svg?component';
</script>

<div class="search">
	<input type="search" placeholder="Name of Boosters" />
	<button class="button button--primary" type="submit"><Search /></button>
</div>

<style>
	.search {
		padding: 4rem 4rem 0 4rem;
		display: flex;
		margin: auto;
	}
	.search input {
        min-width: 10rem;
		flex-grow: 1;
	}
	.search button {
		padding: 1.8rem;
	}

	/*var(--tablet-lg)*/
	@media only screen and (max-width: 1024px) {
		.search {
			margin: 0;
			padding: 0;
		}
	}
	/*var(--phone-sm)*/
	@media only screen and (max-width: 576px) {
		.search {
			width: 100%;
		}
	}
</style>
