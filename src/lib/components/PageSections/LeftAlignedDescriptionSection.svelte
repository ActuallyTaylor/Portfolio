<script lang="ts">
    export let title: string | undefined
    export let path: string
</script>

<style>
.leftAligned {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.image {
    border-radius: 20px;
    width: 40%;
}
.descriptionStack { 
    margin-right: 20px;
    display: block;
}

@media screen and (max-width: 600px) {
    .leftAligned {
        flex-direction: column;
    }
    .image {
        border-radius: 20px;
        width: 90%;
    }
}
</style>

<div class="leftAligned">
    <div class="descriptionStack">
        {#if title != undefined }
        <h2>{title}</h2>
        {/if}
        <p>
            <slot name="description">
    
            </slot>    
        </p>
        <slot name="extras">
    
        </slot>
    </div>
    <img class="image" src="{path}" alt="Section"/>
</div>
