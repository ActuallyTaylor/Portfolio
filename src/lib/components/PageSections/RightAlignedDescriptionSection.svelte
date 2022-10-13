<script lang="ts">
    import type { WebPageSection } from "$lib/models/WebPage/WebPage";


    export let section: WebPageSection;
</script>

<style>
.rightAligned {
    display: flex;
    align-items: center;
}

.rightAligned img {
    border-radius: 20px;
}

.descriptionStack { 
    margin-left: 20px;
    display: block;
}
</style>

<div class="rightAligned">
    <img src="{section.photoURL}" alt="Section"/>
    <div class="descriptionStack">
        <h2>{section.title}</h2>
        <p>
            {section.description ?? ""}
        </p>    
    </div>
</div>