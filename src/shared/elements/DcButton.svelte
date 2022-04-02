<script>
  export let name = 'Button'
</script>

<button class={`btn btn-primary ${$$props.class || '' }`}>{name}</button>