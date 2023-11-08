<script lang="ts">
	import type { BlogArticle } from '../../../../types/blogArticle';
	import PictureBuilder from '../picture-builder.svelte';

	export let article: BlogArticle;
</script>

<a class="article" href={`blog/${article.slug}`}>
	<PictureBuilder class="articleImage" picture={article.thumbnailPicture} sizes="100vw" />
	<h4 class="h4">{article.title}</h4>
	<p class="body--large details">
		{article.shortDescription}
	</p>
</a>

<style>
	.article {
		border: 2px solid transparent;
		border-radius: 4px;
		width: 65rem;
		height: 55rem;
		position: relative;
		transition: border 200ms;
	}

	.article:hover {
		border-color: var(--primary-color);
	}

	.article :global(.articleImage) {
		width: 100%;
		height: 36.5rem;
		object-fit: cover;
	}

	.article h4 {
		margin: 2rem;
	}

	.details {
		white-space: pre-wrap;
		overflow: hidden;
		text-overflow: clip;
		margin: 2rem;
		height: 10rem;
	}
</style>
