import Cart from '../service/Cart';
import MusicAlbum from '../domain/MusicAlbum';

test('adding new music album', () => {
    const cart = new Cart();
    cart.add(new MusicAlbum(1007, 'Fear Inoculum', 'Tool', 1200));
    
    const fearInoculum = [{id: 1007, name: 'Fear Inoculum', author: 'Tool', price: 1200}];
    expect(cart._items).toEqual(fearInoculum);
  });