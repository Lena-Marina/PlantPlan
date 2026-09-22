import { PlantFamily_Type } from "../types/plant-family";

export class CompanionPlant {
    family: PlantFamily_Type;
    reason: string;

    constructor(family: PlantFamily_Type, reason: string) {
        this.family = family;
        this.reason = reason;
    }
}
