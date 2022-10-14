<script lang="ts">
    export let title: string | undefined
    export let path: string
</script>

<style>
.photo {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.image {
    border-radius: 20px;
}

.sectionTitle {
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
        {#if title != undefined }
        <h2 class="sectionTitle">{title}</h2>
        {/if}
            
        <img class="image" src="{path}" alt="Section"/>    
        <slot name="extras">
    
        </slot>
    </div>
</div>
