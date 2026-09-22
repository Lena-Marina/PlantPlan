import { UUID } from "crypto";
import { Hardscape } from "./garden-bed-items/hardscape";
import { PlacedPlant } from "./garden-bed-items/placed-plant";

export class PlantGroup {
    id: UUID;
    name: string;
    description: string;
    items: (PlacedPlant | Hardscape)[];
    controlledByAdmin: boolean;

    constructor(id: UUID, name: string, description: string, items: (PlacedPlant | Hardscape)[], controlledByAdmin: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.items = items;
        this.controlledByAdmin = controlledByAdmin;
    }
}
