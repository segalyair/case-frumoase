<script>
	import Polygon from '$lib/svgs/polygon.svg?component';
	const totalBoosters = 310;
</script>

<span class="totalBoosters">
	<Polygon style="color: #00BE85" />
	<span class="body">{`${totalBoosters} Boosters`}</span>
</span>

<style>
	.totalBoosters {
		display: flex;
		place-items: center;
		gap: 1rem;
	}
</style>
