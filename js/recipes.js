// ===================================
// Haribau Pote - Recipes JavaScript
// ===================================

// Recipe Data
const recipesData = {
    'pote-bhaji': {
        title: 'Pote Bhaji',
        image: 'Traditional Pote Bhaji',
        time: '30 minutes',
        difficulty: 'Easy',
        servings: '4',
        ingredients: [
            '2 cups mixed vegetables (potato, cauliflower, peas, carrots)',
            '2 tablespoons Haribau Pote Masala',
            '2 onions, finely chopped',
            '2 tomatoes, chopped',
            '1 tablespoon ginger-garlic paste',
            '3 tablespoons oil',
            '1/2 teaspoon turmeric powder',
            'Salt to taste',
            'Fresh coriander for garnish',
            '1 cup water'
        ],
        instructions: [
            'Heat oil in a pressure cooker and add chopped onions. Sauté until golden brown.',
            'Add ginger-garlic paste and sauté for 1 minute until the raw smell disappears.',
            'Add chopped tomatoes and cook until they become soft and mushy.',
            'Add Haribau Pote Masala and turmeric powder. Mix well and cook for 2 minutes.',
            'Add all the mixed vegetables and salt. Mix thoroughly.',
            'Add 1 cup water, close the pressure cooker and cook for 2 whistles.',
            'Once pressure releases naturally, open the cooker and check consistency.',
            'Garnish with fresh coriander and serve hot with chapati or bhakri.'
        ],
        tips: [
            'For best flavor, roast the Haribau Pote Masala dry for 30 seconds before adding water.',
            'You can adjust the water quantity based on your preferred consistency.',
            'Add a squeeze of lemon juice before serving for extra tang.'
        ]
    },
    'matki-usal': {
        title: 'Matki Usal',
        image: 'Spicy Matki Usal',
        time: '45 minutes (plus soaking time)',
        difficulty: 'Medium',
        servings: '4',
        ingredients: [
            '1 cup matki (moth beans), soaked and sprouted',
            '2 tablespoons Haribau Pote Masala',
            '2 onions, finely chopped',
            '2 tomatoes, chopped',
            '1 tablespoon ginger-garlic paste',
            '2 green chillies, slit',
            '1/2 cup coconut, grated',
            '3 tablespoons oil',
            '1/2 teaspoon mustard seeds',
            'Curry leaves',
            'Salt to taste',
            'Fresh coriander for garnish'
        ],
        instructions: [
            'Pressure cook sprouted matki with salt and turmeric for 3-4 whistles until tender.',
            'Heat oil in a pan, add mustard seeds and let them splutter.',
            'Add curry leaves, green chillies, and chopped onions. Sauté until golden.',
            'Add ginger-garlic paste and sauté for a minute.',
            'Add chopped tomatoes and cook until soft.',
            'Add Haribau Pote Masala and mix well. Cook for 2 minutes.',
            'Add the cooked matki along with its water. Mix well.',
            'Add grated coconut and simmer for 10 minutes.',
            'Garnish with fresh coriander and serve hot with pav or rice.'
        ],
        tips: [
            'Soak matki overnight and keep in a damp cloth for 24 hours for sprouting.',
            'The longer you simmer, the better the flavors blend together.',
            'Top with farsan and chopped onions for authentic street-style taste.'
        ]
    },
    'batata-rassa': {
        title: 'Batata Rassa',
        image: 'Spicy Batata Rassa',
        time: '25 minutes',
        difficulty: 'Easy',
        servings: '4',
        ingredients: [
            '4 medium potatoes, boiled and cubed',
            '2 tablespoons Haribau Pote Masala',
            '2 onions, finely chopped',
            '2 tomatoes, pureed',
            '1 tablespoon ginger-garlic paste',
            '3 tablespoons oil',
            '1/2 teaspoon turmeric powder',
            '1 teaspoon red chilli powder',
            'Salt to taste',
            '2 cups water',
            'Fresh coriander for garnish'
        ],
        instructions: [
            'Heat oil in a pan and add chopped onions. Sauté until golden brown.',
            'Add ginger-garlic paste and sauté for 1 minute.',
            'Add tomato puree and cook until oil separates.',
            'Add Haribau Pote Masala, turmeric powder, and red chilli powder. Mix well.',
            'Add boiled potato cubes and mix gently.',
            'Add 2 cups of water and salt. Bring to a boil.',
            'Simmer for 10 minutes until the curry thickens.',
            'Garnish with fresh coriander and serve hot with puris or bhakri.'
        ],
        tips: [
            'Perfect for breakfast with hot puris.',
            'Adjust water quantity for desired consistency - make it thin for bhakri or thick for rice.',
            'Add a pinch of garam masala at the end for extra aroma.'
        ]
    },
    'misal-pav': {
        title: 'Misal Pav',
        image: 'Mumbai Style Misal Pav',
        time: '40 minutes',
        difficulty: 'Medium',
        servings: '4',
        ingredients: [
            '1 cup mixed sprouted lentils',
            '3 tablespoons Haribau Pote Masala',
            '2 onions, chopped',
            '2 tomatoes, chopped',
            '1 tablespoon ginger-garlic paste',
            '1/2 cup farsan',
            '2 potatoes, boiled and chopped',
            '4 tablespoons oil',
            'Pav (bread rolls)',
            'Lemon wedges',
            'Fresh coriander',
            'Chopped onions for topping',
            'Salt to taste'
        ],
        instructions: [
            'Pressure cook sprouted lentils with salt and turmeric until soft.',
            'Heat oil in a pan, add onions and sauté until golden.',
            'Add ginger-garlic paste and tomatoes. Cook until tomatoes are soft.',
            'Add Haribau Pote Masala and cook for 2 minutes.',
            'Add cooked sprouts with water and boiled potatoes. Mix well.',
            'Simmer for 15 minutes, adjusting consistency with water.',
            'Serve hot topped with farsan, chopped onions, coriander, and lemon.',
            'Serve with buttered pav on the side.'
        ],
        tips: [
            'Use a mix of moth beans, mung beans, and chickpeas for authentic taste.',
            'Make the gravy spicier with extra Haribau Spicy Pote Masala.',
            'Toast the pav with butter for best experience.'
        ]
    },
    'varan-bhaat': {
        title: 'Varan Bhaat',
        image: 'Comfort Varan Bhaat',
        time: '35 minutes',
        difficulty: 'Easy',
        servings: '4',
        ingredients: [
            '1 cup toor dal (split pigeon peas)',
            '1.5 tablespoons Haribau Pote Masala',
            '1/2 teaspoon turmeric powder',
            '2 tablespoons ghee',
            '1/2 teaspoon mustard seeds',
            '1/2 teaspoon cumin seeds',
            'Curry leaves',
            '2 dry red chillies',
            'A pinch of asafoetida',
            'Salt to taste',
            'Fresh coriander',
            'Cooked rice for serving'
        ],
        instructions: [
            'Pressure cook toor dal with turmeric and salt until soft and mushy.',
            'Mash the dal well and adjust consistency with water.',
            'Heat ghee in a small pan for tempering.',
            'Add mustard seeds, cumin seeds, and let them splutter.',
            'Add curry leaves, dry red chillies, and asafoetida.',
            'Add Haribau Pote Masala and roast for 30 seconds.',
            'Pour this tempering over the dal and mix well.',
            'Garnish with coriander and serve hot over steamed rice with ghee.'
        ],
        tips: [
            'The dal should be smooth and slightly runny.',
            'Serve with a dollop of ghee on rice for authentic taste.',
            'Pair with papad, pickle, and fried eggplant for complete meal.'
        ]
    },
    'bharli-vangi': {
        title: 'Bharli Vangi',
        image: 'Stuffed Eggplant Curry',
        time: '50 minutes',
        difficulty: 'Hard',
        servings: '4',
        ingredients: [
            '8 small purple eggplants',
            '2 tablespoons Haribau Pote Masala',
            '1/2 cup roasted peanuts, powdered',
            '1/2 cup fresh coconut, grated',
            '2 tablespoons sesame seeds',
            '1 tablespoon coriander seeds',
            '2 onions, chopped',
            '2 tablespoons tamarind pulp',
            '1 tablespoon jaggery',
            '4 tablespoons oil',
            'Salt to taste',
            'Fresh coriander'
        ],
        instructions: [
            'Dry roast sesame seeds and coriander seeds until aromatic.',
            'Grind roasted seeds with coconut, peanuts, and Haribau Pote Masala to make stuffing.',
            'Wash eggplants, make cross slits keeping them intact at the stem.',
            'Stuff the masala mixture into each eggplant.',
            'Heat oil in a wide pan, add chopped onions and sauté.',
            'Arrange stuffed eggplants in the pan.',
            'Add remaining masala, tamarind pulp, jaggery, and 1 cup water.',
            'Cover and cook on low flame for 25-30 minutes until eggplants are tender.',
            'Garnish with coriander and serve with bhakri or roti.'
        ],
        tips: [
            'Choose small, tender eggplants for best results.',
            'Cook on low flame to prevent burning.',
            'This dish tastes even better the next day after flavors blend.'
        ]
    }
};

