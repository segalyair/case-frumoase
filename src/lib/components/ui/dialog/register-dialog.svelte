<script lang="ts">
	import DialogHeader from './dialog-header.svelte';
	import SocialLogins from './social-logins.svelte';

	export let modal: HTMLDialogElement;
	export let loginModal: HTMLDialogElement;
</script>

<dialog class="registerDialog" bind:this={modal}>
	<DialogHeader
		{modal}
		title="Create an account"
		question="Already have an account?"
		buttonText="Sign in"
		onClick={() => {
			loginModal.showModal();
			modal.close();
		}}
	/>
	<form method="dialog">
		<label for="email" class="body">Email</label>
		<input id="email" type="email" placeholder="example@email.com" />
		<button type="submit" class="button button--primary">Sign in</button>
	</form>
	<SocialLogins />
	{#each [...Array(2)] as _, j (j)}
		<span class={`edge edge--active edge--simple nr${j * 3}`} />
	{/each}
</dialog>

<style>
	/* login dialog */
	.registerDialog[open] {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}

	.registerDialog form {
		display: flex;
		flex-direction: column;
		padding: 4rem;
		border: 1px solid var(--background-dark);
		border-width: 1px 0;
	}

	.registerDialog form input {
		margin-bottom: 2rem;
	}

	.registerDialog form > *:last-child {
		margin-top: 4rem;
	}
</style>
