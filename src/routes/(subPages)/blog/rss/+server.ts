import { createRSSFeed } from "$lib/posts";
export const prerender = true;

export const GET = async () => {
    const body = createRSSFeed();
    
    let response = new Response(body);
    response.headers.set('Cache-Control', `max-age=0, s-max-age=${600}`);
    response.headers.set('Content-Type', `application/xml`);

    console.log(body)
    return response
};
  