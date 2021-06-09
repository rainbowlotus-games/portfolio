<script>
	import Header from '../components/header/header.svelte';
	import Footer from '../components/footer/footer.svelte';
</script>

<div class="fullheight">
	<header>
		<Header />
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<Footer />
	</footer>
</div>

<style lang="scss" global>
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	ol,
	ul {
		margin: 0;
		padding: 0;
		font-weight: normal;
	}

	body {
		font-family: $ff-accent;
		font-weight: 400;
		font-size: 1.3125em;
		line-height: 1.6;

		color: $col-secondary-800;
		background-color: $col-primary-100;
	}

	ol,
	ul {
		list-style: none;
	}

	img {
		max-width: 100%;
		height: auto;
	}

	html,
	body {
		height: 100%;
		margin: 0;
	}

	html {
		overflow-x: hidden;
		margin-right: calc(-1 * (100vw - 100%));
	}
</style>
