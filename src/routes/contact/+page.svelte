<script>
	let name = '';
	let email = '';
	let message = '';

	async function handleSubmit() {
		const requestData = {
			field1: name,
			field2: email
		}; // Create a JSON object

		try {
			const response = await fetch(
				'https://script.google.com/macros/s/AKfycbwXdFP6e1NjSU8DTGepA58y1lkpwHQ2meNTA6IcxNCZ9ujt1OM6aeOGCbcN-RjYP5AU/exec',
				{
					redirect: 'follow',
					method: 'POST',
					body: JSON.stringify(requestData),
					headers: {
						'Content-Type': 'text/plain;charset=utf-8'
					}
				}
			);

			if (response.ok) {
				// Handle a successful response, e.g., show a success message
				alert('Data sent successfully.');
			} else {
				// Handle an error response, e.g., show an error message
				console.error('Error sending data:', response.statusText);
			}
		} catch (error) {
			// Handle network errors
			console.error('Network error:', error);
		}
	}
</script>

<div class="container">
	<div>
		Feel completely free to drop me a message if you've got questions, want to explore exciting
		opportunities, or just fancy a friendly chat. I'm all ears and up for making new friends!
	</div>
	<form on:submit|preventDefault={handleSubmit} class="contactForm" id="contactForm">
		<input
			type="text"
			bind:value={name}
			id="name"
			placeholder="Enter your name"
			name="name"
			required
		/>
		<input
			type="email"
			bind:value={email}
			placeholder="Enter your email"
			id="email"
			name="email"
			required
		/>
		<textarea
			id="message"
			bind:value={message}
			rows="10"
			placeholder="Enter your message"
			name="message"
			required
		/>
		<button class="submit" type="submit">Send</button>
	</form>
</div>

<style>
	.container {
		height: 100%;
		padding: 2rem 0px;
		color: #1f005e;
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
	.contactForm {
		display: flex;
		align-items: start;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		gap: 20px;
	}
	.contactForm input,
	.contactForm textarea {
		padding: 10px;
		width: 100%;
		border-radius: 5px;
		border: 1px solid #d4d4d4;
		outline: none;
		font-size: 1rem;
		font-family: inherit;
		font-weight: 400;
	}
	.contactForm .submit {
		padding: 10px;
		width: 100%;
		border-radius: 5px;
		outline: none;
		font-size: 1rem;
		font-family: inherit;
		font-weight: 400;
		background: none;
		border: 1px solid #6237ff;
		color: #6237ff;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}
	.contactForm .submit:active {
		transform: scale(0.9);
	}
</style>
