document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCartClicked);
    });

    function addToCartClicked(event) {
        const button = event.target;
        const product = button.parentElement;
        const productId = product.dataset.id;

        alert(`Added Product ${productId} to cart!`);
        // Implement logic to add the product to cart or perform AJAX request
    }
});
