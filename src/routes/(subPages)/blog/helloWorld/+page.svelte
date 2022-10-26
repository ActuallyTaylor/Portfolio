<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte";
    import PageNavigation from "$lib/components/ProjectPage/ProjectPageNav.svelte"
    import BlogPageHeader from "$lib/components/ProjectPage/BlogPageHeader.svelte"

    import { Data } from "$lib/data";
    import { BlogEntry } from "$lib/models/BlogEntry";

    const id = "helloWorld"
    export let blog: BlogEntry = Data.blogs.find((obj: BlogEntry) => {
        return obj.id == id
    }) ?? new BlogEntry("undefined", "undefined", "undefined", "undefined")
</script>

<svelte:head>
  <title>{blog.name} - Blog</title>
  <meta name="description" content="{blog.content}">
</svelte:head>

<span>
    
    <PageNavigation id={blog.id} name={blog.name}/>
    <BlogPageHeader name={blog.name} subtitle={"My First Blog Post"} headerColor="#87b3d6"/>

    <DescriptionSection title="Opening">
        <span slot="description">
            Hello everyone! This is my brand new website. A spent a lot of time working on both designing and developing this site. It is a brand new style, design and codebase.
            The entire website is written using <a href="https://kit.svelte.dev">SvelteKit</a>. A friend of mine introduced me to SvelteKit and it has been a joy to work with since.
            It is a super simple way to write HTML and CSS in an efficient manor. The components system is especially nice for a website like this where elements are duplicated all
            across the site.
        </span>
    </DescriptionSection>
    <DescriptionSection title="Cool Things About This Site">
        <span slot="description">
            Because I am using SvelteKit for the backend of this site, it has some pretty cool super powers. The site can run almost completely without JavaScript,
            that means if you go ahead and disable JavaScript on the site it will still <i>mostly</i> function. Some parts of the site will be a little messy with JavaScript
            disabled.
        </span>
    </DescriptionSection>

</span>