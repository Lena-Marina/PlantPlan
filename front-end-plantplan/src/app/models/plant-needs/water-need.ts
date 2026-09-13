import { PlantNeed } from "../plant-need";
import { WaterNeed_Type } from "../../types/water-needs";

export class WaterNeed extends PlantNeed {
    constructor(need: WaterNeed_Type) {
        super("water", need);
    }
}
