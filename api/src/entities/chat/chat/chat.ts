export interface Chat {
    id: string;
    userIDs: string[];
    seenBy: string[];
    lastMessage: string;
    createdAt: Date;
}