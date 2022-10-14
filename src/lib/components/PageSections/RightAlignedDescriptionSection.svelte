<script lang="ts">
    export let title: string | undefined
    export let path: string
</script>

<style>
.rightAligned {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.image {
    border-radius: 20px;
    width: 40%;
}

.descriptionStack { 
    margin-left: 20px;
    display: block;
}
</style>

<div class="rightAligned">
    <img class="image" src="{path}" alt="Section"/>
    <div class="descriptionStack">
        {#if title != undefined }
        <h2 class="sectionTitle">{title}</h2>
        {/if}
        <p>
            <slot name="description">
    
            </slot>    
        </p>
        <slot name="extras">
    
        </slot>
    </div>
</div>