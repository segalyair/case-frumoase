<script lang="ts">
	export let members: any[] = [];
</script>

<article class="pageSection ourTeam">
	<h2 class="h2">Echipa noastră</h2>
	<div class="content">
		{#each members as member}
			<span class="member">
				<img src={member.image.url} alt="Team member" />
				<p class="body--large">{member.name}</p>
				<p class="body--large">{member.role}</p>
			</span>
		{/each}
	</div>
</article>

<style>
	.ourTeam {
		background: var(--background-gray);
		text-align: center;
	}
	.ourTeam h2 {
		padding-bottom: 6rem;
		grid-column: 1/4;
	}
    .member{
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
	.content {
		display: grid;
		grid-template-columns: auto auto auto;
		justify-items: center;
		align-items: center;
		gap: 4rem;
		width: fit-content;
		margin: auto;
	}
</style>
