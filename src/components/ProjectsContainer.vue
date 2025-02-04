<template>
	<section id="projects" class="projects sec-pad" data-aos="fade-up">
		<div class="main-container">
			<h2 class="heading heading-sec heading-sec__mb-bg">
				<span class="heading-sec__main">Projects</span>
				<span class="heading-sec__sub">
					These are some of the projects that I have built
				</span>
			</h2>

			<div class="projects__content">
				<projectComp
					data-aos="slide-left"
					data-aos-easing="ease-in-sine"
					data-aos-duration="900"
					v-for="(p, index) in projects"
					:key="index"
					:project="p"
				/>
			</div>
			<h3
				class="projects__row-content-title"
				style="
					text-align: center;
					font-size: 2rem;
					margin-top: 2rem;
					margin-bottom: 0px;
					font-weight: normal;
				"
				data-aos="fade"
			>
				More Projects on my
				<a
					target="_blank"
					style="text-decoration: underline; font-weight: 700"
					rel="noreferrer"
					href="https://github.com/olamilly"
				>
					Github</a
				>.
			</h3>
		</div>
	</section>
</template>

<script setup lang="ts">
	import projectComp from "./ProjectComp.vue";
	import { ref } from "vue";
	const projects = ref([
		{
			name: "DevPrompts.ai",
			description:
				"Web application that leverages the power of generative Artificial Intelligence to inspire developers to improve their skills.",
			img: "/projects/devprompts.png",
		},
		{
			name: "SafePass",
			description: "Secure password and credentials manager.",
			img: "/projects/safepass.png",
		},
		{
			name: "Coinpulse",
			description: "Cryptocurrency tracking application.",
			img: "/projects/coinpulse.png",
		},
		{
			name: "EduFlex",
			description: "e-learning platform landing page.",
			img: "/projects/eduflex.png",
		},
		{
			name: "Class Attendance Management System",
			description:
				"Fullstack web application with IoT and Hardware integration...",
			img: "/projects/attendance.jpg",
		},
		{
			name: "Angle Brackets",
			description: "A React-powered tech blog",
			img: "/projects/angle-brackets.png",
		},
		// {
		// 	name: "Nexcent",
		// 	description: "Business landing page.",
		// 	img: "/nexcent.jpg",
		// },
		//{name:'Mini Games',description:'Fun Popular Games to pass time with...',img:'/mini.jpg'},
		// {name:'Appointment Management System',description:'General purpose admin dashboard to manage users, appointments and more.',img:'/appointments.jpg'},
	]);
</script>
<style scoped>
	.projects {
		width: 100vw;
		overflow-x: hidden;
	}
</style>
