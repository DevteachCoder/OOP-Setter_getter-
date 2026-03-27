// class Rectangle {
//     constructor(_width, _height, _color ) {
//         console.log("The rectangle is being created");

//         this.width = _width;
//         this.height = _height;
//         this.color = _color
//     }
//     getArea() {
//         return this.width * this.height
//     }

//     printDescription () {
//         console.log(`I am a rectangle od ${this.width} x ${this.height} and i am ${this.color}`);
        
//     }
// }

// let myRectangle = new Rectangle(5,4, "red");
// console.log(myRectangle.getArea());


class ListBinding {
            constructor(element) {
                this.listElement = element,
                this.textList = []
            }

            update() {
                while(this.listElement.firstChild) {
                    this.listElement.removeChild(this.listElement.firstChild)
                }
            }
        }
