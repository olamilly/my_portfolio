<template>
	<section id="about" class="about sec-pad">
		<div class="main-container">
			<h2
				class="heading heading-sec heading-sec__mb-med"
				style="
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				"
			>
				<span class="heading-sec__main">About Me</span>
				<div
					class="header__logo-img-cont"
					style="border: 1px solid black; margin-bottom: 2rem"
				>
					<img
						src="../assets/jpeg/olamide.jpg"
						alt="Olamide Image"
						class="header__logo-img"
					/>
				</div>
				<span class="heading-sec__sub">
					I'm a passionate Software Engineer and all round tech enthusiast. I'm
					especially skilled in fullstack web development, Cloud computing and
					AI platform development / AI engineering. I build applications and
					infrastructure that seamlessly integrate AI models to deliver
					efficient solutions.
				</span>
			</h2>
			<div class="about__content">
				<div class="about__content-main">
					<h3 class="about__content-title">Get to know me!</h3>
					<div class="about__content-details">
						<p class="about__content-details-para">
							My name is
							<strong>Mustapha Olamide</strong>
							and I <strong> Love </strong> to build.<br />
							I have always been fascinated by computers and technology and the
							fact that I can just click some buttons on my computer and build
							real solutions to actual real life problems.
						</p>
						<p class="about__content-details-para" style="margin-bottom: 1rem">
							I have experience building web applications that leverage Cloud
							Computing, IoT, Artificial Intelligence and various other
							technologies and I'm still always learning and building. Feel free
							to check out my
							<strong>Resume</strong>.
						</p>
					</div>
					<a
						href="https://drive.google.com/file/d/1c0_PYRCqTHTvVRVZzeggkJqLUtFs6lZk/view?usp=sharing"
						target="_blank"
						class="btn btn--med btn--theme dynamicBgClr"
						style="margin-bottom: 2rem"
						>Resume</a
					>
					<p class="about__content-details-para">
						I also recently started writing about some of the things I've learnt
						on my web development journey on
						<strong>
							<a
								target="_blank"
								rel="noreferrer"
								style="text-decoration: underline"
								href="https://medium.com/@olamilly"
							>
								Medium<!-- <i class='bx bx-link-external' style='text-decoration: underline'></i> --> </a
							>. </strong
						><br />
						When I'm not coding, you can catch me either playing chess,
						listening to music or either watching or playing football (Soccer if
						you're American).
					</p>
				</div>
				<div class="about__content-skills" data-aos="fade-up">
					<h3 class="about__content-title">My Skills</h3>
					<div class="skills">
						<div
							class="skills__skill"
							v-for="(skill, index) in skills"
							:key="index"
						>
							{{ skill }}
						</div>
						<!-- <div class="skills__skill"></div> -->
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	const skills = [
		"HTML",
		"CSS",
		"JavaScript",
		"TypeScript",
		"Vue.js",
		"TailwindCSS",
		"Bootstrap",
		"React",
		"Next.js",
		"AWS",
		"Git",
		"Laravel",
		"Express",
		"PHP",
		"C++",
		"Python",
		"C#",
		"ASP .Net Core",
		"SQL Server",
		"MySQL",
		"FireBase",
		"Docker",
		"MongoDB",
		"Node js",
		"Oracle Cloud",
	];
</script>
