function openPopup(id) {
        document.getElementById(id).style.display = 'flex';
    }

    function closePopup(id) {
        document.getElementById(id).style.display = 'none';
    }

    function orderProductwa(productName) {
        // Logic for WhatsApp order
        alert('Order via WhatsApp for ' + productName);
    }

    function orderProducttl(productName) {
        // Logic for Telegram order
        alert('Order via Telegram for ' + productName);
    }

    function searchProducts() {
        const input = document.getElementById('searchlmput');
        const filter = input.value.toLowerCase();
        const products = document.getElementsByClassName('product');

        for (let i = 0; i < products.length; i++) {
            const title = products[i].getAttribute('data-title').toLowerCase();
            products[i].style.display = title.includes(filter) ? '' : 'none';
        }
    }

    function drag(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
    }

    document.querySelectorAll('.product').forEach(product => {
        product.addEventListener('dragover', (event) => {
            event.preventDefault();
        });
        
        product.addEventListener('drop', (event) => {
            event.preventDefault();
            const draggedId = event.dataTransfer.getData("text/plain");
            const draggedElement = document.getElementById(draggedId);
            const targetElement = event.target.closest('.product');
            
            // Swap elements only if they are different
            if (draggedElement !== targetElement) {
                const parent = draggedElement.parentNode;
                const nextSibling = targetElement.nextElementSibling === draggedElement ? targetElement : targetElement.nextElementSibling;
                parent.insertBefore(draggedElement, nextSibling);
            }
        });
    });
