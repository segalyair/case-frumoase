<script lang="ts">
	import type { BlogArticle } from '../../../../types/blogArticle';
	import PictureBuilder from '../picture-builder.svelte';

	export let article: BlogArticle;
</script>

<a class="article" href={`blog/${article.slug}`}>
	<PictureBuilder class="articleImage" picture={article.thumbnailPicture} sizes="100vw" />
	<h2 class="h4">{article.title}</h2>
	<p class="body--large details">
		{article.shortDescription}
	</p>
</a>

<style>
	.article {
		width: 50rem;
		position: relative;
		display: grid;
		grid-template-rows: auto 6rem auto;
		gap: 1rem;
		padding-bottom: 1rem;
		border: 2px solid transparent;
		border-radius: 4px;
		transition: border-color 200ms;
	}

	.article:hover {
		border-color: var(--primary-color);
	}

	.article :global(.articleImage) {
		width: 100%;
		height: 36.5rem;
		object-fit: cover;
	}

	.article h2 {
		padding: 0 2rem;
		height: 5.76rem;
	}

	.details {
		text-align: left;
		padding: 0 2rem;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	@media (max-width: 500px) {
		.article {
			width: 30rem;
		}
		.article :global(img) {
			max-width: 30rem;
			height: auto;
		}
		.article h2 {
			font: var(--font-h4) !important;
			text-overflow: ellipsis;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}

		.details {
			text-align: left;
			padding: 0 2rem;
			text-overflow: ellipsis;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}
	}
</style>
