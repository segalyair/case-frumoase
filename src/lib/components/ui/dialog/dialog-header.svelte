<script lang="ts">
	import Close from '$lib/svgs/close.svg?component';
	export let onClick: () => void,
		modal: HTMLDialogElement,
		title: string,
		question: string,
		buttonText: string;
</script>

<button type="button" class="close" alt="Close" on:click={() => modal.close()}><Close /></button>
<div class="dialogHeader">
	<p class="h4">{title}</p>
	<p class="body">
		{question} <button type="button" class="button--text" on:click={onClick}>{buttonText}</button>
	</p>
</div>

<style>
	.close {
		width: 5rem;
		height: 5rem;
		position: absolute;
		right: 0;
		top: 0;
		cursor: pointer;
		background-color: var(--background-dark);
	}
	.dialogHeader > *:first-child {
		margin-bottom: 1rem;
	}
</style>
