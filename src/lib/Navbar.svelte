<div id="navbar" class="box-shadow">
    <a id="navbar-logo-container" href="/">
        <img id="navbar-logo" src="/ENTREE-logo-landscape.png" alt="ENTREE logo" />
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
		padding: 0.5em 2em;
		top: 0;
	}

    #navbar-btn-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    #navbar-logo-container {
        display: flex;
        height: 3em;
    }

    #navbar-logo {
        height: 100%;
        width: 100%;
    }

    .navbar-btn {
        margin: 0 3em;
        text-decoration: none;
        color: var(--accent-orange);
        font-size: 1.5em;
        font-weight: bold;
    }

    .navbar-btn:hover {
        opacity: 0.5;
    }
</style>
