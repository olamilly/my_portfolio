<script setup lang="ts">
	const articles = [
		// Your articles data
		{
			image: "/articles/dsa.png",
			title: "A brief Introduction to Data Structures",
			category: "Programming",
			date: "04-02-2025",
			read: "4 mins read",
			summary:
				"An introductory overview of data structures, explaining their structure, functionality, and use cases.",
			link: "https://medium.com/@olamilly/a-brief-introduction-to-data-structures-5b11635b551a",
		},
		{
			image: "/articles/open_source.png",
			title: "Beginner's Guide to Open Source Contributions",
			category: "Software Development",
			date: "22-08-2024",
			read: "3 mins read",
			summary:
				"Practical advice for newcomers on how to start contributing to open-source projects.",
			link: "https://medium.com/@olamilly/beginners-guide-to-open-source-contributions-09d00305a2c6",
		},
		{
			image: "/articles/vue.png",
			title: "VUE COMPOSITION API VS OPTIONS API",
			category: "JavaScript",
			date: "31-7-2024",
			read: "5 mins read",
			summary:
				"This article explores the different approaches to building Vue.js SPAs, exploring their strengths, weaknesses, and ideal use cases.",
			link: "https://medium.com/@olamilly/vue-composition-api-vs-options-api-c1be554d4e8d",
		},
	];
</script>
<template>
	<section id="articles" class="sec-pad blog-posts about" data-aos="fade-up">
		<div class="main-container">
			<h2 class="heading heading-sec heading-sec__mb-bg">
				<span class="heading-sec__main">Articles</span>
				<span class="heading-sec__sub">
					These are some of the things I've written about.
				</span>
			</h2>
			<ul class="blog-posts-list">
				<li
					class="blog-post-item"
					v-for="(article, index) in articles"
					:key="index"
				>
					<a :href="article.link" target="_blank">
						<figure class="blog-banner-box">
							<img :src="article.image" :alt="article.title" />
						</figure>
						<div class="blog-content">
							<div class="blog-meta">
								<p class="blog-category">{{ article.category }}</p>

								<time :datetime="article.date">{{ article.date }}</time>
							</div>
							<h2 class="blog-item-title">{{ article.title }}</h2>
							<p class="blog-text">{{ article.summary }}</p>
							<div
								style="
									display: flex;
									justify-content: flex-end;
									align-items: center;
								"
							>
								<p
									class="blog-category"
									style="
										display: flex;
										justify-content: center;
										align-items: center;
										gap: 4px;
									"
								>
									<i class="bx bx-time-five"></i><span>{{ article.read }}</span>
								</p>
							</div>
						</div>
					</a>
				</li>
			</ul>
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
				More Articles on
				<a
					target="_blank"
					style="text-decoration: underline; font-weight: 700"
					rel="noreferrer"
					href="https://medium.com/@olamilly"
				>
					Medium</a
				>.
			</h3>
		</div>
	</section>
</template>

<style scoped>
	.blog-posts {
		margin-bottom: 10px;
	}
	.equal-height {
		display: flex;
		flex-wrap: wrap;
	}

	.blog-post-item {
		flex: 1 1 30%;
		display: flex;
		flex-direction: column;
	}

	.blog-post-item a {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.blog-banner-box {
		flex: 1;
	}

	.blog-post-item h3,
	.blog-post-item p {
		margin: 0;
	}
	.blog-posts-list {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}

	.blog-post-item > a {
		position: relative;
		height: 100%;
		box-shadow: 4px 7px 20px hsla(0, 0%, 0%, 0.15);
		border-radius: 10px;
		z-index: 1;
	}

	.blog-post-item > a::before {
		content: "";
		position: absolute;
		inset: 1px;
		border-radius: inherit;
		background: #fafafa;
		z-index: -1;
	}

	.blog-banner-box {
		width: 100%;
		height: 200px;
		border-radius: 12px;
		overflow: hidden;
	}

	.blog-banner-box img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: 0.25s ease;
	}

	.blog-post-item > a:hover .blog-banner-box img {
		transform: scale(1.1);
	}

	.blog-content {
		padding: 15px;
	}

	.blog-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 7px;
		margin-bottom: 10px;
	}

	.blog-item-title {
		margin-bottom: 10px;
		font-size: 2rem;
	}

	.blog-post-item > a:hover .blog-item-title {
		color: black;
	}

	.blog-text {
		/* color: hsl(0, 0%, 84%); */
		font-size: 15px;
		font-weight: 300;
		line-height: 1.6;
	}

	@media (max-width: 750px) {
		.blog-post-item {
			flex: 1 1 100%;
		}
	}

	.blog-category {
		margin-right: 10px;
	}

	.blog-item-title {
		margin: 10px 0;
	}

	.blog-text {
		color: #555;
	}
</style>
