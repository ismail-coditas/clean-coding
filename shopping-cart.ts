export class ShoppingCart {

    private cartItems: { [itemName: string]: number } = {};

    constructor() { }

    addItem(itemName: string, itemPrice: number) {
        if (itemName in this.cartItems) {
            this.cartItems[itemName] = this.cartItems[itemName] + itemPrice;
        } else {
            this.cartItems[itemName] = itemPrice;
        }
    }

    removeItem(itemName: string) {
        if (itemName in this.cartItems) {
            delete this.cartItems[itemName];
        } else {
            console.log(`${itemName} is not present in the cart.`);
        }
    }


    calculateTotalPrice(): number {
        let total = 0;
        for (const itemPrice of Object.values(this.cartItems)) {
            total = total + itemPrice;
        }
        return total;
    }


    displayCartItems(): { [itemName: string]: number } {
        return this.cartItems;
    }
}
