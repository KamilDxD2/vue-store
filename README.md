# Vue store

A small online-store front end in Vue 3 with an Express back end (School project).

## What it does

- **Home:** promotions loaded from the server, each linking to its own page.
- **Promotion page:** description, end date and the products included in the promotion.
- **Search:** all products, filtered by name and category.
- **Register and log in:** the server remembers the logged-in user in a cookie, so a page refresh keeps you logged in.
- A loader is shown while data is coming from the server.

## Stack

- **Front end (`App`):** Vue 3, Vue Router, Vuex, axios, Vite
- **Back end (`express`):** Node.js, Express, cookie-parser, cors

## Running it

Back end (http://localhost:3000):

```
cd express
npm install
node server03.js
```

Front end (http://localhost:5173):

```
cd App
npm install
npm run dev
```


## Project structure

```
App/
  src/
    api/          requests to the server (axios)
    store/        Vuex modules: promotions, promotion, products, user
    views/        pages: Home, Promotion, Search, Login, Register, About, Not found
    components/   header, footer, product and promotion tiles, rating, loader
    router/       routes
express/
  server03.js     REST endpoints
  data.json       promotions and products
```

## Known limitations

Note: This is a school project, kept close to how it was submitted.

- No database, users are kept in memory with plain-text passwords
- Product pages don't exist, clicking a product shows "Not found"
- In a production build some images may not be bundled correctly

