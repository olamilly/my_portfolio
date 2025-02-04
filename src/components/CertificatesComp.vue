<template>
	<section id="certificates" class="sec-pad" data-aos="fade-up">
		<div class="main-container">
			<h2 class="heading heading-sec heading-sec__mb-med">
				<span class="heading-sec__main">Certificates</span>
			</h2>
			<div class="carousel-container">
				<div class="carousel">
					<div
						class="carousel-inner"
						:style="{
							transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
						}"
					>
						<div
							class="carousel-item"
							v-for="(cert, index) in certificates"
							:key="index"
						>
							<img
								:src="cert.image"
								:alt="cert.title"
								class="certificate-image"
							/>
							<div class="certificate-info">
								<h3>{{ cert.title }}</h3>
								<p style="font-weight: 600">
									{{ cert.issuer }}
								</p>
								<p>{{ cert.date }}</p>
							</div>
						</div>
					</div>
					<button
						@click="prevSlide"
						:class="{ 'disabled-button': currentIndex === 0 }"
						class="prev-button"
						:disabled="currentIndex === 0"
					>
						<i class="bx bx-chevron-left"></i>
					</button>
					<button
						@click="nextSlide"
						:class="{ 'disabled-button': isNextDisabled }"
						class="next-button"
						:disabled="isNextDisabled"
					>
						<i class="bx bx-chevron-right"></i>
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { ref, computed, onMounted } from "vue";

	const certificates = ref([
		{
			id: 1,
			title: "Introduction to Generative AI",
			issuer: "Google Cloud Skills Boost",
			date: "2025",
			image: "/public/certs/Generative_AI_Badge.png",
			// link:"https://www.cloudskillsboost.google/public_profiles/82b7303c-57da-4e60-be7b-a0595784c098/badges/13777638"
		},
		{
			id: 2,
			title: "Database Foundations",
			issuer: "Oracle Academy",
			date: "2024",
			image: "/public/certs/db.png",
		},
		{
			id: 3,
			title: "Application Development Foundations",
			issuer: "Oracle Academy",
			date: "2024",
			image: "/public/certs/apex.png",
		},
		{
			id: 4,
			title: "Oracle Cloud Infrastructure Foundations",
			issuer: "Oracle Academy",
			date: "2024",
			image: "/public/certs/oci.png",
		},
		{
			id: 5,
			title: "InternPulse Finalist",
			issuer: "InternPulse",
			date: "2024",
			image: "/public/certs/internpulse.png",
		},
		{
			id: 6,
			title: "Huawei Data Communication",
			issuer: "Huawei",
			date: "2024",
			image: "/public/certs/huawei.png",
		},
	]);

	const currentIndex = ref(0);
	const slidesToShow = ref(3);

	const updateSlidesToShow = () => {
		if (window.innerWidth < 500) {
			slidesToShow.value = 1;
		} else {
			slidesToShow.value = 3;
		}
	};

	onMounted(() => {
		updateSlidesToShow();
		window.addEventListener("resize", updateSlidesToShow);
	});

	const isNextDisabled = computed(() => {
		return currentIndex.value >= certificates.value.length - slidesToShow.value;
	});

	const prevSlide = () => {
		if (currentIndex.value > 0) {
			currentIndex.value--;
		}
	};

	const nextSlide = () => {
		if (currentIndex.value < certificates.value.length - slidesToShow.value) {
			currentIndex.value++;
		}
	};
</script>

<style scoped>
	.carousel-container {
		overflow: hidden;
		width: 100%;
	}

	.carousel {
		background: #f4f4f4;
		padding: 20px;
		text-align: center;
		display: flex;
		align-items: center;
		position: relative;
		border-radius: 10px;
	}

	.certificate-image {
		width: 100%;
		height: auto;
		max-height: 250px;
		object-fit: contain;
	}

	.carousel-item {
		flex: 1 0 calc(100% / 3); /* Adjust based on the number of slides to show */
		box-sizing: border-box;
		padding: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 300px;
	}
	.carousel-inner {
		display: flex;
		transition: transform 0.5s ease;
		width: calc(100% * 3);
	}
	@media (max-width: 500px) {
		.carousel-inner {
			width: 100%; /* Adjust based on the number of slides to show */
		}

		.carousel-item {
			flex: 1 0 100%; /* Adjust based on the number of slides to show */
		}
	}

	.prev-button,
	.next-button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: black;
		border-radius: 50%;
		color: white;
		border: none;
		/* padding: 10px; */
		height: 37px;
		width: 37px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.certificate-info {
		margin-top: 10px;
	}
	button > i {
		font-size: 2.3rem;
	}

	.prev-button {
		left: 10px;
	}
	.next-button {
		right: 10px;
	}
	/* button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}*/

	.disabled-button {
		display: none;
	}
</style>
