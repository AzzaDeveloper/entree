<script>
	import { page } from '$app/stores';
</script>

<div id="error-container">
	<h1>{$page.status}</h1>
	<h2>{$page.error.message}</h2>
</div>

<style lang="scss">
	#error-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
        margin: 5em 10em;
        padding: 3em 0;
		background-color: var(--accent-lightpeach);

        * {
            margin: 0;
            padding: 0.5em;
        }

		h1 {
            font-size: 5em;
			color: var(--accent-orange);
		}

        h2 {
            font-size: 2.5em;
            color: var(--accent-black);
        }
	}
</style>
