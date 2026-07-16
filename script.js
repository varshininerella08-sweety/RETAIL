// ==============================
// RetailAI - Main JavaScript
// Version 1.0
// ==============================

console.log("RetailAI Website Loaded Successfully!");

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to RetailAI");
});

// Shop Now Button
const shopButton = document.querySelector(".shop-btn");

if (shopButton) {
    shopButton.addEventListener("click", () => {
        alert("Welcome to RetailAI! Products will be available soon.");
    });
}

// Explore Products Button
const exploreButton = document.querySelector(".explore-btn");

if (exploreButton) {
    exploreButton.addEventListener("click", () => {
        alert("Explore our latest electronic products.");
    });
}

// Login Button
const loginButton = document.querySelector("nav button");

if (loginButton) {
    loginButton.addEventListener("click", () => {
        alert("Login page is coming soon!");
    });
}