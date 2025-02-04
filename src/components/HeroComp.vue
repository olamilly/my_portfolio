<template>
	<section
		class="home-hero"
		id="top"
		style="display: flex; justify-content: center"
	>
		<div class="home-hero__content" data-aos="fade-up">
			<div
				class="hero-svg"
				style="width: 100%; display: flex; justify-content: center"
			>
				<programmerComp />
			</div>

			<h1 class="heading-primary">
				Hey, My name is
				<span>Olamide</span>
			</h1>
			<!-- 👋 -->
			<div class="home-hero__info">
				<p class="text-primary hero-tp">
					I'm a
					<span>Software Engineer</span>
					and I code ideas into functional, scalable, and beautiful software.
				</p>
				<!-- Passionate -->
			</div>
			<div class="hero-socials">
				<a
					target="_blank"
					rel="noreferrer"
					href="mailto:tmustaphaismail@gmail.com"
				>
					<i class="bx bxs-envelope"></i>
				</a>
				<a target="_blank" rel="noreferrer" href="https://github.com/olamilly">
					<i class="bx bxl-github"></i>
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/olamide-mustapha/"
				>
					<i class="bx bxl-linkedin-square"></i>
				</a>
			</div>
			<div class="home-hero__cta">
				<!-- style="display:flex;justify-content: space-around;" -->
				<a href="/#about" class="btn btn--bg">About me</a>
				<!-- <a href="./#contact" class="btn btn--bg btn--theme dynamicBgClr"
              >Resume</a
            > -->
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
	import programmerComp from "@/assets/programmerLogo.vue";
</script>
<style scoped>
	.home-hero__content {
		zoom: 85%;
	}
	@keyframes bounce {
		0% {
			transform: translateY(0px);
		}
		100% {
			transform: translateY(-10px);
		}
	}

	.hero-socials {
		animation: bounce 1s infinite alternate;
	}
	.hero-socials {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-top: 4rem;
	}
	.hero-socials a {
		border: 3px solid white;
		border-radius: 50%;
		padding: 1rem;
	}
	.hero-socials > a:hover {
		border: 3px solid azure;
		background: linear-gradient(to right, azure, lightblue);
		-webkit-background-clip: text;
		color: transparent;
	}
	.bx {
		font-size: 5rem;
	}
	.heading-primary > span,
	.hero-tp > span {
		font-weight: 700;
		background: linear-gradient(to right, azure, lightblue);
		-webkit-background-clip: text;
		color: transparent;
	}
</style>
