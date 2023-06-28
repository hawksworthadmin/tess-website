import * as prismic from '@prismicio/client'

export async function getStaticPropsPublications(
	client,
	page,
	categoryType,
	publicationType
) {
	const categories = await client.getByType(categoryType, {
		orderings: {
			field: 'document.uid',
			direction: 'desc',
		},
	})

	const publication = await client.getByType(publicationType, {
		pageSize: 8,
		page: page || 1,

		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	})

	return {
		categories,
		publication,
	}
}

export async function getStaticPathsPublicationsPagination(
	client,
	publicationType
) {
	const paths = []

	const publication = await client.getByType(publicationType, {
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	})

	for (let page = 1; page <= publication.total_pages; page++) {
		paths.push({
			params: {
				page: page.toString(),
			},
		})
	}

	return paths
}

export async function getStaticPropsCategoryPage(
	client,
	page,
	categorySlug,
	categoryType,
	publicationType
) {
	const categories = await client.getByType(categoryType, {
		orderings: {
			field: 'document.uid',
			direction: 'desc',
		},
	})

	const getCategoryIdUsingSlug = await client.getByUID(
		categoryType,
		categorySlug
	)

	const categoryId = getCategoryIdUsingSlug.id

	const publication = await client.getByType(publicationType, {
		filters: [prismic.filter.at(`my.${publicationType}.category`, categoryId)],
		pageSize: 8,
		page: page,
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	})

	return {
		categories,
		publication,
	}
}

export async function getStaticCatogeryPaths(client, categoryType) {
	const categories = await client.getByType(categoryType, {
		orderings: {
			field: 'document.uid',
			direction: 'desc',
		},
	})
	const paths = categories.results.map((cat) => ({
		params: { category: cat.uid },
	}))

	return paths
}

export async function getStaticCategoryPage(
	client,
	categoryType,
	publicationType
) {
	const categories = await client.getByType(categoryType, {
		orderings: {
			field: 'document.uid',
			direction: 'desc',
		},
	})

	const paths = []

	for (const category of categories.results) {
		const categoryId = category.id
		const blog = await client.getByType(publicationType, {
			filters: [
				prismic.filter.at(`my.${publicationType}.category`, categoryId),
			],
			pageSize: 8,
			orderings: {
				field: 'document.first_publication_date',
				direction: 'desc',
			},
		})

		for (let page = 1; page <= blog.total_pages; page++) {
			paths.push({
				params: {
					category: category.uid,
					page: page.toString(),
				},
			})
		}
	}

	return paths
}

export async function getStaticPathsSlug(client, publicationType) {
	const blog = await client.getByType(publicationType)

	const paths = blog.results.map((post) => ({
		params: {
			category: post.data.category.slug,
			slug: post.uid,
		},
	}))

	return paths
}

export async function getStaticPropsSlug(
	client,
	slug,
	publicationType,
	categoryType
) {
	const categories = await client.getByType(categoryType, {
		orderings: {
			field: 'document.uid',
			direction: 'desc',
		},
	})

	const publication = await client.getByUID(publicationType, slug)
	const categoryId = publication?.data?.category?.id
	const postId = publication?.id
	const relatedPosts = await client.getByType(publicationType, {
		filters: [
			prismic.filter.at(`my.${publicationType}.category`, categoryId),
			prismic.filter.not('document.id', postId),
		],
		pageSize: 3,
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	})

	return {
		publication,
		categories,
		relatedPosts,
	}
}
