<script>
	import './contacts.scss';
	import { faqs as faqData } from './faqs.js';

	let faqs = faqData.map((faq) => ({ ...faq, open: false }));

	function toggleFAQ(index) {
		faqs = faqs.map((faq, i) => ({
			...faq,
			open: i === index ? !faq.open : false
		}));
	}
</script>
<title>ENTREE | Contacts</title>

<!-- Contacts page container -->
<div id="contacts-page">
	<!-- About section -->
	<section id="about-section">
		<!-- About content -->
		<div id="about-content">
			<h1 id="about-title">About Us</h1>
			<p id="about-desc">
				At <b style="color: var(--accent-brightorange);">ENTREE</b>, we believe in empowering
				communities and individuals through innovative solutions. Our mission is to drive positive
				change by providing accessible tools and resources that inspire action, growth, and
				collaboration. Whether through technology, education, or support, we are dedicated to making
				a difference in the world around us. Join us on our journey to create a brighter, more
				connected future.
			</p>
		</div>

		<!-- About images -->
		<div id="about-img-section">
			<div id="about-img-container">
				<div id="about-img-background-1">
					<img src="https://picsum.photos/700/700" alt="" class="about-img box-shadow" />
				</div>
				<div id="about-img-background-2">
					<img src="https://picsum.photos/750/750" alt="" class="about-img box-shadow" />
				</div>
			</div>
		</div>
	</section>

	<!-- Contact section -->
	<section id="contact-section">
		<div id="contact-form-wrapper">
			<div id="contact-form-container">
				<div id="contact-form-title" class="box-shadow">
					<h2>Contact Us</h2>
				</div>
				<form>
					<div class="input-row">
						<div class="input-container">
							<label for="first-name">First Name <b class="required-star">*</b></label>
							<input class="box-shadow" name="first-name" type="text" placeholder="John" required />
						</div>
						<div class="input-container">
							<label for="last-name">Last Name <b class="required-star">*</b></label>
							<input class="box-shadow" name="last-name" type="text" placeholder="Doe" required />
						</div>
					</div>

					<div class="input-row">
						<div class="input-container">
							<label for="email">Email <b class="required-star">*</b></label>
							<input
								class="box-shadow"
								name="email"
								type="email"
								placeholder="johndoe@example.com"
								required
							/>
						</div>
						<div class="input-container">
							<label for="phone">Phone</label>
							<input class="box-shadow" name="phone" type="tel" placeholder="123-456-7890" />
						</div>
					</div>

					<label for="message">Message <b class="required-star">*</b></label>
					<div class="textarea-container box-shadow">
						<textarea name="message" placeholder="Type Your Message Here..."></textarea>
					</div>
					<button class="box-shadow" type="submit">Send Message</button>
				</form>

				<!-- Address container -->
				<div id="address-container" class="box-shadow">
					<h2>Address</h2>
					<p>
						Whether you need assistance or have any questions, feel free to reach out.<br /><br />
						<b>Location:</b> 4517 Washington Ave, Manchester, Kentucky 39495<br />
						<b>Phone:</b> +1 8854-476456<br />
						<b>Email:</b> support@entree.com
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ section -->
	<section id="faq-section">
		<div id="faq-header">
			<h1>Frequently Asked Questions</h1>
		</div>

		<div id="faq-content">
			<div id="faq-img-container">
				<div id="faq-img-background">
					<img src="https://picsum.photos/700/700" alt="" class="faq-img box-shadow" />
				</div>
			</div>

			<div id="faq-items-container">
				<div id="faq-items">
					{#each faqs as faq, index}
						<div class="faq-item {faq.open ? 'open' : ''}">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div
								tabindex="0"
								role="button"
								class="faq-question"
								on:click={() => toggleFAQ(index)}
							>
								<h3>{faq.question}</h3>
								<span>{faq.open ? '-' : '+'}</span>
							</div>
							<div
								class="faq-answer {faq.open ? 'visible' : ''}"
								style="max-height: {faq.open ? '200px' : '0'};"
							>
								<p>{faq.answer}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>
