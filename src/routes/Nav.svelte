<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';
	import { page } from '$app/stores';

	let show = false;
	const navLinks: { text: string; path: string; delay: number; theme: string }[] = [
		{ text: 'Home', path: '/', delay: 500, theme: '#b0e1ff' },
		{ text: 'About', path: '/about/', delay: 400, theme: '#bdfdff' },
		{ text: 'Work', path: '/work/', delay: 300, theme: '#e0fffa' },
		{ text: 'Projects', path: '/projects/', delay: 200, theme: '#ffd8f3' },
		{ text: 'Lets Connect', path: '/contact/', delay: 0, theme: '#e5c6ff' }
	];
	onMount(() => {
		show = true;
	});
</script>

<nav>
	<div class="navBG" />
	{#each navLinks as link (link.path)}
		{#if show}
			<hr class="hrrd" in:fly={{ y: '-200px', delay: link.delay, easing: quadIn }} />
			<a
				in:fly={{ y: '-200%', delay: link.delay, easing: quadIn }}
				href={link.path}
				class:active={$page.url.pathname === link.path}
				class="navLink"
			>
				<span class="text">
					{link.text}
				</span>
			</a>
			<hr class="hrrd" in:fly={{ y: '-200px', delay: link.delay - 100, easing: quadIn }} />
		{/if}
	{/each}
</nav>

<style>
	nav {
		width: 40vw;
		flex-grow: 0;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: stretch;
		overflow: hidden;
		position: relative;
	}
	.navBG {
		position: absolute;
		top: 0;
		left: 0px;
		width: 100%;
		height: 100%;
		background-image: url('https://img.freepik.com/vektoren-kostenlos/unscharfer-rosa-blauer-abstrakter-steigungshintergrundvektor_53876-174836.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: repeat-x;
		opacity: 0.5;
		z-index: 1;
		/* animation: infinite 20s linear slowRotate; */
	}
	/* @keyframes slowRotate {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-200vh); 
		}
	} */
	.hrrd {
		border: none;
		height: 5px;
		z-index: 2;
		width: 100%;
		background: #fff;
	}
	nav hr:first-of-type,
	nav hr:last-of-type {
		height: 10px;
	}
	.navLink {
		text-decoration: none;
		font: inherit;
		flex: 2;
		flex-shrink: 1;
		flex-grow: 1;
		font-weight: 600;
		font-size: 2rem;
		cursor: pointer;
		width: 100%;
		color: #1f005e;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
		display: grid;
		place-items: center;
		position: relative;
		z-index: 4;
	}
	.navLink:hover {
		background: #22222210;
	}
	/* .navLink::before {
		content: ' ';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: -1;
		background-image: url('$lib/static/fff.png');
		background-repeat: no-repeat;
		background-position: 50% 0;
		background-size: cover;
		transition: all 0.3s ease-in-out;
	} 
	.navLink:hover::before {
		opacity: 0.3;
	}*/
	.navLink.active::before {
		opacity: 0.15;
	}
	.navLink:hover,
	.navLink.active {
		flex: 2;
	}
</style>
