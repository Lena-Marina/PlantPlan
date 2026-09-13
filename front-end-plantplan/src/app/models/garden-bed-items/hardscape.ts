import { GardenBedItem } from "../garden-bed-item";
import { Coordinates } from "../coordinates";
import { UUID } from "crypto";

export class Hardscape extends GardenBedItem {
    name: string;
    length: number;
    width: number;
    colourCode: string;

    constructor(id: UUID, coords: Coordinates, name: string, length: number, width: number, colourCode: string) {
        super(id, coords);
        this.name = name;
        this.length = length;
        this.width = width;
        this.colourCode = colourCode;
    }

}
