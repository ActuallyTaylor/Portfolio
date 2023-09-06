import { readPosts } from '$lib/posts'
import type { RequestEvent } from '@sveltejs/kit'
export const prerender = true

export async function load(event: RequestEvent) {
    let blogs = readPosts()
    let wonderfulWeb = blogs.filter((post) => {
        return post.series == "wonderfulWeb"
    })

    return {
        blogs: blogs,
        wonderfulWeb: wonderfulWeb
    }
}
