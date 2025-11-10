import type { BlogEntry } from '$lib/models/BlogEntry'
import { readPosts } from '$lib/posts'
import { error, type RequestEvent } from '@sveltejs/kit'
// We need to prerender here because it is using filesystem operations that only work on Netlify if they are pre-rendered as Netlify does not give you a server to run your SvelteKit site on.
export const prerender = true

export async function load(event: RequestEvent) {
    if (typeof event.params.slug !== 'string') {
        throw error(400, "Blog not found")
    }
 
    let blogs = readPosts()
    let blog: BlogEntry | undefined = blogs.find((obj: BlogEntry) => {
        return obj.slug == event.params.slug
    })

    if (blog == undefined) {
        throw error(400, "Blog not found")
    }

    return blog;
}
