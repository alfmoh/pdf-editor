<script>
  import DcButton from '../elements/DcButton.svelte';
  export let title = "Title";
  export let items = []
</script>

<style>
  .header {
    margin-top: 15px;
  }

  .first-block {
    margin-bottom: 20px;
  }
</style>

<div class={`px-1.5 ${$$props.class || '' }`}>
  <h4 class="font-bold header mt-3">{title}</h4>
  <div class="flex flex-col">
    {#each items as item}
    <DcButton class="my-2" name={item.name} />
    {/each}
  </div>
</div>