import AbstractCardType from './AbstractCardType';

class Sheep extends AbstractCardType {
    constructor() {
        super('Sheep', '', '');
    }
}

export default new Sheep();
