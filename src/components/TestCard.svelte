<script>
  let name = "John Doe";
</script>

<!-- #svelte-test -->
<div id="svelte-test">
  {#if name}
    <h3 class="sm:text-red-400 md:text-red-500">Hello {name}</h3>
  {/if}

  <div id="postcss-svelte-check" class="hidden">
    Post css is working in svelte too
  </div>
</div>

<!-- /#svelte-test -->

<style lang="postcss">
  #postcss-svelte-check {
    @apply text-emerald-300  sm:text-emerald-400 lg:text-emerald-900;
    display: block;
  }
</style>
