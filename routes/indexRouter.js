import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.send('index router home page');
});

export { indexRouter };
