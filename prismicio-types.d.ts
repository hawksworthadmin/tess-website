// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = {
	[KeyType in keyof T]: T[KeyType]
}
/** Content for Blopgpost documents */
interface BlopgpostDocumentData {
	/**
	 * Title field in *Blopgpost*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blopgpost.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
	 *
	 */
	title: prismic.KeyTextField
	/**
	 * Description field in *Blopgpost*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blopgpost.description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
	 *
	 */
	description: prismic.RichTextField
	/**
	 * Image field in *Blopgpost*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blopgpost.image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/core-concepts/image
	 *
	 */
	image: prismic.ImageField<never>
	/**
	 * Category field in *Blopgpost*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blopgpost.category
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
	 *
	 */
	category: prismic.RelationField<'category'>
	/**
	 * Subcategories field in *Blopgpost*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blopgpost.subcategories[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/core-concepts/group
	 *
	 */
	subcategories: prismic.GroupField<
		Simplify<BlopgpostDocumentDataSubcategoriesItem>
	>
	/**
	 * Author field in *Blopgpost*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blopgpost.user
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
	 *
	 */
	user: prismic.RelationField<'user'>
	/**
	 * Created At field in *Blopgpost*
	 *
	 * - **Field Type**: Timestamp
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blopgpost.created_at
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
	 *
	 */
	created_at: prismic.TimestampField
	/**
	 * Updated At field in *Blopgpost*
	 *
	 * - **Field Type**: Timestamp
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blopgpost.updated_at
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
	 *
	 */
	updated_at: prismic.TimestampField
}
/**
 * Item in Blopgpost → Subcategories
 *
 */
export interface BlopgpostDocumentDataSubcategoriesItem {
	/**
	 * Subcategory field in *Blopgpost → Subcategories*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blopgpost.subcategories[].subcategory
	 * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
	 *
	 */
	subcategory: prismic.RelationField
}
/**
 * Blopgpost document from Prismic
 *
 * - **API ID**: `blopgpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlopgpostDocument<Lang extends string = string> =
	prismic.PrismicDocumentWithUID<
		Simplify<BlopgpostDocumentData>,
		'blopgpost',
		Lang
	>
/** Content for Category documents */
interface CategoryDocumentData {
	/**
	 * Title field in *Category*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: category.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
	 *
	 */
	title: prismic.KeyTextField
	/**
	 * slug field in *Category*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: category.slug
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
	 *
	 */
	slug: prismic.KeyTextField
}
/**
 * Category document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> =
	prismic.PrismicDocumentWithUID<
		Simplify<CategoryDocumentData>,
		'category',
		Lang
	>
/** Content for Subcategory documents */
interface SubcategoryDocumentData {
	/**
	 * Title field in *Subcategory*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: subcategory.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
	 *
	 */
	title: prismic.KeyTextField
	/**
	 * slug field in *Subcategory*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: subcategory.slug
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
	 *
	 */
	slug: prismic.KeyTextField
}
/**
 * Subcategory document from Prismic
 *
 * - **API ID**: `subcategory`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SubcategoryDocument<Lang extends string = string> =
	prismic.PrismicDocumentWithUID<
		Simplify<SubcategoryDocumentData>,
		'subcategory',
		Lang
	>
/** Content for User documents */
interface UserDocumentData {
	/**
	 * name field in *User*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Username
	 * - **API ID Path**: user.name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
	 *
	 */
	name: prismic.KeyTextField
}
/**
 * User document from Prismic
 *
 * - **API ID**: `user`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type UserDocument<Lang extends string = string> =
	prismic.PrismicDocumentWithUID<Simplify<UserDocumentData>, 'user', Lang>
export type AllDocumentTypes =
	| BlopgpostDocument
	| CategoryDocument
	| SubcategoryDocument
	| UserDocument
/**
 * Default variation for BlogPostSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogPostSliceSliceDefault = prismic.SharedSliceVariation<
	'default',
	Record<string, never>,
	never
>
/**
 * Slice variation for *BlogPostSlice*
 *
 */
type BlogPostSliceSliceVariation = BlogPostSliceSliceDefault
/**
 * BlogPostSlice Shared Slice
 *
 * - **API ID**: `blog_post_slice`
 * - **Description**: `BlogPostSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogPostSliceSlice = prismic.SharedSlice<
	'blog_post_slice',
	BlogPostSliceSliceVariation
>
declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>
	}
	namespace Content {
		export type {
			BlopgpostDocumentData,
			BlopgpostDocumentDataSubcategoriesItem,
			BlopgpostDocument,
			CategoryDocumentData,
			CategoryDocument,
			SubcategoryDocumentData,
			SubcategoryDocument,
			UserDocumentData,
			UserDocument,
			AllDocumentTypes,
			BlogPostSliceSliceDefault,
			BlogPostSliceSliceVariation,
			BlogPostSliceSlice,
		}
	}
}