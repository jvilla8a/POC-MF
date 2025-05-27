# Micro Frontend POC

This project demonstrates a micro-frontend architecture using Module Federation with Vite and React. It consists of a host application and three micro-frontends: Authentication, Products, and Shopping Cart.

## Project Structure

```
micro-frontend-poc/
├── host-app/         # Main container application
├── mf-auth/          # Authentication micro-frontend
├── mf-products/      # Products catalog micro-frontend
└── mf-cart/          # Shopping cart micro-frontend
```

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Setup and Installation

### 1. Host Application

```bash
cd host-app
npm install
```

### 2. Auth Micro-frontend

```bash
cd mf-auth
npm install
```

### 3. Products Micro-frontend

```bash
cd mf-products
npm install
```

### 4. Cart Micro-frontend

```bash
cd mf-cart
npm install
```

## Running the Applications

You need to run each application in a separate terminal window.

### 1. Start Auth Micro-frontend

```bash
cd mf-auth
npm run build && npm run preview
# Should start on http://localhost:5001
```

### 2. Start Products Micro-frontend

```bash
cd mf-products
npm run build && npm run preview
# Should start on http://localhost:5002
```

### 3. Start Cart Micro-frontend

```bash
cd mf-cart
npm run build && npm run preview
# Should start on http://localhost:5003
```

### 4. Start Host Application

```bash
cd host-app
npm run build && npm run preview
# Should start on http://localhost:5173
```

## Features

- **Authentication (mf-auth)**
  - Basic login form
  - Session management
  - Login/Logout functionality

- **Products (mf-products)**
  - Product catalog display
  - Add to cart functionality
  - Product details

- **Shopping Cart (mf-cart)**
  - Cart items display
  - Quantity adjustment
  - Total calculation
  - Checkout button

## Communication Between Micro-frontends

The micro-frontends communicate using custom events:

- Products → Cart: Uses `add-to-cart` event to add items to the cart
- Auth → Others: Manages authentication state

## Important Notes

1. The order of starting the applications is important. Start the micro-frontends first, then the host application.
2. Make sure each application runs on its designated port:
   - Auth: 5001
   - Products: 5002
   - Cart: 5003
   - Host: 5173

3. If you encounter port conflicts, you can modify the port numbers in the respective `vite.config.ts` files.

## Troubleshooting

1. If you see module loading errors:
   - Ensure all micro-frontends are running
   - Check if the ports match the configuration
   - Clear browser cache and reload

2. If styles are not loading:
   - Verify that the CSS files are being imported correctly
   - Check for any console errors related to CSS loading

3. For communication issues:
   - Verify that custom events are being properly dispatched and listened to
   - Check browser console for any errors

## Development

To run the applications in development mode (with hot reload), use:

```bash
npm run dev
```

However, for module federation to work properly, it's recommended to use the build and preview commands during development:

```bash
npm run build && npm run preview
```