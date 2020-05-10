import AbstractCardType from './AbstractCardType';

class Wheat extends AbstractCardType {
    constructor() {
        super('Wheat', '', '');
    }
}

export default new Wheat();
