class BuildType {
    private readonly _name: string;

    private readonly _give: number;

    constructor(name: string, give: number) {
        this._name = name;
        this._give = give;
    }

    get name(): string {
        return this._name;
    }

    get give(): number {
        return this._give;
    }
}

export default BuildType;
