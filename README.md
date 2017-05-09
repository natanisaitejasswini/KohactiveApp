# KohactiveApp

_KohactiveApp_  is a full-stack application performing Creating new posts and Approving those by Admin

 Kohactive App Technology
 ---------------------------
  * Javascript, HTML, CSS
  * MongoJS
  * ExpressJS
  * AngularJS
  * NodeJS
  
  Installation
  ------------------
  * First install [MongoDB](https://www.mongodb.com/download-center)
  
  ######Mac
  * For Mac: On command line run `brew install Mongodb` 
  * Make a folder to store the data. Open a command terminal and type the following: `cd / ` then `mkdir data`then `cd data ` then `mkdir db`
  * On your commandline type `mongod`, if that doesn't work try `sudo mongod `, don't close this window or anything else.     
  * Open up a new tab on your terminal and type `mongo ` and you're now connected to the database
  
  #### Continue with installation
  * Install latest version of [Node.js](https://nodejs.org/en/download/current/)
  * Clone or download repo [KohactiveApp](https://github.com/natanisaitejasswini/KohactiveApp)
  * Open Node.JS cmd prompt and navigate to folder named "KohactiveApp", you should see all the folders but most importantly you should be able to see the server.js file, if you see it you're in the right place
  * To connect to the MongoDB server follow the following instructions for Mac
  * All npm commands should be run from the Node.js cmd prompt
  * On a new cmd line (Node.JS) run `npm install express`, `npm install cors-anywhere`
  * On the new commandline you just opened install `npm install -g nodemon`  (may require sudo or administrative level access)
  * Once you've installed express, cors-anywhere, and nodemon run `nodemon server.js` to start the app connect to the server
  * Go to [localhost:8000](http://localhost:8000/)
  * Star posting statements
 
  KhoactiveApp Features
  ------------------
 
 * Dashboard
   - A List of 10 recent Published posts will be displayed in a form of table (Post, Published_By, Published_At, Actions)
   - You can Delete your own post
   - Admin can delete any post
 
 * Add a New Post
    - New Post can be created
    - Validations (Required, Post Length, Status: Posted)
  
 * Show Post
   - View each Post sepearately
   
 * Approve Posts by Amin
   - Posts can be approved by only Admin (Status: Published)
   
 * All Published Posts
  - All Posts can be Viewed
  
