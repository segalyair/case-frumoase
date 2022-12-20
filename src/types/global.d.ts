declare const __pages__: PageData[];
declare module '*&imagetools' {
	/**
	 * actual types
	 * - code https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts
	 * - docs https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
	 */
	const out;
	export default out;
}

declare module '*.svg?component' {
	const content: ConstructorOfATypedSvelteComponent;
	export default content;
}

declare module '*.svg?src' {
	const content: string;
	export default content;
}

declare module '*.svg?url' {
	const content: string;
	export default content;
}

declare module '*.svg?dataurl' {
	const content: string;
	export default content;
}

declare module '$env/static/private' {
	export { STRAPI_API_URL, STRAPI_API_KEY };
}

declare module 'sharp' {
	const sharp;
	export default sharp;
}
