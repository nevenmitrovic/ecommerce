# Ecommerce Application

A modern ecommerce web application built with React and TypeScript. This application provides a complete online shopping experience with product browsing, cart management, user authentication.

## Live Demo

Visit the production application: [https://nevenmitrovic-ecommerce.vercel.app/](https://nevenmitrovic-ecommerce.vercel.app/)

## Features

- **Product Catalog**: Browse products by categories and brands with filtering and sorting capabilities
- **Product Details**: View detailed product information including images, specifications, and reviews
- **Shopping Cart**: Add, remove, and manage items in the shopping cart with persistent storage
- **User Authentication**: Sign in with Google OAuth integration
- **Responsive Design**: Optimized for desktop and mobile devices
- **Subscription**: Subscribe and get discount 10% for every order

## Technology Stack

### Frontend

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **React Router** - Client-side routing for single-page application
- **Vite** - Fast build tool and development server

### UI and Styling

- **CSS Modules** - Scoped styling for components
- **React Slick** - Carousel and slider components
- **React Spinners** - Loading indicators

### State Management

- **Context API** - Global state management for cart, user, and sorting
- **React Hook Form** - Form handling and validation
- **Joi** - Schema validation

### HTTP and Authentication

- **Axios** - HTTP client for API requests
- **JWT Decode** - JSON Web Token handling
- **Google OAuth** - Third-party authentication

### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── about-page/      # About page components
│   ├── cart-page/       # Shopping cart components
│   ├── catalog-page/    # Product catalog components
│   ├── common/          # Shared components (buttons, navbar, footer)
│   ├── hero-section/    # Landing page hero section
│   ├── not-found-page/  # 404 error page
│   ├── product-page/    # Product detail components
│   └── profile-page/    # User profile components
├── constants/           # Application constants
├── helpers/             # Utility functions
├── hooks/               # Custom React hooks
├── interceptors/        # HTTP request/response interceptors
├── layouts/             # Page layout components
├── pages/               # Main page components
├── services/            # API service layer
├── stores/              # State management (contexts and reducers)
└── validations/         # Form validation schemas
```
