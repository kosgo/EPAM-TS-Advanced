import { ReferenceItem } from './ReferenceItem';

export default class Encyclopedia extends ReferenceItem {
    constructor(title, year, public edition) {
        super(title, year);
    }

    printItem() {
        super.printItem();

        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
