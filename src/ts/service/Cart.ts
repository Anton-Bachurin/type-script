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
        return [...this.items].reduce(
          function (accumulator, currentItem) {
            return accumulator + currentItem.price;
          }, 0)
    }

    getDiscountSum(discount: number): number {
        return this.getSum() - discount;
    }

    remove(id: number): void {
      this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}
