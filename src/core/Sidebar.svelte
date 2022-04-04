<script>
  import ListItem from "../shared/components/ListItem.svelte";
  import { isEdit } from "../shared/store/store.ts";

  let items = [{ name: "Text" }, { name: "Image" }]
</script>
<style>
</style>

<div class="w-60 h-auto shadow-md min-w-fit px-1">
  <div class="flex flex-col justify-center">
    {#if $isEdit}
    <div>Hello world</div>
    {:else}
    <div>
      <ListItem class="first-block" title="Elements" items={items} />
      <ListItem title="Columns" items={items} />
    </div>
    {/if}
  </div>
</div>