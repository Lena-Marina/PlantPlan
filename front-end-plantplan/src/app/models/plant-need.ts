import { PlantNeed_Type } from "../types/plant-needs";
import { SoilNeed_Type } from "../types/soil-needs";
import { WaterNeed_Type } from "../types/water-needs";
import { LightNeed_Type } from "../types/light-needs";

export class PlantNeed {
    type: PlantNeed_Type;
    need: SoilNeed_Type | WaterNeed_Type | LightNeed_Type;

    constructor(type: PlantNeed_Type, need: SoilNeed_Type | WaterNeed_Type | LightNeed_Type) {
        this.type = type;
        this.need = need;
    }
}

