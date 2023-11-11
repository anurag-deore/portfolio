<script lang="ts">
	import meeeon25 from '$lib/static/meon251122.jpg';
	import mg from '$lib/static/mg.png';
</script>

<div class="container">
	<div class="header">
		<div class="title">About</div>
	</div>
	<div class="about">
		<p>
			Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first
			into the rabbit hole of coding and web development. Fast-forward to today, and I've had the
			privilege of building software for an advertising agency, a start-up, a student-led design
			studio, and a huge corporation.
		</p>
		<p>
			My main focus these days is building products and leading projects for our clients at
			Upstatement. In my free time I've also released an online video course that covers everything
			you need to know to build a web app with the Spotify API.
		</p>
		<p>
			When I'm not at the computer, I'm usually rock climbing, hanging out with my wife and two
			cats, or running around Hyrule searching for Koroks.
		</p>
	</div>
	<div class="images">
		<img
			src={'https://imageio.forbes.com/specials-images/imageserve/605e22fe6df966b3fcbd3e15/0x0.jpg'}
			alt="wow"
		/>
		<img
			src={'https://imageio.forbes.com/specials-images/imageserve/605e22fe6df966b3fcbd3e15/0x0.jpg'}
			alt="wow"
		/>
		<img src={mg} alt="wow" />
	</div>
</div>

<style>
	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		color: #1f005e;
	}
	.header {
		font-size: 2.5rem;
		padding: 2rem 0px;
	}
	.about {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.about p {
		font-size: 1.25rem;
	}
	.images {
		margin-top: 2.5rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.images img {
		/* margin-left: -100px; */
		/* width: 200px; */
		height: 200px;
		/* border-radius: 50px; */
		/* border: 1px solid #f0e8ff; */
		/*
		object-fit: cover;
		object-position: bottom right;
		padding: 8px;
		background: #fff;
		z-index: 2; */
		transition: all 0.3s ease-in-out;
	}
	/* rotate even children */
	/* .images img:nth-child(even) {
        transform: rotate(15deg);
    }
    .images img:nth-child(odd) {
        transform: rotate(-15deg);
    } */
</style>
