<script lang="ts">
  const getRandomNumberWithDelay = async (): Promise<unknown> => {
    return Promise.resolve(Math.random())
  }

  let promise = getRandomNumberWithDelay()
</script>

<button on:click={() => promise = getRandomNumberWithDelay()}>
  Generate a Random Number
</button>

{#await promise}
  <p>generating...</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}