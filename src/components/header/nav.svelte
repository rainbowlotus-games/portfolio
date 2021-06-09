<script>
	import VeganburgerMenu from './veganburgerMenu.svelte';
	import Logo from './logo.svelte';

	let links = [
		{ title: 'Home', route: '/' },
		{ title: 'Connect', route: '/connect' },
		{ title: 'Projects', route: '/projects' }
	];
</script>

<div class="nav container">
	<div class="content-sidebar">
		<div class="logo">
			<Logo />
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

<style lang="scss">
	.nav {
		font-family: $ff-accent-alt;
		padding: 1em 0 1em 0;
	}

	.nav ol {
		display: flex;
		justify-content: space-around;
	}

	.nav ol li {
		display: block;
		border-bottom: 4px solid $col-primary-300;
	}

	.nav a {
		color: $col-accent-400;
		text-decoration: none;
	}

	.logo {
		flex: 1 1 30%;
		height: max(3vw, 3em, 3rem);

		display: flex;
		flex-flow: row;
	}

	.links {
		display: none;
	}
	.links ol {
		width: 100%;
	}

	/* Add complexity */
	@media (min-width: 50em) {
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
