// GET /
// GET /about
// GET /contact
// POST /contact

// GET /books
// GET /books/:bookId
// GET /books/:bookId/reserve
// POST /books/:bookId/reserve

// GET /authors
// GET /authors/:authorId

import express from 'express';
import { authorRouter } from './routes/authorRouter.js';
import { bookRouter } from './routes/bookRouter.js';
import { indexRouter } from './routes/indexRouter.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Running book app. Listening on PORT: ${PORT}`);
});
