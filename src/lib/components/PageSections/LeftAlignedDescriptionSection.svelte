<script lang="ts">
    import type { WebPageSection } from "$lib/models/WebPage/WebPage";


    export let section: WebPageSection;
</script>

<style>
.leftAligned {
    display: flex;
    align-items: center;
}

.leftAligned img {
    border-radius: 20px;
}
.descriptionStack { 
    margin-right: 20px;
    display: block;
}
</style>

<div class="leftAligned">
    <div class="descriptionStack">
        <h2>{section.title}</h2>
        <p>
            {section.description ?? ""}
        </p>    
    </div>
    <img src="{section.photoURL}" alt="Section"/>
</div>
