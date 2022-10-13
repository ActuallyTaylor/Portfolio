<script lang="ts">
    import type { WebPageSection } from "$lib/models/WebPage/WebPage";


    export let section: WebPageSection;
</script>

<style>
.photo {
    display: flex;
    justify-content: center;
}

.photo img {
    border-radius: 20px;
}

.photo h2 {
    margin-bottom: 20px;
}

.stack {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

<div class="photo">
    <div class="stack">
        <h2>{section.title}</h2>
        <img src="{section.photoURL}" alt="Section"/>    
    </div>
</div>
