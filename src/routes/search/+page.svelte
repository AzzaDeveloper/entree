<script>
	import Navbar from '$lib/Navbar.svelte';
	import Input from '$lib/Input.svelte';
	import Card from '$lib/Card.svelte';
	import Idea from '$lib/Idea.svelte';

	import userFuncs from '$lib/users.js';
	import ideaFuncs from '$lib/ideas.js';

	console.log(userFuncs)


	// Combine both user and idea data into one array
	let users = userFuncs.getUserList();
	let ideas = ideaFuncs.getIdeaList();
	let data = [...users, ...ideas];

	// Scramble the data
	data = data.sort(() => Math.random() - 0.5);

	function search(query) {
		if (query === '') {
			return data
		}
		// Search should apply for name, title, description, interests, and idea tags
		let results = data.filter(item => {
			let name = item.username || '';
			let title = typeof item.title === 'string' ? [item.title] : item.title || '';
			let description = item.description || '';
			let about = item.about || '';
			let interests = item.interests || [];
			let tags = item.tags || [];

			let searchables = [name, description, about]
			searchables.push(...interests, ...tags, ...title);
			let found = searchables.some(searchable => {
				return searchable.toLowerCase().includes(query.toLowerCase())
			});
			return found;
		});
		
		searchResult = results;
		return results;
	}
	let searchResult = search('');

</script>

<title>ENTREE | Search</title>

<main>
	<div class="search-bar">
		<input type="text" placeholder="search" class="search-input" on:input={() => search(document.querySelector(".search-input").value)}/>
		<button on:click={() => search(document.querySelector(".search-input").value)}>
			<span>Search 🔎︎</span>
		</button>
	</div>
	<div class="results">
		{#each searchResult as item}
			{#if item.username}
				<Card title={item.username} description={item.about} tags={item.interests}/>
			{:else}
				<Idea title={item.title} description={item.description} tags={item.tags} users={item.users} />
			{/if}
		{/each}
	</div>
</main>


<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: "Raleway", sans-serif;
	}
	input {
        flex-grow: 1;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
	.search-bar {
		margin: 2rem 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		max-width: 50vw;
		gap: 1rem;
	}
	button {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 5px;
		background: var(--accent-brightorange);
		white-space: nowrap;
		color: white;
	}
	.results {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		flex: 1;
	}
</style>