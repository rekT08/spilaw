// const button = document.querySelector('.hamburgerz');

// // Create the menu
// const menu = document.createElement('div');

// menu.classList.add('mobile-menu');

// menu.innerHTML = `
//     <a href="">Featured</a>
//     <a href="">Blog</a>
//     <a href="">Spotlight</a>
//     <a href="">Donate</a>
// `;

// // Add the menu to the page
// document.body.appendChild(menu);

// // Toggle menu when hamburger is clicked
// button.addEventListener('click', () => {
//     menu.classList.toggle('show');
// });

const hamburger = document.querySelector('.hamburgerz');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

const articles = [

    {
        title: "The Rise of Afrobeats",
        category: "Music",
        author: "Ashriel Jones",
        image: "images/rapper.avif"
    },

    {
        title: "Why Football Is Changing",
        category: "Sports",
        author: "Archangel M.",
        image: "images/football.avif"
    },

    {
        title: "Inside Modern Street Culture",
        category: "Culture",
        author: "Alex Smith",
        image: "images/culture.avif"
    }

];

const articleContainer = document.querySelector(".article-container");

articles.forEach(article => {

    const card = document.createElement("article");

    card.classList.add("article-card");

    card.innerHTML = `
        <img src="${article.image}" alt="${article.title}">

        <div class="article-info">

            <div class="article-category">
                ${article.category}
            </div>

            <h3 class="article-title">
                ${article.title}
            </h3>

            <p class="article-author">
                By ${article.author}
            </p>

        </div>
    `;

    articleContainer.appendChild(card);

});


let currentArticle = 0;

const featuredImage = document.querySelector("#featuredImage");
const featuredTitle = document.querySelector("#featuredTitle");
const featuredCategory = document.querySelector("#featuredCategory");
const featuredAuthor = document.querySelector("#featuredAuthor");

function showArticle(index) {

    const article = articles[index];

    featuredImage.src = article.image;
    featuredImage.alt = article.title;

    featuredTitle.textContent = article.title;

    featuredCategory.textContent = article.category;

    featuredAuthor.textContent = `By ${article.author}`;

}
showArticle(currentArticle);

const nextButton = document.querySelector("#next");
const previousButton = document.querySelector("#previous");


nextButton.addEventListener("click", () => {

    currentArticle++;

    if (currentArticle >= articles.length) {
        currentArticle = 0;
    }

    showArticle(currentArticle);

});


previousButton.addEventListener("click", () => {

    currentArticle--;

    if (currentArticle < 0) {
        currentArticle = articles.length - 1;
    }

    showArticle(currentArticle);

});