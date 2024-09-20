<div id="navbar" class="box-shadow">
    <a id="navbar-logo-container" href="/">
        <img id="navbar-logo" src="/ENTREE-logo-landscape.png" alt="ENTREE logo"/>
    </a>

    <div id="navbar-btn-container">
        <a class="btn navbar-btn" href="/">Home</a>
        <a class="btn navbar-btn" href="/search">Search</a>
        <a class="btn navbar-btn" href="/contacts">Contacts</a>
    </div>
</div>

<style>
	#navbar {
		z-index: 1;
		position: sticky;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: var(--accent-white);
		top: 0;
        height: fit-content;
	}

    #navbar-btn-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 100%;
    }

    #navbar-logo-container {
        display: flex;
        height: 3em;
        flex: 2;
        padding: 0.5em 2em;
    }

    #navbar-logo {
        object-fit: cover;
        height: 100%;
    }

    .navbar-btn {
        text-decoration: none;
        text-align: center;
        color: var(--accent-orange);
        font-size: 1.5em;
        font-weight: bold;
        flex: 1;
        height: 100%;
        padding: 0.5em 1em;
    }
    .navbar-btn:not(:last-child) {
        border-right: 1px solid var(--accent-orange);
    }
    a {
        display: block;
        height: 100%;
    }

    .navbar-btn:hover {
        opacity: 0.5;
    }
</style>
