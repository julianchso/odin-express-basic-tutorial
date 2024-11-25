const authors = [
  { id: 1, name: 'Stephen King' },
  { id: 2, name: 'JRR Tolkien' },
  { id: 3, name: 'JK Rowling' },
];

async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

export { getAuthorById };
