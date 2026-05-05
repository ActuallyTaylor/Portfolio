import {readPosts} from "../src/lib/posts";
import type {BlogEntry} from "../src/lib/models/BlogEntry";
import {existsSync, mkdirSync, writeFileSync} from "node:fs";
import {createMemoji} from "../src/lib/createOpenGraph";

const blogPosts: BlogEntry[] = readPosts()

if (!existsSync('./static/opengraph')) {
     mkdirSync('./static/opengraph')
     mkdirSync('./static/opengraph/blog/')
}

for (const blog of blogPosts) {
    const imageBuffer = await createMemoji(blog.memoji, blog.memojiBackground, blog.title, blog.description);

    writeFileSync(`./static/opengraph/blog/${blog.slug}.png`, imageBuffer)
    console.log(`Created opengraph image for ${blog.title}`)
}