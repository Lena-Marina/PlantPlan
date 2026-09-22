import { CultivationStep } from "./cultivation-step";

export class CultivationMode {
    name: string;
    cultivationSteps: CultivationStep[];

    constructor(name: string, cultivationSteps: CultivationStep[]) {
        this.name = name;
        this.cultivationSteps = cultivationSteps;
    }
}
