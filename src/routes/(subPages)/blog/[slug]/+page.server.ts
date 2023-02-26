import { Data } from '$lib/data';
import type { BlogEntry } from '$lib/models/BlogEntry';
import { readPosts } from '$lib/posts';
import { error, type RequestEvent } from '@sveltejs/kit';
export const prerender = true;


export async function load(event: RequestEvent) {
    if (typeof event.params.slug !== 'string') {
        throw error(400, "Blog not found")
    }
 
    let blogs = readPosts();
    let blog: BlogEntry | undefined = blogs.find((obj: BlogEntry) => {
        return obj.slug == event.params.slug
    })

    if (blog == undefined) {
        throw error(400, "Blog not found")
    }

    return {
        blog: blog
    }
}
