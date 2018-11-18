const express = require('express');
const graphqlHTTP = require("express-graphql"); // middleware
const schema = require("./schema/schema");

const app = express();

app.use("/graphql", graphqlHTTP({
    schema // ES6 equivalent of schema: schema 
}));

app.listen(4000, () => {
    console.log("now listenting for requests on port 4000");
})