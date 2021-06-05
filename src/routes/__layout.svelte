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

<style>
	.fullheight {
		display: flex;
		flex-flow: column;
		justify-content: space-between;
		height: 100vh;
	}

	.fullheight header {
		height: min-content;
	}

	.fullheight main {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.fullheight header,
	.fullheight footer {
		line-height: normal;
	}
</style>
