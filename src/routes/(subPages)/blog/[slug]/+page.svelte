<script lang="ts">
    import PageNavigation from "$lib/components/ProjectPage/ProjectPageNav.svelte"
    import BlogPageHeader from "$lib/components/ProjectPage/BlogPageHeader.svelte"
    import SvelteMarkdown from 'svelte-markdown'

    export let data;
    let blog = data.blog;
    const source = blog.content
</script>

<style global>
    img {
        width: 75%;
        border-radius: 7px;
    }
</style>
<svelte:head>
  <title>{blog.title} - Blog</title>
  <meta name="description" content="{blog.description}">
</svelte:head>

<span>
    <PageNavigation id={`blog/${blog.slug}`} name={blog.title}/>
    <BlogPageHeader name={blog.title} subtitle={blog.description} headerColor={blog.hex}/>
    <SvelteMarkdown {source}/>
</span>