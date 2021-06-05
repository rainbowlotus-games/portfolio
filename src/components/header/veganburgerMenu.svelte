<div class="mobile-menu-icon">
	<svg viewBox="0 0 100 80" width="40" height="40">
		<rect width="100" height="20" />
		<rect y="30" width="100" height="20" />
		<rect y="60" width="100" height="20" />
	</svg>
</div>

<style>
	div {
		height: 2rem;
	}

	div svg {
		fill: var(--col-primary-300);
		display: inline-block;
		height: 100%;
	}

	/* Add complexity */
	@media (min-width: 45em) {
		.mobile-menu-icon {
			display: none;
		}
	}
</style>
