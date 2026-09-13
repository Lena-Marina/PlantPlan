import { UUID } from "crypto";
import { Hardscape } from "./garden-bed-items/hardscape";
import { PlacedPlant } from "./garden-bed-items/placed-plant";

export class PlantGroup {
    id: UUID;
    name: string;
    description: string;
    items: (PlacedPlant | Hardscape)[];
}
