const {
  storeBookHandler,
  getAllHandler,
  getByIdHandler,
  updateBookHandler,
  deleteBookHandler,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: getAllHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getByIdHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: storeBookHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
