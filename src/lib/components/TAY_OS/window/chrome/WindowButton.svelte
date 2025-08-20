<script lang="ts">
    export let callback: () => void
</script>

<style>
.Button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: #CCCDFB;
    border: 2px solid #777777;
    min-width: 23px;
    min-height: 23px;
    padding: 0px;
}
</style>

<button class="Button" on:click={callback}>
    <slot>
        
    </slot>
</button>