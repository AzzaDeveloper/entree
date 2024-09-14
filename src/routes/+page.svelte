<script>
	import Navbar from '$lib/Navbar.svelte';
	import './home.scss';
</script>

<title>ENTREE | Home</title>

<!-- Navbar component -->
<Navbar />

<!-- Home page container -->
<div id="home-page">
	<!-- Signin section -->
	<section id="signin-section">
		<!-- Decor rectangles -->
		<div class="decor-rectangle-2 decor-rectangle" />
		<div class="decor-rectangle-1 decor-rectangle" />

		<!-- Signin content -->
		<div id="signin-content">
			<h1 id="signin-title">COLLABORATION<br />BRINGS INNOVATION.</h1>
			<p id="signin-desc">Connect with other entrepreneurs, now easier than ever<br />before.</p>
			<div id="signin-btn-container">
				<button class="signup-btn signin-btn">Sign Up</button>
				<button class="login-btn signin-btn"> Log In</button>
			</div>
		</div>

		<!-- Signin image -->
		<div id="signin-img-container" class="box-shadow">
			<img src="https://picsum.photos/700/700" alt="" id="signin-img" />
		</div>
	</section>

	<!-- Intro section 1 -->
	<section id="intro-container-1">
		<div class="decor-square-container">
			<div class="decor-square-1 decor-square" />
			<div class="decor-square-2 decor-square" />
		</div>

		<div class="intro-content">
			<h1 class="intro-title">Find what matters to you. Fast.</h1>
			<p class="intro-desc">
				With Entree, lorem ispum dolar sit amet. Lorem ispum dolar sit amet Lorem ispum dolar sit
				amet Lorem ispum dolar sit amet Lorem ispum dolar sit amet Lorem ispum dolar sit amet Lorem
				ispum dolar sit ametLorem ispum dolar sit amet
			</p>
		</div>
	</section>

	<section id="desc-container-2"></section>

	<section id="invite-conatiner"></section>
</div>

<style lang="scss">
	
</style>
