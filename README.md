# Cherish Buy · Well Knot Craft — React Invitation Website

## Run
```bash
npm install
npm run dev
```

## Easy-to-explain React structure
- `src/App.jsx` — app state, localStorage and routes
- `src/data/products.js` — invitation products, images, prices and categories
- `src/data/routeInfo.js` — category/page behaviour
- `src/components/Header.jsx` — navbar, search, login/wishlist/cart buttons
- `src/components/Footer.jsx` — footer
- `src/components/ProductCard.jsx` — reusable invitation card
- `src/components/Icon.jsx` — reusable SVG icons
- `src/components/Empty.jsx` — reusable empty-state UI
- `src/pages/Home.jsx` — home page content
- `src/pages/Listing.jsx` — category pages and filters
- `src/pages/Product.jsx` — product details
- `src/pages/Search.jsx` — search results
- `src/pages/Wishlist.jsx` — wishlist
- `src/pages/Cart.jsx` — cart
- `src/pages/Checkout.jsx` — checkout and demo payment
- `src/pages/Success.jsx` — order confirmation
- `src/pages/Login.jsx` — login/signup
- `src/pages/Contact.jsx` — contact form
- `src/pages/FAQ.jsx` — FAQ
- `src/pages/InfoPage.jsx` — simple information page
- `src/styles/global.css` — main responsive design
- `src/styles/components.css` — component refinements
- `public/assets/` — image assets

## Review explanation
Product content is stored in `src/data/products.js`; pages use that data through reusable components. Cart, wishlist and login are stored in browser `localStorage`. React Router controls navigation. Payment is a demo flow and does not charge real money.

## Image mapping update
The Wedding Cards catalog now uses the exact first reference-card images from the supplied screen recording and adds six additional wedding-card assets that were present in the supplied asset ZIP but were not previously mapped into the product data.
