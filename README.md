# Google Books Search

The purpose of this project is to create a new React-based Google Books Search app.  The requirements are to
create React Components, work with helper/util functions, and utilize React lifecycle methods to query and display
books based on user searches.  The app will also use Node, Express, amd MongoDB so that users can save books to
review or purchase later.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

This app will be deployed to Heroku.
