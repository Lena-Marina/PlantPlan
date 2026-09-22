import { PlantNeed } from "../plant-need";
import { SoilNeed_Type } from "../../types/soil-needs";

export class SoilNeed extends PlantNeed {
    constructor(need: SoilNeed_Type) {
        super("soil", need);
    }
}
