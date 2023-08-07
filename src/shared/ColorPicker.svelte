<script>
  const colors = ['red', 'orange', 'green']
  let selected = colors[0]
</script>

<!-- Shameless taken from the Svelte tutorial-->
<style>
  h1 {
    transition: color 0.2s;
  }

  div {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 5px;
    max-width: 400px;
  }

  button {
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--color, #fff);
    transform: translate(-2px,-2px);
    filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
    transition: all 0.1s;
  }

  button[aria-current="true"] {
    transform: none;
    filter: none;
    box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
  }
</style>

<h1 style="color: {selected}">Pick a Colour Below</h1>
<div>
  <!-- the (color) tells Svelte the key for this entry and how to identify when it changes,
  typically a string or number are safe identifiers -->
  {#each colors as color, i (color)}
    <button
      aria-current={selected === color}
      aria-label={color}
      style="background: {color}"
      on:click={() => selected = color}
    >{i + 1}</button>
  {/each}
</div>