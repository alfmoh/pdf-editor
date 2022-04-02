<script>
  import ListItem from "../shared/components/ListItem.svelte";

  let items = [{ name: "Item 1" }, { name: "Item 2" }]
</script>
<style>
</style>

<div class="w-60 h-auto shadow-md min-w-fit px-1 w-1/5">
  <div class="flex flex-col justify-center">
    <ListItem class="first-block" title="Elements" items={items} />
    <ListItem title="Columns" items={items} />
  </div>
</div>