<div class="container">
	<div class="header">
		<div class="title">Experience</div>
	</div>
	<div class="experiences">
		<a href="https://ltimindtree.com" class="experience">
			<div class="year">
				<div class="start">July 2023</div>
				<div class="divider" />
				<div class="end">Dec 2023</div>
			</div>
			<div class="work">
				<div class="position">Full Stack Developer</div>
				<div class="company">Softway Solutions Pvt. Ltd.</div>
				<div class="work">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quos asperiores totam
					iure velit! Quia in expedita, eveniet laboriosam odio dolores aliquid laborum obcaecati
					quaerat sit! Neque odit tempora optio?
				</div>
			</div>
		</a>
		<a href="https://ltimindtree.com" class="experience">
			<div class="year">
				<div class="start">July 2023</div>
				<div class="divider" />
				<div class="end">Dec 2023</div>
			</div>
			<div class="work">
				<div class="position">Full Stack Developer</div>
				<div class="company">Softway Solutions Pvt. Ltd.</div>
				<div class="work">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quos asperiores totam
					iure velit! Quia in expedita, eveniet laboriosam odio dolores aliquid laborum obcaecati
					quaerat sit! Neque odit tempora optio?
				</div>
			</div>
		</a>
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
	.experiences {
		display: flex;
		flex-direction: column;
		gap: 50px;
	}
	.experience {
		text-decoration: none;
		color: #1f005e;
		display: flex;
		align-items: stretch;
		gap: 40px;
		width: 100%;
	}
	.experience .year {
		min-height: 100%;
		flex: 0.2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #6237ff;
		gap: 10px;
		padding: 5px 0px;
		font-size: 1rem;
		min-width: fit-content;
	}
	.experience .year .divider {
		border: 1px dashed #6237ff;
		height: 100%;
		width: 0px;
		flex-grow: 1;
	}
	.experience .work {
		flex-shrink: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 5px;
		flex: 0.8;
	}
	.experience .work .position {
		font-weight: 500;
	}
	.experience .work .company {
		font-weight: 400;
		font-size: 1.1rem;
		font-style: italic;
		color: #999999;
	}
</style>
