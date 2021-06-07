<script>
	import projects from '../data/projectData.json';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<section>
	<div class="container">
		<h1>PROJECTS</h1>
		{#each projects as project}
			<h2>{project.name}</h2>
			<p>{project.description}</p>
			{#each project.images as images}
				<img src={images.src} alt="Empty" />
			{/each}
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		height: 100%;
		display: flex;
		flex: 1;
	}
</style>
