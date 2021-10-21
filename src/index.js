import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import root from './resolvers';
import { connect } from './database';

const app = express();

connect();

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
    context: {
      messageId: 'test',
    },
  })
);

app.listen(8080, () => console.log('App running http://localhost:8080'));
