<script lang="ts">
	import type { BlogPost } from '../../../../types/blogpost';
	import Picture from '../picture.svelte';

	export let post: BlogPost;
</script>

<a class="post" href={`blog/${post.slug}`}>
	<Picture class="postImage" picture={post.headerImage} sizes="100vw" />
	<h4 class="h4">{post.title}</h4>
	<p class="body--large details">
		{post.content}
	</p>
</a>

<style>
	.post {
		border: 2px solid transparent;
		border-radius: 4px;
		width: 65rem;
		height: 55rem;
		position: relative;
		transition: border 200ms;
	}

	.post:hover {
		border-color: var(--primary-color);
	}

	.post :global(.postImage) {
		width: 100%;
		height: 36.5rem;
		object-fit: cover;
	}

	.post h4 {
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
