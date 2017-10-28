var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	
	host:"localhost",
	port: 3306,

	user: "root",

	password:"",
	database: "bamazon"

});

connection.connect(function (err) {
	if (err) throw err;

    console.log("connected as id" + connection.threadId );

    connection.query("SELECT item_id, product_name, price FROM bamazon.products", function(err, results, fields) {
        console.log("ITEMS FOR SALE:");
        console.log(results);
    });

    inquirer
    .prompt([
      {
        type: "input",
        message: "What Item ID would you like to bid on?",
        name: "biddingID"
      },
      {
        type: "input", 
        message: "How many units would you like to purchase?",
        name: "units" 
      }
    ]).then(function(answers) {

        var bidId = answers.biddingID;
        
        connection.query("SELECT item_id, product_name, price FROM bamazon.products WHERE 'item_id' = ?", bidId, function(err, res, fields) {
            
            console.log(res);        
        });

        console.log(answers);

        console.log(bidID);

        console.log(unitNum);

    });  

connection.end();    });