<div>
	<div class="header content">
		<h1 class="h1">Contact Us</h1>
		<p class="body body--vlarge">
			Contact for answers to all of your boosting related questions or to sign up for our services!
		</p>
	</div>
	<div class="separator" />
	<div class="container content">
		<form>
			<label for="name">Name</label>
			<input id="name" type="text" placeholder="Input your ID" />
			<label for="email">Email</label>
			<input id="email" type="email" placeholder="example@email.com" />
			<label for="message">Message</label>
			<textarea id="message" placeholder="Message" />
			<button class="button button--primary">Send message</button>
			<span class={`edge nr2`} />
		</form>
		<div class="information">
			<h4 class="h4">Information</h4>
			<p class="body">
				If you have any questions to contact us. We will reply to your question in the near future
			</p>
			<p class="body">
				Our employees will never contact you through Skype or other communication channels. Only way
				to contact us is through our site. Every other attempt is a scam.
			</p>
			<div class="separator separator--margins" />
			<a class="body" href="mailto: contact@premiumboosting.com">contact@premiumboosting.com</a>
		</div>
	</div>
</div>

<style>
	.header {
		text-align: center;
		border: none;
		padding-bottom: 8rem;
	}
	.header p {
		color: var(--text-secondary);
	}
	form {
		position: relative;
		display: flex;
		flex-direction: column;
		background: rgba(26, 26, 26, 0.5);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		padding: 8rem;
	}
	input,
	textarea {
		margin-bottom: 4rem;
	}
	textarea {
		height: 15rem;
		resize: none;
	}
	button {
		width: fit-content;
	}
	.container {
		display: grid;
		grid-template-columns: 1fr 35rem;
		column-gap: 8rem;
		padding: 15rem 0;
	}
	.information {
		padding-top: 8rem;
	}
	.information p {
		margin-top: 2rem;
		color: var(--text-secondary);
	}
	.information a {
		color: var(--accent-primary);
	}
	/*var(--tablet-lg)*/
	@media only screen and (max-width: 1024px) {
		.container {
			grid-template-columns: 1fr;
		}
		.information {
			text-align: center;
			width: 50%;
			margin: auto;
		}
		.separator {
			border: none;
		}
	}

	/*var(--phone-sm)*/
	@media only screen and (max-width: 576px) {
		form {
			padding: 4rem;
		}
		.information {
			width: 100%;
		}
		button {
			width: 100%;
		}
	}
</style>
