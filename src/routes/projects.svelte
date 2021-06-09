<script>
	import projects from '../data/projectData.json';

	function animateRedirect(image, delay) {
		let imageOverlay = document.getElementById(image.src);

		let circleContainer = imageOverlay.querySelector('.load-circleContainer__hidden');
		circleContainer.classList.add('load-circleContainer__visible');

		let circle = circleContainer.querySelector('.load-circle__hidden');
		circle.classList.add('load-circle__visible');

		let loadingText = circle.querySelector('.load-text__hidden');
		loadingText.classList.add('load-text__visible');
		loadingText.innerHTML = 'Opening';

		imageOverlay.style.pointerEvents = 'none';

		// After delay, add styling to fill entire box, and then redirect
		window.setTimeout(function () {
			circle.classList.add('load-circle__resize');
			window.setTimeout(function () {
				circle.classList.add('load-circle__fill');
				window.setTimeout(function () {
					//window.location = image.link;
				}, delay);
			}, delay / 3);
		}, delay / 1.5);
	}
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<section>
	<div class="container">
		<h1>PROJECTS</h1>
		{#each projects as project}
			<div class="project">
				<h2>{project.name}</h2>
				<p>{project.description}</p>
				<div class="project-content">
					{#each project.images as image}
						<div class="project-image__container">
							<div id={image.src} class="project-image project-image__overlay">
								<a
									on:click|preventDefault={() => animateRedirect(image, 500)}
									href={image.link}
									class="project-image__link"
									data-tooltip={image.tooltip}
								>
									<img src={'img/' + image.src + '.png'} alt="Empty" />
								</a>
								<div class="mobile-only__blurb">{image.tooltip}</div>
								<div class="load-circleContainer__hidden">
									<div class="load-circle__hidden">
										<span class="load-text__hidden" />
									</div>
								</div>
							</div>
							<p class="project-image__description">
								{image.description}
							</p>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	:global(.load-circleContainer__hidden) {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
	}
	:global(.load-circleContainer__visible) {
		opacity: 1;
	}
	:global(.load-circle__hidden) {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 0;
		height: 0;
		font-size: 0;
		padding-right: 2em;
		background-color: black;
		color: white;
		border-radius: 0;
		z-index: 1;
		opacity: 0;
		transition: all 0.33s ease-in-out;
	}
	:global(.load-circle__visible) {
		font-size: 1rem;
		opacity: 1;
	}
	:global(.load-circle__resize) {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		font-size: 2rem;
	}
	:global(.load-circle__fill) {
		width: 100%;
		height: 100%;
		background-color: $col-primary-300;
		color: $col-neutral-900;
		border-radius: 0;
	}
	:global(.load-text__hidden) {
		font-family: 'Monospace';
		opacity: 0;
	}
	:global(.load-text__visible) {
		opacity: 1;
	}
	section {
		height: 100%;
		display: flex;
		flex: 1;
	}
	.project {
		display: flex;
		flex-flow: column;
	}
	.project-content {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		gap: 0.5em;
	}
	.project-image__container {
		display: flex;
		flex-flow: column;

		.project-image {
			max-height: 35vh;
		}
	}
	.project-image__overlay {
		position: relative;

		.project-image__link {
			height: 100%;

			// needed, so the img fills the flex container (overlay would otherwise "overflow")
			img {
				height: 100%;
				width: 100%;
				object-fit: cover;
				object-position: top;
				border-top-right-radius: 20px;
				border-top-left-radius: 20px;
			}

			// initial overlay styles, necessary for transitions to work
			&::before {
				content: '';
				position: absolute;
				left: 0;
				right: 0;
				margin-left: auto;
				margin-right: auto;
				z-index: 1;
				color: rgba($color: #000000, $alpha: 0);

				display: inline-flex;
				height: 100%;
				padding: 1em;
				border-top-right-radius: 20px;
				border-top-left-radius: 20px;

				transition: all 0.33s ease-in-out;
			}

			// when overlay is hovered over
			&:hover::before {
				content: attr(data-tooltip);
				color: rgb(250, 250, 250);
				background-color: rgba($color: #0a0a0a, $alpha: 0.8);
			}
		}

		.mobile-only__blurb {
			display: block;
			position: absolute;
			bottom: 0;
			width: 100%;
			padding: 0.5rem;
			font-size: 1rem;
			color: rgb(250, 250, 250);
			text-align: center;
			z-index: 1;
			background-color: rgba($color: #0a0a0a, $alpha: 0.8);
		}
	}

	@media (min-width: 50em) {
		.project-image__container {
			.project-image {
				max-height: 50vh;
			}
		}
	}

	@media (min-width: 75em) {
		.project-image__overlay {
			.mobile-only__blurb {
				display: none;
			}
		}
		.project-image__container {
			flex-flow: row;
			.project-image {
				min-width: 40%;
				max-height: 100%;

				.project-image__link img {
					object-fit: cover;
					object-position: left;
				}
			}
			.project-image__description {
				min-width: 30%;
				padding: 1rem 0 1rem 2rem;
			}
		}
		.project-content {
			padding-top: 1rem;
		}

		.project {
			padding-top: 4rem;
		}
	}
</style>
