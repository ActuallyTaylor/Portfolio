<script lang="ts">
    export let name: string
    export let subtitle: string
    export let headerColor: string
</script>

<style>
    header {
        margin-right: auto;
        margin-left: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100%;
        height: 300px;

        border-radius: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .headerContainer {
        width: 80%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border-radius: 20px;
    }

    .headerContainer h1 {
        font-weight: 500;
        padding: 0px;
        margin: 0px;
        color: var(--shapePrimaryFontColor);
    }

    .headerContainer h2 {
        color: var(--shapeSecondaryFontColor);
        font-weight: 400;
        padding: 0px;
        margin: 0px;
    }
</style>

<header>
    <div class="headerContainer" style="background-color: {headerColor};">
        <h1 class="headerTitle">{name}</h1>
        <h2 class="headerTitle">{subtitle}</h2>    
    </div>
</header>