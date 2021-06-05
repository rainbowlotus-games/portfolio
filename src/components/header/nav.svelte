<script>
	import VeganburgerMenu from './veganburgerMenu.svelte';

	let links = [
		{ title: 'Home', route: '/' },
		{ title: 'Connect', route: '/connect' },
		{ title: 'Projects', route: '/projects' }
	];
</script>

<div class="nav container">
	<div class="content-sidebar">
		<div class="logo">
			<img src="/img/smile.png" alt="Sketch of smiling face" />
			<span>pge</span>
		</div>

		<VeganburgerMenu />

		<div class="links">
			<ol>
				{#each links as { title, route }}
					<li><a href={route} data-link>{title}</a></li>
				{/each}
			</ol>
		</div>
	</div>
</div>

<style>
	.nav {
		font-family: var(--ff-accent-alt);
		padding: 1em 0 1em 0;
	}

	.nav ol {
		display: flex;
		justify-content: space-between;
	}

	.nav ol li {
		display: block;
		border-bottom: 4px solid var(--col-primary-300);
	}

	.nav a {
		color: var(--col-accent-300);
		text-decoration: none;
	}

	.logo {
		flex: 1 1 30%;
		height: max(3vw, 3em, 3rem);

		display: flex;
		flex-flow: row;
	}
	.logo img {
		display: inline-block;
		height: 100%;
	}
	.logo span {
		display: inline-block;
		height: 100%;
		vertical-align: middle;
	}
	.links {
		display: none;
	}
	.links ol {
		width: 100%;
	}

	/* Add complexity */
	@media (min-width: 45em) {
		.links {
			flex: 1 1 70%;
			min-width: 20ch;

			display: flex;
			align-items: center;
			justify-content: stretch;
		}

		.links ol li {
			display: inline-block;
		}
	}
</style>
