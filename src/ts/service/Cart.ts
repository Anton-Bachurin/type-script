import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getSum(): number {
        let sum: number = 0;
        for (let i: number = 0; i < this._items.length; i++) {
          sum += this._items[i].price;
        }
      return sum;
    }

    getDiscountSum(discount: number): number {
        return this.getSum() - discount;
    }

    remove(id: number): void {
      let filteredItems: Buyable[] = this._items.filter((delObj) => delObj.id !== id);
      [...this._items] = filteredItems;
    }
}
