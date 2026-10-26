# Sero'1s SS (Shop) | Premium Bicycle Website

## Overview
**Sero'1s SS (Shop)** is a professional, responsive bicycle showroom and inquiry platform created for dedicated cyclists in the Philippines. Featuring elite road bikes, professional track and fixed-gear builds, racing kits, and precision components.

- **Brand Owner:** Sir Christian Birot
- **Official Slogan:** "You Get What You Pay For."
- **Market:** Philippines

---

## Main Features
- **Striking Homepage:** Hero section with official branding, featured categories, flagship product showcase, brand philosophy, and Philippine cycling benefits.
- **Dedicated Catalogs:** Separate, searchable, and sortable catalogs for Road Bikes, Track Bikes, Racing Kits, and Components.
- **Product Detail Pages:** Comprehensive specifications table, high-resolution imagery, intended use guidelines, and direct inquiry calls-to-action.
- **Inquiry-Only Customer Flow:** Focused on consultations and availability requests rather than online checkout.
- **Responsive Design:** Mobile-optimized navigation and touch-friendly UI.

---

## Technology Stack
- **HTML5 & CSS3:** Semantic structure and modern styling.
- **PHP 8+:** Server-side component modularity (`header.php`, `footer.php`, `products.php`) and form validation.
- **JavaScript:** Client-side search, filtering, and sorting interactivity.

---

## Folder Structure
```text
C:\Users\CL2-Client\Desktop\Bikeshop\
│
├── index.php                  # Homepage
├── road-bikes.php             # Road Bikes Catalog
├── track-bikes.php            # Track Bikes Catalog
├── racing-kits.php            # Racing Kits Catalog
├── components.php             # Components & Accessories Catalog
├── product.php                # Individual Product Detail View
├── contact.php                # Inquiry & Contact Form
├── about.php                  # About Us & FAQ
├── includes/
│   ├── header.php             # Shared Navigation & Head
│   ├── footer.php             # Shared Footer & Scripts
│   └── products.php           # Centralized Product Database & Helper Functions
└── assets/
    ├── css/
    │   └── style.css          # Main Stylesheet
    ├── js/
    │   └── main.js            # Interactivity & Search
    └── images/                # Product and Showroom Imagery
```

---

## How to Run Locally
1. Ensure PHP (PHP 8.0 or higher) is installed on your system.
2. Open a terminal in the project root directory:
   ```bash
   php -S localhost:8000
   ```
3. Open your web browser and navigate to:
   ```text
   http://localhost:8000
   ```

---

## How to Customize Products & Prices
- Edit `includes/products.php` to update product names, brands, categories, descriptions, specifications, availability, and prices (in Philippine Pesos ₱).
- Place new product images in `assets/images/` and reference their paths in the product array.

---

## GitHub Readiness
- Review files for secrets or local machine paths (none present).
- Include `.gitignore` to exclude temporary files and IDE metadata.
- Ready for manual repository initialization and push by the owner.
