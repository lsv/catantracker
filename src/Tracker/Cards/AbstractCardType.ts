import { CardType } from './CardType';

export default abstract class AbstractCardType implements CardType {
    public _name: string;

    public _icon: string;

    public _miniicon: string;

    protected constructor(name: string, icon: string, miniicon: string) {
        this._name = name;
        this._icon = icon;
        this._miniicon = miniicon;
    }

    get name(): string {
        return this._name;
    }

    get icon(): string {
        return this._icon;
    }

    get miniicon(): string {
        return this._miniicon;
    }
}
