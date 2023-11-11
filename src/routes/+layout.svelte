<script lang="ts">
	import { scale } from 'svelte/transition';
	import Nav from './Nav.svelte';

	let cursorX = 0;
	let cursorY = 0;
	let isHoveringOverLink = false;
	// const navLinks: { text: string; path: string; delay: number; theme: string }[] = [
	// 	{ text: 'Home', path: '/', delay: 500, theme: '#b0e1ff' },
	// 	{ text: 'About', path: '/about/', delay: 400, theme: '#bdfdff' },
	// 	{ text: 'Work', path: '/work/', delay: 300, theme: '#e0fffa' },
	// 	{ text: 'Projects', path: '/projects/', delay: 200, theme: '#ffd8f3' },
	// 	{ text: 'Lets Connect', path: '/contact/', delay: 0, theme: '#e5c6ff' }
	// ];
	// onMount(() => {
	// 	window.addEventListener('mousemove', (event) => {
	// 		cursorX = event.clientX;
	// 		cursorY = event.clientY;
	// 	});
	// 	setTimeout(() => {
	// 		const links = document.body.querySelectorAll('a');
	// 		links.forEach((link) => {
	// 			link.addEventListener('mouseenter', () => {
	// 				isHoveringOverLink = true;
	// 			});

	// 			link.addEventListener('mouseleave', () => {
	// 				isHoveringOverLink = false;
	// 			});
	// 		});
	// 	}, 1000);
	// });
	export let data;
</script>

<main>
	<div class="sections">
		{#key data.currentPath}
			<section
				in:scale={{ start: 2, duration: 200, delay: 300 }}
				out:scale={{ start: 0.5, duration: 200, delay: 0 }}
			>
				<!-- in:fly={{ x: -100, duration: 250, delay: 300 }}
				out:fly={{ x: 100, duration: 300, delay: 0 }} -->
				<slot />
			</section>
		{/key}
	</div>
	<div
		class="cursor"
		class:active={isHoveringOverLink}
		style="left: {cursorX}px; top: {cursorY}px;"
	/>
	<Nav />
</main>

<style>
	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	:global(body) {
		height: 100vh;
		overflow: hidden;
		font-family: 'Satoshi Variable';
	}
	.cursor {
		position: absolute;
		width: 70px;
		height: 70px;
		border: 1px solid #db5461;
		/* background: #fff;
		mix-blend-mode: difference; */
		border-radius: 50%;
		pointer-events: none;
		transition: transform 0.2s ease;
		transform: translate(-50%, -50%);
	}

	@keyframes spinBorder {
		0% {
			transform: translate(-50%, -50%) rotate(0deg) scale(1.5);
		}
		100% {
			transform: translate(-50%, -50%) rotate(360deg) scale(1.5);
		}
	}

	.cursor:hover,
	.cursor.active {
		border: 1px dotted #ffc7cc;
		animation: spinBorder 5s linear infinite;
		/* transform: translate(-50%, -50%) scale(1.5);  */
	}
	main {
		display: flex;
		justify-content: center;
		align-items: stretch;
		min-height: 100vh;
		max-height: 100vh;
		width: 100vw;
		overflow: hidden;
		/* background: #fee2e3; */
		background: #fff;
		color: #2c363f;
		color: #050038;
	}
	.sections {
		display: flex;
		overflow: hidden;
	}
	section {
		overflow: scroll;
		display: flex;
		padding: 0rem 4rem;
		font-size: 1.25rem;
		flex-direction: column;
		justify-content: center;
		row-gap: 3rem;
		flex-grow: 1;
		min-height: 100vh;
		max-width: 60vw;
		min-width: 60vw;
	}
</style>
