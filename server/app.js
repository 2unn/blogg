const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

//Load schema & resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

const mongoDataMethods = require("./data/db");

//Connect MongoDB

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://2unn:123456a@blog-database.kpbzaag.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongGoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods }),
});

const app = express();
const main = async () => {
  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () => {
    console.log(`server ready at http://localhost:4000${server.graphqlPath}`);
  });
};
main();
