import type {BlogEntry} from '$lib/models/BlogEntry'
import {readPosts} from '$lib/posts'
import {error, type RequestEvent} from '@sveltejs/kit'
import type { EntryGenerator } from './$types';

// We need to prerender here because it is using filesystem operations that only work on Netlify if they are pre-rendered as Netlify does not give you a server to run your SvelteKit site on.
export const prerender = true

// Inform SvelteKit about all the slugs it should pre-render. Modified from: https://sveltekit-og.dev/docs/advanced-usage/pre-rendering
export const entries: EntryGenerator = () => {
    const blogs = readPosts().map((blog) => blog.slug)
	return blogs.map((slug) => ({ slug: slug }));
};

export async function load(event: RequestEvent): Promise<BlogEntry> {
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
