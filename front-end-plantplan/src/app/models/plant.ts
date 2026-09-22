import { UUID } from "crypto";
import { PlantFamily_Type } from "../types/plant-family";
import { PlantDimensions } from "./plant-dimensions";
import { PlantNeed } from "./plant-need";
import { Months } from "../types/months";
import { CultivationMode } from "./cultivation-mode";
import { CompanionPlant } from "./companion-plant";

export class Plant {
    id: UUID;
    name: string;
    description: string;
    family: PlantFamily_Type;
    dimensions: PlantDimensions;
    imageUrl: string;
    searchTerms: string[];
    needs: PlantNeed[];
    plantingSeason: Months[];
    cultivationModes: CultivationMode[];
    goodCompanions: CompanionPlant[];
    badCompanions: CompanionPlant[];
    controlled_by_admin: boolean;


    
    constructor(id: UUID, name: string, description: string, family: PlantFamily_Type, dimensions: PlantDimensions, imageUrl: string, searchTerms: string[], needs: PlantNeed[], plantingSeason: Months[], cultivationModes: CultivationMode[], goodCompanions: CompanionPlant[], badCompanions: CompanionPlant[], controlled_by_admin: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.family = family;
        this.dimensions = dimensions;
        this.imageUrl = imageUrl;
        this.searchTerms = searchTerms;
        this.needs = needs;
        this.plantingSeason = plantingSeason;
        this.cultivationModes = cultivationModes;
        this.goodCompanions = goodCompanions;
        this.badCompanions = badCompanions;
        this.controlled_by_admin = controlled_by_admin;
    }
}


