import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('adding new movie', () => {
    const cart = new Cart();
    cart.add(new Movie(1003, 'Groundhog Day', 1993, 'USA', 'He is having the day of his life... over and over again', 'comedy', 101, 600));
    
    const groundhogDay = [{id: 1003, name: 'Groundhog Day', year: 1993, country: 'USA', slogan: 'He is having the day of his life... over and over again', genre: 'comedy', time: 101, price: 600}];
    expect(cart._items).toEqual(groundhogDay);
  });