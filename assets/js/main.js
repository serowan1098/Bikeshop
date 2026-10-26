// Sero'1s SS (Shop) - Main JavaScript Interactivity & Catalog Renderer

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileToggle.classList.toggle('open');
        });
    }

    // Check Authentication state in header
    const headerActions = document.querySelector('.header-actions');
    const storedUser = localStorage.getItem('sero_user');
    if (headerActions && storedUser) {
        try {
            const user = JSON.parse(storedUser);
            // Replace Login/Signup buttons with Greeting & Logout
            const actionButtons = headerActions.querySelectorAll('a.btn');
            actionButtons.forEach(btn => btn.remove());

            const greetingSpan = document.createElement('span');
            greetingSpan.className = 'user-greeting';
            greetingSpan.textContent = `Hi, ${user.name}`;

            const logoutBtn = document.createElement('button');
            logoutBtn.className = 'btn btn-outline btn-sm';
            logoutBtn.textContent = 'Logout';
            logoutBtn.style.marginLeft = '8px';
            logoutBtn.addEventListener('click', () => {
                localStorage.removeItem('sero_user');
                window.location.reload();
            });

            headerActions.insertBefore(greetingSpan, headerActions.firstChild);
            headerActions.appendChild(logoutBtn);
        } catch (e) {
            localStorage.removeItem('sero_user');
        }
    }

    // Render Catalogs if #productsGrid exists
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid && typeof PRODUCTS !== 'undefined') {
        const pageCategory = productsGrid.getAttribute('data-category') || 'all';
        renderCatalog(pageCategory);

        const searchInput = document.getElementById('catalogSearch');
        const sortSelect = document.getElementById('sortSelect');

        if (searchInput) {
            searchInput.addEventListener('input', () => filterAndSortCatalog(pageCategory));
        }
        if (sortSelect) {
            sortSelect.addEventListener('change', () => filterAndSortCatalog(pageCategory));
        }
    }

    // Render Product Detail Page if #productDetailWrap exists
    const productDetailWrap = document.getElementById('productDetailWrap');
    if (productDetailWrap && typeof PRODUCTS !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = PRODUCTS.find(p => p.id === productId);

        if (!product) {
            productDetailWrap.innerHTML = `
                <div style="text-align: center; padding: 80px 20px;">
                    <h1>Product Not Found</h1>
                    <p style="color: var(--gray-mid); margin: 20px 0;">The requested product could not be located in our catalog.</p>
                    <a href="index.html" class="btn btn-primary">Return to Homepage</a>
                </div>
            `;
        } else {
            document.title = `${product.name} | Sero'1s SS (Shop)`;
            let specsHtml = '';
            for (const [key, val] of Object.entries(product.specs)) {
                specsHtml += `<tr><th>${key}</th><td>${val}</td></tr>`;
            }

            productDetailWrap.innerHTML = `
                <div style="margin-bottom: 30px;">
                    <a href="index.html" style="color: var(--gray-mid); font-size: 0.9rem;">Home</a> &rarr; 
                    <a href="${product.category}.html" style="color: var(--gray-mid); font-size: 0.9rem; text-transform: capitalize;">${product.category.replace('-', ' ')}</a> &rarr; 
                    <span style="color: var(--primary); font-size: 0.9rem;">${product.name}</span>
                </div>

                <div class="product-detail-grid">
                    <div class="product-gallery">
                        <span class="product-badge" style="top: 20px; left: 20px; z-index: 10;">${product.brand}</span>
                        <img src="${product.image}" alt="${product.name}">
                    </div>

                    <div class="product-info-panel">
                        <span class="section-tag">${product.subcategory}</span>
                        <h1>${product.name}</h1>
                        <div class="price">₱${product.price.toLocaleString()}</div>
                        
                        <p style="color: var(--gray-mid); margin-bottom: 24px; font-size: 1.05rem;">${product.description}</p>

                        <div style="margin-bottom: 24px;">
                            <p><strong>Availability:</strong> <span style="color: #4cd964;">${product.availability}</span></p>
                            <p style="margin-top: 8px;"><strong>Intended Use:</strong> ${product.intendedUse}</p>
                        </div>

                        <h3 style="font-size: 1.2rem; margin-top: 30px; margin-bottom: 14px;">Technical Specifications</h3>
                        <table class="specs-table">
                            ${specsHtml}
                        </table>

                        <div class="inquiry-box">
                            <h3>Interested in this Product?</h3>
                            <p>This is an inquiry-only catalog. Request availability, showroom viewing, or sizing assistance directly with our team.</p>
                            <a href="contact.html?product=${encodeURIComponent(product.name)}" class="btn btn-primary btn-lg" style="width: 100%;">Inquire About This Item &rarr;</a>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // Handle Contact Form prefill & submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const urlParams = new URLSearchParams(window.location.search);
        const prefillProduct = urlParams.get('product');
        if (prefillProduct) {
            const productInput = document.getElementById('product_interest');
            if (productInput) {
                productInput.value = prefillProduct;
            }
        }

        // If user is logged in, prefill name and email
        if (storedUser) {
            try {
                const user = JSON.parse(storedUser);
                const nameInput = document.getElementById('name');
                const emailInput = document.getElementById('email');
                if (nameInput && !nameInput.value) nameInput.value = user.name;
                if (emailInput && !emailInput.value) emailInput.value = user.email;
            } catch (e) {}
        }

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const alertBox = document.getElementById('formAlert');

            if (!name || !email || !message) {
                if (alertBox) {
                    alertBox.className = 'alert alert-error';
                    alertBox.textContent = 'Please fill in all required fields (Name, Email, Message).';
                    alertBox.style.display = 'block';
                }
                return;
            }

            if (alertBox) {
                alertBox.className = 'alert alert-success';
                alertBox.textContent = `Thank you, ${name}! Your product inquiry has been successfully recorded. Our team will get back to you shortly.`;
                alertBox.style.display = 'block';
                contactForm.reset();
            }
        });
    }
});

function renderCatalog(categoryFilter) {
    const productsGrid = document.getElementById('productsGrid');
    const noResultsMsg = document.getElementById('noResultsMsg');
    if (!productsGrid) return;

    let items = PRODUCTS;
    if (categoryFilter !== 'all') {
        items = PRODUCTS.filter(p => p.category === categoryFilter);
    }

    const searchInput = document.getElementById('catalogSearch');
    const sortSelect = document.getElementById('sortSelect');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const sortBy = sortSelect ? sortSelect.value : 'default';

    if (searchTerm) {
        items = items.filter(p => p.name.toLowerCase().includes(searchTerm) || p.brand.toLowerCase().includes(searchTerm) || p.shortDesc.toLowerCase().includes(searchTerm));
    }

    if (sortBy === 'price-low') {
        items.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        items.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
        items.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (items.length === 0) {
        productsGrid.innerHTML = '';
        if (noResultsMsg) noResultsMsg.style.display = 'block';
        return;
    }

    if (noResultsMsg) noResultsMsg.style.display = 'none';

    productsGrid.innerHTML = items.map(p => `
        <div class="product-card">
            <div class="product-image-wrap">
                <span class="product-badge">${p.brand}</span>
                <img src="${p.image}" alt="${p.name}" loading="lazy">
            </div>
            <div class="product-body">
                <span class="product-brand">${p.subcategory}</span>
                <h3 class="product-title"><a href="product.html?id=${p.id}">${p.name}</a></h3>
                <p class="product-desc">${p.shortDesc}</p>
                <div class="product-footer">
                    <span class="product-price">₱${p.price.toLocaleString()}</span>
                    <a href="product.html?id=${p.id}" class="btn btn-outline-orange btn-sm">View & Inquire</a>
                </div>
            </div>
        </div>
    `).join('');
}

function filterAndSortCatalog(categoryFilter) {
    renderCatalog(categoryFilter);
}
