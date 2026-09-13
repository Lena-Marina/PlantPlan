import { CultivationStep_Type } from "../types/cultivation-steps";

export class CultivationStep {

    type: CultivationStep_Type;
    description: string;
    weeksFromPlanting: number;

    constructor(type: CultivationStep_Type, description: string, weeksFromPlanting: number) {
        this.type = type;
        this.description = description;
        this.weeksFromPlanting = weeksFromPlanting;
    }
    
}
