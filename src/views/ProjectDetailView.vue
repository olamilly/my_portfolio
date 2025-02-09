<template>
	<section class="project-details">
		<header class="header">
			<div class="header__content">
				<div class="header__logo-container">
					<span class="header__logo-sub" @click="goBack()"
						><i class="bx bx-left-arrow-alt"></i
					></span>
				</div>
			</div>
		</header>
		<div class="main-container">
			<div class="project-details__content">
				<div class="project-details__showcase-img-cont">
					<img
						:src="thisProject.img"
						alt="Project Image"
						class="project-details__showcase-img"
					/>
				</div>
				<div class="project-details__content-main">
					<h1
						class="projects__row-content-title"
						style="text-align: center; font-size: 3rem; font-weight: 700"
					>
						{{ thisProject.name }}
					</h1>
					<div class="project-details__desc">
						<h3 class="project-details__content-title">Project Overview</h3>
						<p
							class="project-details__desc-para"
							style="font-weight: 600"
							v-html="thisProject.short_description"
						></p>
						<p
							class="project-details__desc-para"
							v-html="thisProject.main_description"
						></p>
					</div>
					<div class="project-details__tools-used">
						<h3 class="project-details__content-title">Tools Used</h3>
						<div class="skills">
							<div
								v-for="(t, index) in thisProject.tools"
								:key="index"
								class="skills__skill"
							>
								{{ t }}
							</div>
						</div>
					</div>
					<div class="project-details__links">
						<!-- <h3 class="project-details__content-title">See Live</h3> -->
						<a
							:href="thisProject.live"
							class="btn btn--med btn--theme project-details__links-btn"
							target="_blank"
							v-if="thisProject.live.length"
							>Live Link</a
						>
						<a
							:href="thisProject.source"
							class="btn btn--med btn--theme-inv project-details__links-btn"
							target="_blank"
							v-if="thisProject.source.length"
							>Code Link</a
						>
					</div>
				</div>
			</div>
		</div>
		<FooterComp />
	</section>
</template>
<style scoped>
	i {
		font-size: 4rem;
		margin: 0.5rem;
	}
	.main-container {
		zoom: 85%;
	}
