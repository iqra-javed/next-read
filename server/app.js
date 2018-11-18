const express = require('express');
const graphqlHTTP = require("express-graphql"); 
const schema = require("./schema/schema");

const app = express();

app.use("/graphql", graphqlHTTP({ // middleware
    schema, // ES6 equivalent of schema: schema
    graphiql: true // graphiql is similar to postman
}));

app.listen(4000, () => {
    console.log("now listenting for requests on port 4000");
})