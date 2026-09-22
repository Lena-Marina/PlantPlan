import { UUID } from "crypto";
import { Coordinates } from "./coordinates";

export class GardenBedItem {
    id: UUID;
    coords: Coordinates;

    constructor(id: UUID, coords: Coordinates) {
        this.id = id;
        this.coords = coords;
    }

}
