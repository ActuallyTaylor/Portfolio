<script lang="ts">
    export let data
    export const blogs = data.blogs
    export const wonderfulWeb = data.wonderfulWeb
</script>

<svelte:head>
    <title>Taylor Lineman</title>
    <meta name="description" content="Taylor Lineman's Personal Website">

    <script
    src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
    data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
    ></script>
</svelte:head>

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

<h1>📝️ Writing</h1>
<section>
    <p>
        Every week I Wednesday I write a blog post called Wonderful Web! This blog post
        highlights a set of new websites each week. These sites can be anything, but are
        usually tech related.
    </p>
    <p>
        Besides writing Wonderful Web, I also write small posts about my Apps and workflows. These
        are more spontanoues so there is not defined schedule for them.
    </p>
</section>

<section>
    <h1>All Posts</h1>
    {#each blogs as blog}
    <a href="blog/{blog.slug}">
        <div class="blogEntry">
            <h5>{blog.date.toLocaleDateString("lookup", {year: "numeric", day: "numeric", month: "numeric"})}</h5>
            <h3>{blog.title}</h3>
        </div>
    </a>
    {/each}
</section>

<section>
    <h1>Wonderful Web Wednesday</h1>
    {#each wonderfulWeb as blog}
    <a href="blog/{blog.slug}">
        <div class="blogEntry">
            <h5>{blog.date.toLocaleDateString("lookup", {year: "numeric", day: "numeric", month: "numeric"})}</h5>
            <h3>{blog.title}</h3>
        </div>
    </a>
    {/each}
</section>
