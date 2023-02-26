import { readPosts } from '$lib/posts';
import type { RequestEvent } from '@sveltejs/kit';
 
export async function load(event: RequestEvent) {
    let blogs = readPosts().reverse();

    return {
        blogs: blogs
    }
}
