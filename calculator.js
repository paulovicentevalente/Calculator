const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
	response.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

	// console.log(req.body);
	// console.log(req.body.num1);
	var num1 = Number(req.body.n1);
	var num2 = Number(req.body.n2);

	var result = num1 + num2;

	res.send("Result is:" + result);
});

app.get("/bmicalculator", function(request, response){
	response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){

	var weight = parseFloat(req.body.weight);
	var height = parseFloat(req.body.height);

	var result = weight/(height*height);

	res.send("Result is:" + result);
});

app.listen(3000,function(){
	console.log("Server started on port 3000");
});
