<script lang="ts">
    export let id: string
    export let name: string
</script>

<style>
    nav {
        display: flex;
        background-color: var(--navBarBackgroundColor);
        border-radius: 7px;
        align-items: center;
        padding-left: 20px;
        margin-top: 20px;
    }

    nav a {
        text-decoration: none;
        color: var(--primaryFontColor);
    }

    nav a:last-child {
        font-weight: 600;
    }

    .name {
        position: absolute;
        left: 50%;
        translate: -50%;

        font-weight: 700;
    }

    @media screen and (max-width: 600px) {
        .name {
            display: none;
        }
    }
</style>

<nav>
    <a class="name" href="/">
        <p>Taylor Lineman</p>
    </a>
    <p>
        <a href="/">Home</a> / <a href="/{id}">{name}</a>
        <!-- <a href="/project">Projects</a> /  -->
    </p>
</nav>
