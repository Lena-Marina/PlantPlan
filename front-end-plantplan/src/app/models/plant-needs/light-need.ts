import { PlantNeed } from "../plant-need";
import { LightNeed_Type } from "../../types/light-needs";

export class LightNeed extends PlantNeed {

    constructor(need: LightNeed_Type) {
        super("light", need);
    }
}
