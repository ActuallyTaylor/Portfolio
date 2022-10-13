<script lang="ts">
    import type { WebPageSection } from "$lib/models/WebPage/WebPage";


    export let section: WebPageSection;
</script>

<div class="description">
    <h2>{section.title}</h2>
    <p>
        {section.description ?? ""}
    </p>
</div>
