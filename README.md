# Nuxt Shopify Storefront

![image](/public/logo.png)

## Description

Deployed to AWS Amplify: [Nuxt Shopify Storefront](https://nuxt-shopify-storefront.matteozucchetti.it/) with continuous deployment from the `main` branch.

A simple Nuxt 3 SPA that connects to Shopify sample REST APIs to display products and collections.

## Stack

- Nuxt 3
- Tailwind CSS (Tailwind UI as component library)
- EsLint
- Deployed to AWS Amplify

## Features

- List the collections (product categories) in a sidebar (dialog on mobile)
- List the products in the main area with a card layout
- Display the product details in a modal dialog
- Sort the products by alphabetical order
- Filter the products by tags
- Paginate the products

## Screenshots

![image](/public/screenshot_desktop.png)
![image](/public/screenshot_desktop2.png)

## What can be added

- Sort the products by other properties
- Filter the products by other properties
- Add a search bar (search by name?)
- Add an image carousel in the product details dialog (missing more images in the sample API)
- Add skeleton loaders for better UX instead of the loading spinner
- Make it a PWA

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```
