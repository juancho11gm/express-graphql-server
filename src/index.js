import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import root from './resolvers';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

app.listen(8080, () => console.log('App running http://localhost:8080'));
