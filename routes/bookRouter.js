import { Router } from 'express';

const bookRouter = Router();

bookRouter.get('/', (req, res) => {
  res.send('All books');
});

bookRouter.get('/:bookId', (req, res) => {
  const { bookId } = req.params;
  res.send(`book ID: ${bookId}`);
});

export { bookRouter };
