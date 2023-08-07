<script>
    // This acts as a prop which can be passed in by those using this component
    export let value = 88; // by assigning this a value it becomes its default!

    // Notice how the styling of the component using this component doesn't get leaked
</script>

<style>
    p {
        font-family: Arial, cursive;
        font-size: 2em;
    }
</style>

<p>The passed in value was {value}</p>
