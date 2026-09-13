import { UUID } from "crypto";
import { User } from "./user";
import { SoilNeed_Type } from "../types/soil-needs";
import { LightNeed_Type } from "../types/light-needs";
import { GardenBedItem } from "./garden-bed-item";

export class GardenBed {
    id: UUID;
    creator: User;
    name: string;
    description: string;
    startCalendarWeek!: number; // I need the "!" assertion operator , because I use Setters in the constructor
    length!: number; // I need the "!" assertion operator , because I use Setters in the constructor
    width!: number; // I need the "!" assertion operator , because I use Setters in the constructor
    soilCondition: SoilNeed_Type;
    lightCondition: LightNeed_Type;
    is_public: boolean;
    is_active: boolean;
    items: GardenBedItem[];

    //Constructor
    constructor(id: UUID, creator: User, name: string, description: string, startCalendarWeek: number, length: number, width: number, soilCondition: SoilNeed_Type, lightCondition: LightNeed_Type, is_public: boolean, is_active: boolean, items: GardenBedItem[]) {
        this.id = id;
        this.creator = creator;
        this.name = name;
        this.description = description;
        this.setStartCalendarWeek(startCalendarWeek);
        this.setLength(length);
        this.setWidth(width);
        this.soilCondition = soilCondition;
        this.lightCondition = lightCondition;
        this.is_public = is_public;
        this.is_active = is_active;
        this.items = items;
    }

    //Setters with validation
    setStartCalendarWeek(week: number) {
        if(week < 1 || week > 52) {
            throw new Error("Invalid calendar week. Must be between 1 and 52.");
        }
        if(week%1 !== 0) {
            throw new Error("Invalid calendar week. Must be an integer.");
        }
        this.startCalendarWeek = week;
    }

    setLength(length: number) {
        if(length <= 0) {
            throw new Error("Invalid length. Must be a positive number.");
        }
        if(length%1 !== 0) {
            throw new Error("Invalid length. Must be an integer.");
        }
        this.length = length;
    }

    setWidth(width: number) {
        if(width <= 0) {
            throw new Error("Invalid width. Must be a positive number.");
        }
        if(width%1 !== 0) {
            throw new Error("Invalid width. Must be an integer.");
        }
        this.width = width;
    }
}
