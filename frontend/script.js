<script>
async function loadRecipes() {
    try {
        const response = await fetch("http://51.20.96.135:3000/recipes");
        const recipes = await response.json();

        console.log(recipes);

        // Later we'll display them on the page
    } catch (err) {
        console.error(err);
    }
}

loadRecipes();
</script>
