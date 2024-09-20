<script>
    export let title = '';
    export let description = '';
    export let tags = [];
    export let users = [];
    // A collection of light colors for post-it notes ideas
    let colors = ["#7afcff", "#feff9c", "#d5b3ff", "#a7f8ef"]
</script>

<div class="card" style={`background:${colors[Math.floor(Math.random() * colors.length)]}`}>
    <div class="idea-title"> Idea </div>
    <hr style="width: 100%">
    <h2>{title}</h2>
    <p>{description}</p>
    <div class="tags">
        {#each tags as tag}
            <span>{tag}</span>
        {/each}
    </div>
    <div class="users-interested">
        Users interested:
        {#each users as user, i}
            <img src="/default.png" alt="user icon">
        {/each}
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1em;
        margin: 1em;
        flex: 2;
        filter: drop-shadow(0 0 0.5em rgba(0, 0, 0, 0.2));
    }

    .card h2 {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0.5em 0;
    }

    .card .idea-title {
        text-align: left;
        font-size: 1em;
        font-weight: bold;
        margin: 0.5em 0;
    }

    .card p {
        font-size: 1em;
        margin: 0.5em 0;
    }

    .card .tags {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0.5em 0;
        white-space: nowrap;
    }

    .card .users-interested {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0.5em 0;
        white-space: nowrap;
    }

    img {
        width: 1.5em;
        height: 1.5em;
        border-radius: 50%;
        margin: 0.25em;
        border: 1px solid var(--accent-black);
    }

    .card span {
        font-size: 0.8em;
        margin: 0 0.5em;
        padding: 0.5em;
        border: 1px solid var(--accent-black);
        border-radius: 0.5em;
    }
</style>