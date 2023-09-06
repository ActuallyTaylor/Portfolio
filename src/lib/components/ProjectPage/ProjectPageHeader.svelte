<script lang="ts">
    export let name: string
    export let subtitle: string
</script>

<style>
    .title {
      font-size: 2em;
      padding: 0px;
      margin-top: 20px;
      font-weight: 700;
      margin-bottom: 0px;
    }

    .dateAndReadingTime {
      color: var(--subtext2);
      font-weight: 600;
      margin-top: 10px;
      padding: 0px;
    }

    hr {
        border: 1px solid var(--subtext2);
        margin-bottom: 20px;
    }

    hr::before {
        content: "";
    }
</style>

<section class="header">
    <h1 class="title">{name}</h1>
    <h3 class="dateAndReadingTime">{subtitle}</h3>
</section>
<hr/>
