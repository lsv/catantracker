import AbstractCardType from './AbstractCardType';

class Wood extends AbstractCardType {
    constructor() {
        super('Wood', '', '');
    }
}

export default new Wood();
