<script lang="ts">
	import PictureBuilder from '../ui/picture-builder.svelte';

	export let members: any[] = [];

	function toggleMember(memberId: number) {
		const member = members.find((m) => m.id === memberId);
		member.toggled = !member.toggled;
		members = [...members];
	}
</script>

<article class="pageSection ourTeam">
	<h2 class="h2">Echipa noastră</h2>
	<div class="content">
		{#each members as member}
			<button type="button" class="member" on:click={() => toggleMember(member.id)}>
				<PictureBuilder picture={member.picture} alt="Team member" loading="lazy" />
				<div class="caption" class:toggled={member.toggled}>
					<div class="name">
						<p class="body--large">{member.name}</p>
						<p class="body--large">{member.role}</p>
					</div>
					<p class="description body--large" class:toggled={member.toggled}>{member.description}</p>
					<p class="button button--alt button--small">
						{member.toggled ? 'Ascunde' : 'Află mai multe'}
					</p>
				</div>
			</button>
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
	.member {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		border: 2px solid transparent;
		transition: border 200ms;
	}
	.member:hover {
		border-color: var(--primary-color);
	}
	.caption {
		width: 100%;
		height: 14.5rem;
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		gap: 0.25rem;
		bottom: 0;
		left: 0;
		padding: 1rem;
		background: var(--background-semi-transparent);
		color: var(--text-light-color);
		transition: height 0.3s;
	}
	.description {
		height: 0;
		overflow: hidden;
		transition: height 0.1s;
	}
	.description.toggled {
		margin-top: 1rem;
		height: 100%;
	}
	.caption.toggled {
		height: 100%;
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

	@media (max-width: 1024px) {
		.content {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			gap: 2rem;
			padding: 0 2rem;
		}
	}
</style>
