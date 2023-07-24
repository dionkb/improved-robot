const express = require('express');
// const { ApolloServer } = require('apollo-server-express'); ADD THIS WHEN READY
const path = require('path');
// const { typeDefs, resolvers } = require('./schemas'); ADD THIS WHEN READY
const db = require('./config/connection');
const routes = require('./routes'); // REMOVE THIS WHEN READY

const app = express();
const PORT = process.env.PORT || 3001;
// const server = new ApolloServer({ ADD THIS WHEN READY
//   typeDefs,
//   resolvers,
//   // context: middleware (will go here)
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes); // REMOVE THIS WHEN READY
// app.get('/', (req, res) => { REPLACE ABOVE WITH THIS WHEN READY
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once('open', () => { // SWAP THIS FOR BELOW WHEN READY
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
// const startApolloServer = async () => { SWAP WITH ABOVE WHEN READY
//   await server.start();
//   server.applyMiddleware({ app });

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//     });
//   });
// };

// startApolloServer(); ADD THIS WHEN READY
