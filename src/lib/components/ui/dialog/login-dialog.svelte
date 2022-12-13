<script lang="ts">
	import DialogHeader from './dialog-header.svelte';
	import RegisterDialog from './register-dialog.svelte';
	import SocialLogins from './social-logins.svelte';

	export let modal: HTMLDialogElement;
	let registerModal: HTMLDialogElement;
</script>

<dialog class="loginDialog" bind:this={modal}>
	<DialogHeader
		{modal}
		title="Sign in"
		question="New user?"
		buttonText="Create an account"
		onClick={() => {
			registerModal.showModal();
			modal.close();
		}}
	/>
	<form method="dialog">
		<label for="username">Email or Username</label>
		<input id="username" type="text" placeholder="example" />
		<label for="password">Password</label>
		<input id="password" type="password" placeholder="example" />
		<button type="button" class="button--text">Forgot password?</button>
		<button type="submit" class="button button--primary">Sign in</button>
	</form>
	<SocialLogins />
	{#each [...Array(2)] as _, j (j)}
		<span class={`edge edge--active edge--simple nr${j * 3}`} />
	{/each}
</dialog>
<RegisterDialog bind:modal={registerModal} loginModal={modal} />

<style>
	/* login dialog */
	.loginDialog[open] {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}

	.loginDialog form {
		display: flex;
		flex-direction: column;
		padding: 4rem;
		border: 1px solid var(--background-dark);
		border-width: 1px 0;
	}

	.loginDialog form input {
		margin-bottom: 2rem;
	}

	.loginDialog form > *:last-child {
		margin-top: 4rem;
	}
</style>
