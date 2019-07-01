export class QueryModifier {
    and: boolean;
    only: boolean;
    or: boolean;
    constructor(private andVal: boolean, private onlyVal: boolean, private orVal: boolean) {
        this.and = andVal;
        this.only = onlyVal;
        this.or = orVal;
    }
}

export class SetQuery {
    values: [string];
    constructor(private valuesArr: [string]) {
        this.values = valuesArr;
    }
}

export class ColorQuery {
    values: [string];
    modifiers: QueryModifier;
    constructor(private valuesArr: [string], private modifiersVal: QueryModifier) {
        this.values = valuesArr;
        this.modifiers = modifiersVal;
    }
}

export class ProducesQuery {
    values: [string];
    modifiers: QueryModifier;
    constructor(private valuesArr: [string], private modifiersVal: QueryModifier) {
        this.values = valuesArr;
        this.modifiers = modifiersVal;
    }
}

export class TypeQuery {
    values: [string];
    modifiers: QueryModifier;
    constructor(private valuesArr: [string], private modifiersVal: QueryModifier) {
        this.values = valuesArr;
        this.modifiers = modifiersVal;
    }
}

export class RarityQuery {
    values: [string];
    constructor(private valuesArr: [string]) {
        this.values = valuesArr;
    }
}

export class CardQuery {
    textSearch: string;
    set: SetQuery;
    color: ColorQuery;
    produces: ProducesQuery;
    type: TypeQuery;
    rarity: RarityQuery;
    constructor(private query: any) {
        this.textSearch = query.textSearch;
        this.set = query.set;
        this.color = query.color;
        this.produces = query.produces;
        this.type = query.type;
        this.rarity = query.rarity;
    }
}
