const recipes = [
    { name: 'Sweet Potato Waffles', tags: ['Waffles', 'Sweet Potato', 'Side'], description: 'Savory waffles made with Sweet potato with a hint of Ginger', image: './images/sweet-potato-waffle-md.jpg', rating: 4 },
    { name: 'Escalope de Poulet a la Creme', tags: ['Chicken', 'Entree'], description: 'Delicious quick and easy creamy rice dish.', image: './images/escalopes-de-poulet-a-la-creme.webp', rating: 4.5 },
    { name: 'Oven Roasted potato slices', tags: ['Potatoes', 'side'], description: 'Easy and delicious oven roasted potatoes.', image: './images/roasted-potatoes.webp', rating: 4 },
    { name: 'Black Beans and Rice', tags: ['Southwest', 'entree'], description: 'Black beans and tomatoes served over a bed of rice.', image: './images/black-beans-and-rice.jpg', rating: 3 },
    { name: 'Chicken Curry', tags: ['chicken', 'entree', 'Indian'], description: 'Quick and easy Chicken curry recipe.', image: './images/chicken-curry.webp', rating: 5 },
    { name: 'Chocolate Chip Cookies', tags: ['dessert'], description: 'Delicious soft chocolate chip cookies with coconut.', image: './images/chocolate-chip-cookies.jpg', rating: 5 },
    { name: 'Gooseberry cake', tags: ['dessert', 'German'], description: "This gooseberry cake with crumble is easy to follow.", image: './images/german-gooseberry-cake.jpg', rating: 5 },
    { name: 'Apple Crisp', tags: ['dessert'], description: "This apple crisp recipe is a simple yet delicious.", image: './images/apple-crisp.jpg', rating: 4 }
];

function recipeTemplate(recipe) {
    const fullStars = "⭐".repeat(Math.floor(recipe.rating));
    const emptyStars = "☆".repeat(5 - Math.floor(recipe.rating));
    const tagsHTML = recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join("");

    return `
        <article class="recipe-card">
            <div class="recipe-image"><img src="${recipe.image}" alt="${recipe.name}"></div>
            <div class="recipe-content">
                <div class="tags">${tagsHTML}</div>
                <h2>${recipe.name.toUpperCase()}</h2>
                <p class="rating">${fullStars}${emptyStars}</p>
                <p class="description">${recipe.description}</p>
            </div>
        </article>`;
}

function renderRecipes(recipeList) {
    const container = document.getElementById('recipe-container');
    container.innerHTML = recipeList.length > 0 
        ? recipeList.map(recipeTemplate).join("") 
        : "<p>No results found.</p>";
}

function handleSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = recipes.filter(r => 
        r.name.toLowerCase().includes(query) || 
        r.description.toLowerCase().includes(query) || 
        r.tags.some(t => t.toLowerCase().includes(query))
    );
    
    filtered.sort((a, b) => a.name.localeCompare(b.name));
    renderRecipes(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    const random = [recipes[Math.floor(Math.random() * recipes.length)]];
    renderRecipes(random);

    document.getElementById('search-btn').addEventListener('click', handleSearch);
    document.getElementById('search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
});
