class Point {
    constructor (x, y){
     this.x = x;
     this.y = y;
    }

    static distance (point1, point2){
        let distanceX = point1.x - point2.x;
        let distanceY = point1.y - point2.y;
        let distanceXY = Math.sqrt(distanceX*distanceX + distanceY*distanceY);
        return distanceXY;
    }
}

let p1 = new Point(3,3);
let p2 = new Point(10,15);
console.log(Point.distance(p1, p2));
