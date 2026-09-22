import { User_Type } from "../types/users";
import { LanguageCode } from "../types/language-codes";
import { GardenBed } from "../models/garden-bed";
import { UUID } from "crypto";

export class User {
    id: UUID;
    username: string;
    eMail: string;
    subscribedToNewsletter: boolean; //fraglich ob ich es tatsächlich hier brauche?
    languagePreference: LanguageCode;
    collectionSize: number;
    collection: GardenBed[];
    userLevel: User_Type;

    
    constructor(id: UUID, username: string, eMail: string, subscribedToNewsletter: boolean, languagePreference: LanguageCode, collectionSize: number, collection: GardenBed[], userLevel: User_Type) {
        this.id = id;
        this.username = username;
        this.eMail = eMail;
        this.subscribedToNewsletter = subscribedToNewsletter;
        this.languagePreference = languagePreference;
        this.collectionSize = collectionSize;
        this.collection = collection;
        this.userLevel = userLevel;
    }

    getProfilePictureUrl(): string {
        // Placeholder implementation, Todo: replace with actual logic to retrieve the profile picture URL
        return `https://example.com/users/${this.id}/profile-picture`;
    }



}
