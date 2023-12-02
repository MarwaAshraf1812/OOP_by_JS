#!/usr/bin/node

class Rectangle {
    constructor (w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
        else {
            this.width = undefined;
            this.height = undefined;
        }
    }
    print() {
        let i = 0;
        while (i < this.height) {
            console.log('X'.repeat(this.width));
            i++;
        }
    }

}

// module.exports = Rectangle;

const r1 = new Rectangle(2, 3);
r1.print();

const r2 = new Rectangle(10, 5);
r2.print();