// Initialize recipes
document.addEventListener('DOMContentLoaded', function() {
    initializeRecipeModals();
});

// ===================================
// Recipe Modal Functions
// ===================================

function initializeRecipeModals() {
    const recipeModal = document.getElementById('recipeModal');
    if (!recipeModal) return;

    const closeBtn = recipeModal.querySelector('.close');

    closeBtn?.addEventListener('click', function() {
        recipeModal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === recipeModal) {
            recipeModal.style.display = 'none';
        }
    });
}

function openRecipe(recipeId) {
    const recipe = recipesData[recipeId];
    if (!recipe) return;

    const recipeModal = document.getElementById('recipeModal');
    const recipeDetails = document.getElementById('recipeDetails');

    if (!recipeModal || !recipeDetails) return;

    // Build recipe HTML
    let html = `
        <div class="recipe-detail">
            <div class="recipe-header">
                <div class="recipe-img-placeholder large">
                    <span class="placeholder-text">${recipe.image}</span>
                </div>
                <h2 style="margin-top: 1.5rem; color: var(--dark-color);">${recipe.title}</h2>
                <div class="recipe-meta" style="display: flex; gap: 2rem; justify-content: center; margin: 1rem 0; flex-wrap: wrap;">
                    <span><strong>⏱️ Time:</strong> ${recipe.time}</span>
                    <span><strong>👨‍🍳 Difficulty:</strong> ${recipe.difficulty}</span>
                    <span><strong>🍽️ Servings:</strong> ${recipe.servings}</span>
                </div>
            </div>

            <div class="recipe-body" style="margin-top: 2rem;">
                <div style="background: #fff9f0; padding: 1.5rem; border-radius: 15px; margin-bottom: 2rem;">
                    <h3 style="color: #ff6b35; margin-bottom: 1rem;">Ingredients</h3>
                    <ul style="list-style-position: inside; color: #333;">
                        ${recipe.ingredients.map(ing => `<li style="margin-bottom: 0.5rem;">${ing}</li>`).join('')}
                    </ul>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h3 style="color: #ff6b35; margin-bottom: 1rem;">Instructions</h3>
                    <ol style="list-style-position: inside; color: #333; line-height: 1.8;">
                        ${recipe.instructions.map(inst => `<li style="margin-bottom: 1rem;">${inst}</li>`).join('')}
                    </ol>
                </div>

                <div style="background: #e8f5e9; padding: 1.5rem; border-radius: 15px; border-left: 4px solid #4caf50;">
                    <h3 style="color: #2e7d32; margin-bottom: 1rem;">💡 Pro Tips</h3>
                    <ul style="list-style-position: inside; color: #333;">
                        ${recipe.tips.map(tip => `<li style="margin-bottom: 0.5rem;">${tip}</li>`).join('')}
                    </ul>
                </div>

                <div style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 2px solid #e0e0e0;">
                    <p style="color: #666; margin-bottom: 1rem;">Made with <span style="color: #ff6b35; font-weight: 700;">Haribau Pote Masala</span></p>
                    <a href="products.html" class="btn btn-primary">Buy Haribau Pote Masala</a>
                </div>
            </div>
        </div>
    `;

    recipeDetails.innerHTML = html;
    recipeModal.style.display = 'block';
}

// Print recipe function
function printRecipe() {
    window.print();
}

// Share recipe function
function shareRecipe(recipeId) {
    const recipe = recipesData[recipeId];
    if (!recipe) return;

    if (navigator.share) {
        navigator.share({
            title: recipe.title,
            text: `Check out this amazing ${recipe.title} recipe from Haribau Pote!`,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback - copy to clipboard
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Recipe link copied to clipboard!');
        });
    }
}

console.log('Recipes module loaded! 🍛');
