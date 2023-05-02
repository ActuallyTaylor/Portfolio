<script lang="ts">
    import type { Application } from "$lib/models/TAY_OS/Application";

    export let application: Application;
</script>

<style>
    .aboutMain {
        padding-top: auto;
        padding-bottom: auto;
        padding-left: 20px;
        padding-right: 20px;
    }

    .aboutMain p {
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .image {
        margin-right: 20px;
    }
</style>

<div class="aboutMain HorizontalStack HorizontallyCentered VerticallyCentered">
    <img class="image" src="/assets/images/TayOS/{application.icon}" height=150 alt="taybot">
    <div class="VerticalStack">
        <p><b>{application.name}</b></p>
        <p>{application.description}</p>

        <p><b>Created By:</b> Taylor Lineman</p>
    </div>
</div>
