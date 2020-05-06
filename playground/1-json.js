const fs = require("fs");

const jsonBuffer = fs.readFileSync("1-json.json");
const jsonToString = jsonBuffer.toString();
const jsonData = JSON.parse(jsonToString);

jsonData.name = "Léo";
jsonData.age = 26;

const jsonStringified = JSON.stringify(jsonData);

fs.writeFileSync("1-json.json", jsonStringified);
