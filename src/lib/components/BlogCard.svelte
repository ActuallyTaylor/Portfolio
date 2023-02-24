<script lang="ts">
    import type { BlogEntry } from "$lib/models/BlogEntry";

    export let blog: BlogEntry;
</script>

<style>
.BlogCard {
    display: flex;
    flex-direction: column;
    min-width: 350px;
    min-height: 125px;
    max-width: 350px;
    max-height: 125px;

    background-color: var(--blogBackgroundColor);

    border-radius: 7px;
    padding: 10px;
    margin-right: 20px;
    margin-bottom: 20px;
}

.BlogCard h3 {
    color: var(--primaryFontColor);
    margin: 0px;
}

.BlogCard h5 {
    margin: 0px;
    padding-top: 5px;
    color: var(--secondaryFontColor);
    font-weight: 400;
}

.BlogCard img {
    margin: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.BlogCard p {
    margin: 0px;
    margin-bottom: 7px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

.nodec {
    text-decoration: none;
}
</style>

<a href="./blog/{blog.slug}" class="nodec">
    <div class="BlogCard">
        <h3>{blog.title}</h3>
        <h5>{blog.date.toLocaleString()}</h5>
        <img src="/assets/element/HorizontalDivider.svg" alt="" width="75px"/>
        <p>{blog.description}</p>
    </div>    
</a>
