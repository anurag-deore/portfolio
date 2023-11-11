<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { cubicInOut } from 'svelte/easing';
	import Subject from '$lib/static/loll.jpeg';
	import mee from '$lib/static/loll.gif';
	// hide by default
	let visible = false;
	function spin(node: HTMLElement, { delay = 0 }: { delay: number }) {
		return {
			duration: 1000,
			delay,
			tick: (t: number) => {
				const eased = cubicInOut(t);
				const translateZValue = 100 - eased * 100;
				const rotateXValue = -90 + eased * 90;
				node.style.transform = `translateZ(${translateZValue}px) translateY(-${translateZValue}px) rotateX(${rotateXValue}deg)`;
			}
		};
	}
	afterNavigate(({ from }) => {
		visible = from === null ? true : false;
	});
	let isHovered = Subject;
	let isToastVisible = false;
	let isAnimRunning = false;
	function handleMouseEnter() {
		if (isAnimRunning) return;
		isHovered = mee;
		isAnimRunning = true;
		showToast();
		setTimeout(() => {
			isHovered = Subject;
			isAnimRunning = false;
		}, 1000);
	}

	function showToast() {
		isToastVisible = true;
		setTimeout(hideToast, 1000);
	}

	function hideToast() {
		isToastVisible = false;
	}
</script>

<!-- <div class="favicon">
	<img class="" alt="The project logo" src="/Subject.png" />
</div> -->

<div class="info-section">
	<div class="header">
		<div class="helloWorld">Hello World !</div>
		<button class="static" on:click={handleMouseEnter}>
			<img src={isHovered} alt="mee" />
			<div class={`toast ${isAnimRunning ? 'active' : ''}`}>
				<p>Hey There</p>
			</div>
		</button>
	</div>
	<div class="jumbo-main">
		<h1 class="headline">
			{#if visible}
				<span transition:spin={{ delay: 0 }} class="perspective-text"> I'm </span>
				<span transition:spin={{ delay: 200 }} class="perspective-text">Anurag</span>
				<span transition:spin={{ delay: 400 }} class="perspective-text">Deore</span>
			{:else}
				<span>I'm</span>
				<span>Anurag</span>
				<span>Deore</span>
			{/if}
		</h1>
		<div class="subheadline">
			I do<span style="color: #ee2e54;">&nbsp;Full-Stack Magic&nbsp;</span>with every Project.
		</div>
		<div class="subheadline">
			I'm currently at <a href="https://www.clootrack.com">Clootrack</a>, where I code
			user-friendly, accessible & high-performance web experiences.
		</div>
	</div>
	<div class="socials">
		<a href="/" class="social-link" title="Medium">
			<svg fill="currentColor" viewBox="0 0 16 16">
				<defs>
					<linearGradient id="gradient" x1="0%" y1="50%" x2="50%" y2="50%">
						<stop offset="0%" style="stop-color: #db5461;" />
						<stop offset="100%" style="stop-color: #6237ff;" />
					</linearGradient>
				</defs>
				<path
					d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"
				/>
			</svg>
		</a>
		<a href="/" class="social-link" title="Linkedin">
			<svg fill="currentColor" viewBox="0 0 16 16">
				<path
					d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
				/>
			</svg>
		</a>
		<a href="/" class="social-link" title="Github">
			<svg fill="currentColor" viewBox="0 0 16 16">
				<path
					d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
				/>
			</svg>
		</a>
		<a href="/" class="social-link" title="Dribbble">
			<svg fill="currentColor" viewBox="0 0 16 16">
				<path
					fill-rule="evenodd"
					d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"
				/>
			</svg>
		</a>
	</div>
</div>

<style>
	.toast {
		position: absolute;
		top: 0px; /* Initial position above the viewport */
		left: -10px;
		width: max-content;
		opacity: 0;
		background-color: #333;
		color: #fff;
		padding: 10px;
		border-radius: 50px;
		transition: top 2s ease-out; /* Slide animation */
	}

	.toast.active {
		transition: all 1s ease-out;
		opacity: 0.7;
		top: 70px; /* Slide down to this position */
	}
	.info-section {
		height: 100%;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		gap: 2rem;
		color: #1f005e;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 2rem 0px;
	}
	.helloWorld {
		font-size: 40px;
		font-weight: 500;
	}
	.jumbo-main {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1.5rem;
		align-items: flex-start;
	}
	.static {
		position: relative;
		cursor: pointer;
		background: white;
		display: grid;
		place-items: center;
		height: 60px;
		width: 60px;
		border-radius: 50%;
		border: 1px solid #ddd4ff;
		transition: all 0.2s ease-in-out;
		box-shadow: 0 5px 15px 0 #f2eeff;
	}
	.static:active {
		transform: scale(0.9);
	}
	.static img {
		object-fit: cover;
		border-radius: 50%;
		height: 100%;
		width: 100%;
	}
	.socials {
		/* margin-top: 2rem; */
		padding: 2rem 0px;
		justify-self: flex-end;
		display: flex;
		align-items: center;
		gap: 0rem;
	}
	.social-link {
		display: grid;
		place-items: center;
		height: 50px;
		width: 50px;
		transition: all 0.2s ease-in-out;
		/* background: mintcream; */
		/* color: #2c363f; */
		color: #1f005e;
		border-radius: 8px;
	}
	.social-link:hover {
		background-color: #ffffff80;
		border-radius: 50%;
	}
	.social-link:hover svg {
		fill: url(#gradient);
	}
	.social-link svg {
		height: 1.5rem;
		width: 1.5rem;
	}
	.headline {
		font-size: 5rem;
		font-weight: 700;
		display: flex;
		column-gap: 1rem;
		/* color: #ee2e54; */
	}
	.subheadline {
		font-size: 1.5rem;
		font-weight: 500;
	}
	.subheadline a {
		color: #6237ff;
		border-bottom: 2px dotted #6237ff;
		text-decoration: none !important;
	}
	.perspective-text {
		transform-origin: center bottom;
		transform-style: preserve-3d;
		transform: perspective(1500px);
	}
</style>
