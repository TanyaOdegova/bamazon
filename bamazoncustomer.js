var mysql = require("mysql");
var prompt = require("prompt");

/* mysql connection with the database */
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Bamazon"
});
connection.connect(function (err) {
    if (err) {
        console.log("Error connecting to DB");
        return;
    }
    console.log("Connection established");
    var schema = {
        properties: {
            ID: {
                message: "Please enter the name the product you would like to purchase",
                pattern: /^[0-9][0-9]$|^[0-9]$/,
                required: true
            },
            quantity: {
                message: "Please enter quantity of the products you'd like to purchase",
                pattern: /^[0-9][0-9]$[0-9]$/,
                required: true
            }
        }
    };

    var startApp = function () {
        conenction.query("SELECT * FROM Products", function (err, result) {
            return (getBamazonProducts(result));
        });
    }
    /* Display the products available for purchase */
    var getBamazonProducts = function (products) {
        for (var i = 0; i < products.length; i++) {
            var productsResults = "----------------------" + "\r\n" +
                "ItemID: " + products[i].ItemID + "\r\n" +
                "Product Description: " + products[i].ProductName + "\r\n" +
                "Department: " + products[i].DepartmentName + "\r\n" +
                "Price: $ " + products[i].Price;
            console.log(productsResults);
        }
        userSelectID();
    }
    var userSelectID = function () {
        prompt.start();
        console.log("Welcome to Bamazon Store. Please enter the name of the product you would like to purchase.");
        /* Error logging*/
        prompt.get(schema, function (err, result) {
            if (err) {
                console.log(err)
            }
        /* Result logging*/
        var userChoiceID= parseInt(result.ID);
    var userChoiceIDQuantity = parseInt(result.quantity);
        });
    }
startApp();
});