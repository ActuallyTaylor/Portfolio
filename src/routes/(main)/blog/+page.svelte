<script lang="ts">
    export let data;
    export const blogs = data.blogs;
    export const wonderfulWeb = data.wonderfulWeb;
</script>

<svelte:head>
    <title>Taylor Lineman</title>
    <meta name="description" content="Taylor Lineman's Personal Website" />

    <script
        src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
        data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
    ></script>
</svelte:head>

<h1>📝️ Writing</h1>
<section>
    <p>
        Sometimes, I decide to write blog posts. I started a series called
        Wonderful Web Wednesday, where I highlighted a new set of websites each
        post. However, I sadly got too busy to keep up with it. I still write
        blog posts, but they are more sporadic.
    </p>
</section>

<section>
    <h1>All Posts</h1>
    {#each blogs as blog}
        <a href="/blog/{blog.slug}">
            <div class="blogEntry">
                <h5>
                    {blog.date.toLocaleDateString("lookup", {
                        year: "numeric",
                        day: "numeric",
                        month: "numeric",
                    })}
                </h5>
                <h3>{blog.title}</h3>
            </div>
        </a>
    {/each}
</section>

<section>
    <h1>Wonderful Web Wednesday</h1>
    {#each wonderfulWeb as blog}
        <a href="/blog/{blog.slug}">
            <div class="blogEntry">
                <h5>
                    {blog.date.toLocaleDateString("lookup", {
                        year: "numeric",
                        day: "numeric",
                        month: "numeric",
                    })}
                </h5>
                <h3>{blog.title}</h3>
            </div>
        </a>
    {/each}
</section>

<style>
    .blogEntry {
        display: flex;
        flex-direction: row;
        justify-items: center;
    }

    .blogEntry h3 {
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .blogEntry h5 {
        color: var(--subtext2);
        margin-right: 20px;
        margin-bottom: 10px;
        margin-top: 12px;
    }
</style>
