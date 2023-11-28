class Point3D {
    x;
    y;
    z;
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    printPoint3D () {
        console.log (`3DPoint: X=${this.x}, Y=${this.y}, Z=${this.z}`)
    }
    calculateDistance(P2) {
        let dx = P2.x = this.x;
        let dy = P2.y = this.y;
        let dz = P2.z = this.z;

        const distance = Math.sqrt(dx*dx + dy*dy + dz*dz);
        return distance;
    }

}
const point1 = new Point3D(1, 2, 3);
const point2 = new Point3D(4, 5, 6);

point1.printPoint3D();
point2.printPoint3D();

const distance = point1.calculateDistance(point2);
console.log(`Distance between the two points: ${distance}`);