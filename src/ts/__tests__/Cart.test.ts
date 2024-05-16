import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('getting of items', () => {
  const cart = new Cart();
  
  cart.add(new Book(1002, 'A Fine Balance', 'Rohinton Mistry', 1500, 704));
  cart.add(new MusicAlbum(1007, 'Fear Inoculum', 'Tool', 1200));
  cart.add(new Movie(1003, 'Groundhog Day', 1993, 'USA', 'He is having the day of his life... over and over again', 'comedy', 101, 600));

  expect(cart.items.length).toBe(3);
});

test('the hole cost', () => {
  const cart = new Cart();

  cart.add(new Book(1002, 'A Fine Balance', 'Rohinton Mistry', 1500, 704));
  cart.add(new MusicAlbum(1007, 'Fear Inoculum', 'Tool', 1200));
  cart.add(new Movie(1003, 'Groundhog Day', 1993, 'USA', 'He is having the day of his life... over and over again', 'comedy', 101, 600));

  expect(cart.getSum()).toBe(3300);
});

test('the cost with discount', () => {
  const cart = new Cart();

  cart.add(new Book(1002, 'A Fine Balance', 'Rohinton Mistry', 1500, 704));
  cart.add(new MusicAlbum(1007, 'Fear Inoculum', 'Tool', 1200));
  cart.add(new Movie(1003, 'Groundhog Day', 1993, 'USA', 'He is having the day of his life... over and over again', 'comedy', 101, 600));

  expect(cart.getDiscountSum(500)).toBe(2800);
});

test('removing', () => {
  const cart = new Cart();

  cart.add(new Book(1002, 'A Fine Balance', 'Rohinton Mistry', 1500, 704));
  cart.add(new MusicAlbum(1007, 'Fear Inoculum', 'Tool', 1200));
  cart.add(new Movie(1003, 'Groundhog Day', 1993, 'USA', 'He is having the day of his life... over and over again', 'comedy', 101, 600));

  cart.remove(1007)

  expect(cart._items).toEqual([{id: 1002, name: 'A Fine Balance', author: 'Rohinton Mistry', price: 1500, pages: 704}, 
  {id: 1003, name: 'Groundhog Day', year: 1993, country: 'USA', slogan: 'He is having the day of his life... over and over again', genre: 'comedy', time: 101, price: 600}]);
});
