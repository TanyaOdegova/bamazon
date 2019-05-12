# bamazon
an Amazon-like storefront with the MySQL database running with Node.js
The Process
Beging with the MySQL workbench to create a database and the table of products.

Install
$ npm install mysql
Then if propmpted by terminal:
$ npm install felixge/node-mysql
Next step is to establish connection with the MySQL database:
Establishing connections
The recommended way to establish a connection is this:

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'host',
  user     : 'bob',
  password : ''
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

 