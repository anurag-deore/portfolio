<script>
	import sample2 from '$lib/static/sample2.png';
	const desc =
		'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth';
	const projects = [
		{ title: 'GoLocal Job Portal', img: sample2, description: desc },
		{ title: 'Meetify Meeting Transcription', img: sample2, description: desc },
		{ title: 'Meetify Meeting', img: sample2, description: desc },
		{ title: 'Meetifys', img: sample2, description: desc },
		{ title: 'Meetify', img: sample2, description: desc }
	];
	const tagslist = ['Redux', 'Django', 'Nodejs', 'Reactjs', 'React Query'];
	const randomDarkColors = [
		'#ff5e71',
		'#ff847c',
		'#fecea8',
		'#99b898',
		'#81b29a',
		'#f2cc8f',
		'#f3d999',
		'#f4e3b2',
		'#f6eec7',
		'#e8d5b7'
	];
</script>

<div class="container">
	<div class="header">
		<div class="title">Projects</div>
	</div>
	<div class="projects">
		{#each projects as project (project.title)}
			<a href="https://github.com/anurag-deore/Golocal" class="card">
				<img class="card-img" src={project.img} alt="Porject" />
				<div class="card-info">
					<h1 class="card-title">{project.title}</h1>
					<p class="card-desc">{project.description}</p>
					<div class="card-taglist">
						{#each tagslist as tag, index}
							<div
								class="tag"
								style="border-color: {randomDarkColors[
									Math.floor(Math.random() * randomDarkColors.length)
								]}"
							>
								{tag}
							</div>
							{#if !(index >= tagslist.length - 1)}
								<div class="tag-divider">&#x2219;</div>
							{/if}
						{/each}
					</div>
				</div>
			</a>
			<!-- <hr /> -->
		{/each}
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
		position: sticky;
		font-size: 2.5rem;
		padding: 20px;
		top: 0;
		background-color: white;
	}
	.projects {
		display: flex;
		align-items: start;
		flex-direction: column;
		/* justify-content: center; */
		flex-grow: 1;
		gap: 1rem;
	}
	.card {
		text-decoration: none;
		width: 100%;
		/* height: 100%; */
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		gap: 20px;
		padding: 20px;
		border-radius: 8px;
	}
	.card:hover {
		background-color: #f8f5ff;
		cursor: pointer;
	}
	.card .card-img {
		border: 3px solid #d4d4d4;
		box-shadow: 0 5px 15px 0 #f2eeff;
		background-color: white;
		border-radius: 8px;
		width: 160px;
		height: 80px;
		object-fit: cover;
	}
	.card .card-info {
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		gap: 8px;
	}
	.card .card-title {
		font-weight: 500;
		font-size: 1.2rem;
	}
	.card .card-desc {
		color: #453b58;
		font-size: 1rem;
	}
	.card .card-taglist {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 5px;
		color: #7a7a7a;
	}
	.card .tag {
		font-size: smaller;
	}
</style>
