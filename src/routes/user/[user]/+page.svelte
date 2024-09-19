<script>
	import './user.scss';
	export let data;
</script>

<title>ENTREE | Profile | {data.username}</title>

<!-- Home page container -->
<div id="user-page">
	<!-- Signin section -->
	<section id="avatar-section">
		<!-- Decor rectangles -->
		<div class="decor-rectangle-2 decor-rectangle" />
		<div class="decor-rectangle-1 decor-rectangle" />

		<!-- Signin content -->
		<div id="avatar-content">
			<div id="avatar-img-container" class="box-shadow">
				<img src={data.avatar} alt={data.username} id="avatar-img" />
			</div>

			<div id="avatar-info">
				<h1 id="avatar-name">{data.username}</h1>
				<h2 id="avatar-age">{data.age}</h2>
				<div id="avatar-title-container">
					{#each data.title as title}
						<div id="avatar-title-background">
							<p id="avatar-title">{title}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Bio section -->
	<section id="bio-section">
		<div id="bio-about">
			<h1 id="bio-about-title">About me</h1>
			<p id="bio-about-desc">{data.about}</p>
		</div>

		<div id="bio-interests">
			<h1 id="bio-interests-title">Interests</h1>
			<div id="bio-interests-container">
				{#each data.interests as interest}
					<div id="bio-interest-background">
						<p id="bio-interest">{interest}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects-section">
		<h1 id="projects-title">My Projects</h1>
		<div id="projects-grid">
			{#each data.projects as project}
				<div class="project-card box-shadow">
					<img
						class="project-thumbnail"
						src={project.image || 'https://picsum.photos/700/700'}
						alt={project.title}
					/>
					<h2 class="project-title">{project.title}</h2>
					<p class="project-description">{project.description}</p>
				</div>
			{/each}
		</div>
	</section>
</div>
