type PageModule = {
	id: number;
	label: string;
	title: string;
	__component: string;
};

type PageData = {
	createdAt: string;
	locale: string;
	localizations: any[];
	module: PageModule[];
	pagename: string;
	publishedAt: string;
	slug: string;
	updatedAt: string;
};
