import { createClient } from 'microcms-js-sdk'

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
})

export async function getPostBySlug(slug) {
    try {
        const post = await client.get({
            endpoint: 'blogs',
            queries: { filters: `slug[equals]${slug}`},
        })
        console.log('~~~~ post ~~~~')
        console.log(post)

        return post.contents[0]
    } catch (err) {
        console.log('~~ getPostBySlug ~~')
        console.log(err)
    }
}

export async function getAllSlugs(limit = 100) {
    try {
        const slugs = await client.get({
            endpoint: 'blogs',
            queries: { fields: 'title,slug', orders: '-publishDate', limit: limit},
        })
        return slugs.contents
    } catch (err) {
        console.log('-- getAllSlugs --')
        console.log(err)
    }
}

export async function getAllPosts(limit = 100) {
    try {
        const posts = await client.get({
            endpoint: 'blogs',
            queries: {
                fields: 'title,slug,eyecatch',
                orders: '-piblishDate',
                limit:limit,
            },
        })
        return posts.contents
    } catch (err) {
        console.log('~~ getAllPosts ~~')
        console.log(err)
    }
}

export async function getAllCategories(limit = 100) {
    try {
        const categories = await client.get({
            endpoint: 'categories',
            queries: {
                fields: 'name,id,slug',
                limit:limit,
            },
        })
        return categories.contents
    } catch (err) {
        console.log('~~getAllCategories ~~')
        console.log(err)
    }
}

export async function getAllPostsByCategory(catID, limit = 100) {
    try {
        const posts = await cloneElement.get({
            endpoint: 'blogs',
            queries: {
                filters: `categories[contains]${catID}`,
                fields: `title,slug,eyecatch`,
                orders: `-puglishDate`,
                limit:limit,
            },
        })
        return posts.contents
    } catch (err) {
        console.log('~~ getAllPostsByCategory ~~')
        console.log(err)
    }
}