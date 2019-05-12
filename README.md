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
  host     : 'example.org',
  user     : 'bob',
  password : 'secret'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
Pooling connections
Use pool directly.

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'bob',
  password        : 'secret'
});

pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});
Connections can be pooled to ease sharing a single connection, or managing multiple connections.

var mysql = require('mysql');
var pool  = mysql.createPool({
  host     : 'example.org',
  user     : 'bob',
  password : 'secret'
});

pool.getConnection(function(err, connection) {
  // connected! (unless `err` is set)
});
When you are done with a connection, just call connection.release() and the connection will return to the pool, ready to be used again by someone else.

var mysql = require('mysql');
var pool  = mysql.createPool(...);

pool.getConnection(function(err, connection) {
  // Use the connection
  connection.query( 'SELECT something FROM sometable', function(err, rows) {
    // And done with the connection.
    connection.release();

    // Don't use the connection here, it has been returned to the pool.
  });
});
If you would like to close the connection and remove it from the pool, use connection.destroy() instead. The pool will create a new connection the next time one is needed.
PoolCluster
PoolCluster provides multiple hosts connection. (group & retry & selector)

// create
var poolCluster = mysql.createPoolCluster();
Performing queries
The most basic way to perform a query is to call the .query() method on an object (like a Connection or Pool instance).

The simplest form of .query() is .query(sqlString, callback), where a SQL string is the first argument and the second is a callback:

connection.query('SELECT * FROM `books` WHERE `author` = "David"', function (error, results, fields) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
});
scaping query values
In order to avoid SQL Injection attacks, you should always escape any user provided data before using it inside a SQL query. You can do so using the mysql.escape(), connection.escape() or pool.escape() methods:

var userId = 'some user provided value';
var sql    = 'SELECT * FROM users WHERE id = ' + connection.escape(userId);
connection.query(sql, function(err, results) {
  // ...
});


