import { getAuthorById as getAuthorByIdDb } from '../db.js';
import { CustomNotFoundError } from '../errors/CustomNotFoundError.js';

async function getAuthorById(req, res) {
  const { authorId } = req.params;
  // try {
  const author = await getAuthorByIdDb(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError('Author not found custom');
  }

  res.send(`Author Name: ${author.name}`);
}
// catch (err) {
//   console.error('Error retrieving author:', err);
//   res.status(500).send('Internal Server Error');
// }

export { getAuthorById };
