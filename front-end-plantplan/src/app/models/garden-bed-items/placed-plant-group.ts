import { UUID } from "crypto";
import { GardenBedItem } from "../garden-bed-item";
import { PlantGroup } from "../plant-group";

export class PlacedPlantGroup extends GardenBedItem {
    referencedPlantGroup: PlantGroup;

    constructor(id: UUID, coords: { x: number; y: number }, referencedPlantGroup: PlantGroup) {
        super(id, coords);
        this.referencedPlantGroup = referencedPlantGroup;
    }
}
