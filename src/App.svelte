<script lang="ts">
  import Router from 'svelte-spa-router'
  import Home from './routes/home.svelte'

  // export let name: string;

  const routes = {
    '/': Home
  }
</script>
<!--
<main>
  <h1>App</h1>
  <h1>Hello {name}!</h1>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
-->
<div>
  <h1>App</h1>
  <Router {routes} />
</div>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>