</style>
<script setup lang="ts">
	import FooterComp from "../components/FooterComp.vue";
	import { onMounted, ref } from "vue";
	import { useRoute, useRouter } from "vue-router";

	const router = useRouter();
	const route = useRoute();

	function goBack() {
		window.history.back();
	}

	let projects = {
		SafePass: {
			name: "SafePass",
			short_description: "Secure password and credentials manager",
			main_description:
				"Full stack web application that helps users securely store passwords for different websites and provides easy access.<br>I implemented AES-256 encryption on the backend to securely encrypt all user information stored on the database. This project is a <a style='font-weight: 700;text-decoration: underline;' href='https://codingchallenges.fyi/' target='_blank'>coding challenges</a> solution and the problem brief can be found <a style='font-weight: 700;text-decoration: underline;'  href='https://codingchallenges.substack.com/p/coding-challenge-58-password-manager' target='_blank'>here</a>. Going through the brief will help give you a proper understanding of the problem that the application is trying to solve. <br>Working on this project helped me learn more about Cybersecurity and Encryption as well as hosting web applications on AWS virtual servers.",
			img: "/projects/safepass.png",
			tools: [
				"HTML",
				"CSS",
				"JavaScript",
				"Git",
				"Vue.js",
				"Bootstrap",
				"PHP",
				"Laravel",
				" MySQL",
				"AWS EC2",
			],
			live: "http://ec2-54-242-210-101.compute-1.amazonaws.com/",
			source: "https://github.com/olamilly/safepass",
		},
		"Class Attendance Management System": {
			name: "Class Attendance Management System",
			short_description:
				"Fullstack web application that leverages Facial and Fingerprint recognition technology to collect and monitor student attendance data.",
			main_description:
				"This project has two parts. <br>1. Simple hardware component comprising of a Raspberry pi processor, Pi Camera, Fingerprint Sensor, LCD screen and a button.<br>2. Web application to process and view the data built with Laravel (A PHP Framework), Apache Web server, mySQL database.<br><br>Basically, the hardware identifies students using either their face or fingerprints, writes data on a CSV file(student name, time stamp, course code, etc.) and sends the CSV file to the backend through a HTTP request to be processed, stored and eventually displayed on the dashboard.<br>This project helped me work on my python skills as that was what I used to write code for the hardware processor.",
			img: "/attendance.jpg",
			tools: [
				"PHP",
				"Python",
				"Bootstrap",
				"Laravel",
				" MySQL",
				"Raspberry Pi",
				"Open CV",
				"Adafruit_fingerprint",
			],
			live: "",
			source: "",
		},
		"DevPrompts.ai": {
			name: "DevPrompts.ai",
			short_description: "Artificial Intelligence platform engineering.",
			main_description:
				"Lightweight frontend web application that levrages Google's powerful Gemini LLM API. <br>Using information from the user about their tech stack, the application is able to generate project ideas for the user to build.",
			img: "/projects/devprompts.png",
			tools: ["Vue.js", "AWS S3", " Artificial Intelligence"],
			live: "http://devprompts.ai.s3-website-us-east-1.amazonaws.com/",
			source: "",
		},
		Coinpulse: {
			name: "Coinpulse",
			short_description: "Cryptocurrency tracking application.",
			main_description:
				"Coinpulse is asleek and responsive cryptocurrency tracking platform designed to provide real-time insights into the crypto market. Stay updated with: <ul><li style='list-style:auto; font-weight:700'>Live currency price data</li><li style='list-style:auto; font-weight:700'>Market trends</li><li style='list-style:auto; font-weight:700'>Historical analysis</li><li style='list-style:auto; font-weight:700'>Accurate currency conversion</li></ul>and much more all in one place.<br/> <br/> Powered by the CoinGecko API, Coinpulse is a dynamic single-page application built with Vue.js, Bootstrap and deployed on Vercel.",
			img: "/projects/coinpulse.png",
			tools: ["Vue", "Bootstrap", "Vercel", "Git"],
			live: "https://coin-pulse-alpha.vercel.app/",
			source: "https://github.com/olamilly/CoinPulse",
		},
		"Angle Brackets": {
			name: "Angle Brackets Blog",
			short_description:
				"Informative tech blog. Dynamic Single Page Application built with React.",
			main_description:
				"I developed a tech blog using React, providing a platform where I can share insights and knowledge on the latest trends in technology. The blog features a user-friendly interface, customizable themes and SEO optimization.",
			img: "/projects/angle-brackets.png",
			tools: ["React", "Bootstrap", "AWS S3", "Git", "SEO"],
			live: "http://angle-brackets-blog.s3-website-us-east-1.amazonaws.com/",
			source:
				"https://github.com/olamilly/IWL-100DaysOfCode/tree/main/react-blog",
		},
		EduFlex: {
			name: "EduFlex",
			short_description:
				"Interactive e-learning platform landing page for flexible online education.",
			main_description:
				"I designed and developed an this landing with Vue, offering a seamless, responsive user experience for online learners. This SPA includes user-friendly navigation, engaging course materials, and a responsive design for mobile accessibility, providing a high-quality, flexible education solution for students and educators alike.",
			img: "/projects/eduflex.png",
			tools: ["Vue 3", "Bootstrap", "AWS S3", "Git", "SEO", "Vercel"],
			live: "https://eduflex-liard.vercel.app/",
			source: "https://github.com/olamilly/eduflex",
		},
		// 'Appointment Management System':{
		//   name:'Appointment Management System',
		//   short_description:'Customizable general purpose Administrator dashboard for assistants, secretaries and the likes to manage users, appointments or any other data',
		//   main_description:" Built with Laravel on the backend and Vue.js 3 on the frontend, this project serves as a starting point for creating various web applications requiring an admin interface.<br><br>It provides functionalities like:<br><ul><li style='list-style:square;'>User authentication (Laravel Fortify) and management(CRUD operation on users stored in a database).</li><li style='list-style:square;'>Data filtering, pagination and searching. (Appointments in the base case but it can be altered to manage whatever data).</li><li style='list-style:square;'>Toast notifications.</li><li style='list-style:square'>Confirmation modals for actions using Sweet Alert Package.</li><li style='list-style:square;'>Date and time pickers.</li></ul><br>By building this project, I gained valuable experience in building modern fullstack web applications with a clear separation of concerns between the backend and frontend. I also explored integrating third-party libraries and node modules to enhance user experience.",
		//   img:'/appointments.jpg',
		//   tools:['Vue.js', "Bootstrap", 'Laravel'," MySQL","NPM"],
		//   live:'',
		//   source:'https://github.com/olamilly/mylaravue3'
		// },
		// Nexcent: {
		// 	name: "Nexcent",
		// 	short_description: "Business Landing Page",
		// 	main_description:
		// 		"I designed a captivating landing page for Nexcent, a software consulting company. The page is optimized for user experience and conversion, featuring clear call-to-action, engaging visuals and responsive design.",
		// 	img: "/nexcent.jpg",
		// 	tools: ["Vue", "Bootstrap", "Vercel", "Git"],
		// 	live: "https://nexcent-pi-green.vercel.app/",
		// 	source: "https://github.com/olamilly/nexcent",
		// },
		//'Mini Games':{
		//  name:'Mini Games',
		//short_description:'Fun Popular Games to pass time with...',
		//main_description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias tenetur minus quaerat aliquid, aut provident blanditiis',
		//img:'/mini.jpg',
		//tools:['Vue', "Bootstrap", 'Laravel'," MySQL"],
		//live:'',
		//source:''
		//},
		//
	};

	const thisProject = ref({
		name: "",
		short_description: "",
		main_description: "",
		img: "",
		tools: ["a"],
		live: "",
		source: "",
	});
	onMounted(() => {
		const projectName = String(route.query.project);
		if (projectName && projects[projectName as keyof typeof projects]) {
			thisProject.value = projects[projectName as keyof typeof projects];
			window.scrollTo(0, 0);
		} else {
			router.push("/#projects");
		}
	});
</script>
