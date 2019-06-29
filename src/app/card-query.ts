export class CardQuery {
    textSearch: string;
    set: {
        values: [string]
    };
    color: {
        values: [string],
        modifiers: {
            and: boolean,
            only: boolean
        }
    };
    produces: {
        values: [string],
        modifiers: {
            and: boolean,
            only: boolean
        }
    };
    type: {
        values: [string],
        modifiers: {
            and: boolean,
            or: boolean
        }
    };
    rarity: {
        values: [string]
    };
    constructor(private search: string) {
        this.textSearch = search;
    }
}
