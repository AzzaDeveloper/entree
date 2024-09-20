<script>
    export let title = '';
    export let description = '';
    export let tags = [];
</script>

<div class="card">
    <h2>{title}</h2>
    <p>{description}</p>
    <div>
        {#each tags as tag}
            <span>{tag}</span>
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
        border: 1px solid var(--accent-orange);
        border-radius: 0.5em;
        flex: 1;
    }

    .card h2 {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0.5em 0;
    }

    .card p {
        font-size: 1em;
        margin: 0.5em 0;
    }

    .card div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0.5em 0;
    }

    .card span {
        font-size: 0.8em;
        margin: 0 0.5em;
        padding: 0.5em;
        border: 1px solid var(--accent-orange);
        border-radius: 0.5em;
        white-space: nowrap;
    }
</style>