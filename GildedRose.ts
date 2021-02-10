export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i].name !== 'Sulfuras, Hand of Ragnaros' && this.items[i].quality < 0 || this.items[i].quality > 50) {
                return 'Invalid Item. Please check the input'
            }
            if(this.items[i].name === 'Sulfuras, Hand of Ragnaros' && this.items[i].quality !== 80) {
                return 'Invalid Item. Please check the input'
            }

            switch (this.items[i].name) {
                case 'Aged Brie':
                    if(this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1;
                    }
                    break;
                case 'Sulfuras, Hand of Ragnaros':
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    if (this.items[i].sellIn <= 10 && this.items[i].sellIn > 6) {
                        if (this.items[i].quality <= 48) {
                            this.items[i].quality = this.items[i].quality + 2;
                        }
                    }
                    if (this.items[i].sellIn <= 5  && this.items[i].sellIn > 0) {
                        if (this.items[i].quality <= 47) {
                            this.items[i].quality = this.items[i].quality + 3;
                        }
                    }
                    if (this.items[i].sellIn <= 0) {
                        this.items[i].quality = 0;
                    }
                    break;
                case 'Conjured':
                    if(this.items[i].quality > 1) {
                        this.items[i].quality = this.items[i].quality - 2;
                    }
                    break;
                default:
                    if(this.items[i].sellIn < 0 && this.items[i].quality > 1) {
                        this.items[i].quality = this.items[i].quality - 2;
                    }
                    break;
            }
            this.items[i].sellIn = this.items[i].sellIn - 1;
        }

        return this.items;
    }
}