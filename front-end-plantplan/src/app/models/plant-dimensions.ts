export class PlantDimensions {
    width!: number; // "!" assertion operator needed, because I use Setters in the constructor
    length!: number; // "!" assertion operator needed, because I use Setters in the constructor
    height?: number; // "?" optional operator, because I don't use height yet / am not shure If I will

    //Constructor
    constructor(width: number, length: number, height?: number) {
        this.setWidth(width);
        this.setLength(length);
        if (height !== undefined) {
            this.setHeight(height);
        }
    }

    //Setters
    setWidth(width: number) {
        if(width <= 0) {
            throw new Error("Invalid width. Must be a positive number.");
        }
        if(width%1 !== 0) {
            throw new Error("Invalid width. Must be an integer.");
        }
        this.width = width;
    }

    setLength(length: number) {
        if(length <= 0) {
            throw new Error("Invalid length. Must be a positive number.");
        }
        if(length%1 !== 0) {
            throw new Error("Invalid length. Must be an integer.");
        }
        this.length = length;
    }
    setHeight(height: number) {
        if(height <= 0) {
            throw new Error("Invalid height. Must be a positive number.");
        }   
        if(height%1 !== 0) {    
            throw new Error("Invalid height. Must be an integer.");
        }
        this.height = height;
    }

}

