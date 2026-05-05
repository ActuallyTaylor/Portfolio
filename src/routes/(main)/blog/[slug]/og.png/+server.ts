import type {BlogEntry} from '$lib/models/BlogEntry'
import {readPosts} from '$lib/posts'
import {error} from '@sveltejs/kit'
import {createMemoji} from "$lib/createOpenGraph";
import type { EntryGenerator } from './$types';

// We want to prerender this API since it will allow us to generate all the pre-rendered slugs immediately at the beginning of rendering.
export const prerender = true

// Inform SvelteKit about all the slugs it should pre-render. Modified from: https://sveltekit-og.dev/docs/advanced-usage/pre-rendering
export const entries: EntryGenerator = () => {
    const blogs = readPosts().map((blog) => blog.slug)
	return blogs.map((slug) => ({ slug: slug }));
};

export async function GET({ url, params }) {
    if (typeof params.slug !== 'string') {
        throw error(400, "Blog not found")
    }

    let blogs = readPosts()
    let blog: BlogEntry | undefined = blogs.find((obj: BlogEntry) => {
        return obj.slug == params.slug
    })

    if (blog == undefined) {
        throw error(400, "Blog not found")
    }

    const imageBuffer: Buffer<ArrayBufferLike> = await createMemoji(blog.memoji, blog.memojiBackground, blog.title, blog.description);

    return new Response(imageBuffer.buffer as unknown as BodyInit, {
        headers: {
            // 				'Cache-Control': 'public, immutable, max-age=31536000'
            'Content-Type': 'image/png',
        }
    })
}
