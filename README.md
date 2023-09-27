# URL Shortener

A web application for shorten your long URL to short link

![UI Preview](/_readme-assets/preview.png)

## Tech Stack

- **Express JS** (backend framework)
- **Mongo DB** (database)
- **EJS** (view engine)

## Installation & Setup

1. Download or clone repo

   ```sh
   git clone https://github.com/fuadmln/express-url-shortener.git
   ```

2. Extract repo and open project in terminal

3. Set database URL<br>
   in `server.js` file, change parameter to connect to the database

   ```js
   mongoose.connect("put your database connection string here");
   ```

4. Install package

   ```sh
   npm install
   ```

5. Run server locally

   ```sh
   npm run dev
   ```

6. Open [localhost:3000](localhost:3000) in browser

## Constraint

- The length of the shortened url parameter is set to static (which is 8). If all possible URLs with a length of 8 characters have been generated, it will not produce a unique URL anymore. You can change it in `/model/shortUrl.js` file

  ```js
  const suid = new ShortUniqueId({ length: 8 });
  ```

- URL input is **not properly validated**. The user can enter not valid URL

- No **edit URL** utility
