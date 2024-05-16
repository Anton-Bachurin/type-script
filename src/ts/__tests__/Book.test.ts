import Cart from '../service/Cart';
import Book from '../domain/Book';

test('adding new book', () => {
    const cart = new Cart();
    cart.add(new Book(1002, 'A Fine Balance', 'Rohinton Mistry', 1500, 704));
    
    const fineBalance = [{id: 1002, name: 'A Fine Balance', author: 'Rohinton Mistry', price: 1500, pages: 704}];
    expect(cart._items).toEqual(fineBalance);
  });