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
    constructor(private query: any) {
        this.textSearch = query.textSearch;
        this.set.values = query.set;
        this.color = query.color;
        this.produces = query.produces;
        this.type = query.type;
        this.rarity = query.rarity;
    }
}
