import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1009, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'fantastic', 137, 800));
cart.remove(1009);

console.log(cart.items);
console.log(cart.getSum());
console.log(cart.getDiscountSum(800));

