<script>
  import Example from "../shared/Example.svelte";
  import ColorPicker from "../shared/ColorPicker.svelte";
  import PromiseExample from "../shared/PromiseExample.svelte";

  let name = 'Faiz';
  let count = 0;

  // Reactive statements, they are triggered on reassignments of the used variable
  $: doubled = count * 2;
  $: squared = count ** 2;
  $: mysteriousCalculation = doubled + squared;

  $: {
    // You can run an entire block of code in here
    console.log(`the current count is ${count}`);
  }

  // You can even put conditionals in here
  //$: if (count >= 10) {
  //    alert('count is dangerously high!');
  //    count = 0;
  //}

  const increment = () => {
    count++;
  }
</script>

<style>
  p {
    font-size: 2em;
  }

  button {
    font-size: 2em;
  }
</style>

<p>Hello {name}, welcome to Svelte!</p>

<button on:click={increment}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<!-- If we wanted we can also use the spread operator when passing in a collection of props -->
<Example value={count}/>

{#if count > 10}
  <p>Displaying doubled as we are above 10</p>
  <Example value={doubled}/>
{:else if count > 5}
  <p>Displaying the mystery calculation as we are above 5</p>
  <Example value={mysteriousCalculation}/>
{:else}
  <p>Displaying squared as we are under 5</p>
  <Example value={squared}/>
{/if}

<ColorPicker/>

<PromiseExample/>