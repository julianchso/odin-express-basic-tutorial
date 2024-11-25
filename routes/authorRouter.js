import { Router } from 'express';
import { getAuthorById } from '../controllers/authorController.js';

const authorRouter = Router();

// GETs from the author path since this path will only be usable for the path that starts with /author, NOT root ('/') path
authorRouter.get('/', (req, res) => {
  res.send('All authors');
});

authorRouter.get('/:authorId', getAuthorById);

// authorRouter.get('/:authorId', (req, res) => {
//   const { authorId } = req.params;
//   res.send(`Author ID: ${authorId}`);
// });

export { authorRouter };
