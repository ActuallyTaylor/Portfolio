import { createRSSFeed } from "$lib/posts";
// We need to prerender here because it is using filesystem operations that only work on Netlify if they are pre-rendered as Netlify does not give you a server to run your SvelteKit site on.
export const prerender = true;

export const GET = async () => {
    const body = createRSSFeed();
    
    let response = new Response(body);
    response.headers.set('Cache-Control', `max-age=0, s-max-age=${600}`);
    response.headers.set('Content-Type', `application/xml`);

    return response
};
  