# bamazon
Bamazon is an Amazon-like storefront with MySQL database.
The application presents one interface for the customer.

The Process
1. Part I - MySQL Workbench
Begin with the MySQL workbench to create a database and the table of products.
Make sure to remember which port you are using and check your connection on Connection tab. It should be in "Running" state. Use MAMP to help with the server connection.
Learn from my mistake and make sure not to add $ dollar sign to your record "Price" this will create issues when you try to run "Total" method to multiply price and quantity.
2. Part II - package.json

initialize creation fo json package by going to the terminal and typing
npm install init
After you hit enter, terminal will prompt you to answer a couple of questions. Name your package "bamazon", add your name as an author, live license blank, version 1.0.0. etc.
Once you answer all of the questions, new package.json file should appear in your bamazon directory.

3. Part III - Dependencies
Go to your package.json file and open it up.
Scroll down to the dependencies section. Notice that it is empty. You will have to install node modules and packages, specifically mysql and inquirer.
Run command on your terminal:
npm install mysql
npm install inquirer

4. Part IV - bamazoncustomer.js
Create bamazoncustomer.js file.
First, you should declare variables inquirer and mysql to require these packages that your application is dependent on.

var inquirer = require('inquirer');
var mysql = require('mysql');

Then establish connection to be able to connect to the local host:
var connection = mysql.createConnection({
	host: 'localhost',
	port: 8889,
	user: 'root',
	password: 'root',
	database: 'Bamazon'
});

Then divide your functions based on bamazon capabilities you'd like to implement from Part V below.
You would have to use inquirer.prompt and connection.query to connect data from your MySQL database to the js file. 
Use a for loop method to loop through the items.


5. Part V - bamazon in action

The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

My Demo is available here-->
https://youtu.be/Bpbq0mnc-V8/
 